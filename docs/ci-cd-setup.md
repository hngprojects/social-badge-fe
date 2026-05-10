# CI/CD Pipeline — Developer Guide

A practical reference for frontend engineers working on this project. It covers how the pipeline works, what triggers it, and how to confidently ship changes across environments.

---

## Table of Contents

1. [Branch Strategy](#1-branch-strategy)
2. [How the CI Pipeline Works](#2-how-the-ci-pipeline-works)
3. [Pre-commit Hooks (Local Gates)](#3-pre-commit-hooks-local-gates)
4. [Environment Variables](#4-environment-variables)
5. [The Developer Workflow](#5-the-developer-workflow)
6. [Testing in Staging](#6-testing-in-staging)
7. [Promoting to Production](#7-promoting-to-production)
8. [What to Do When CI Fails](#8-what-to-do-when-ci-fails)
9. [Common Mistakes to Avoid](#9-common-mistakes-to-avoid)

---

## 1. Branch Strategy

The project uses a three-tier branch model that maps directly to environments:

| Branch    | Environment | Purpose                                       |
| --------- | ----------- | --------------------------------------------- |
| `dev`     | Development | Active development — where feature work lands |
| `staging` | Staging     | Pre-production validation                     |
| `main`    | Production  | Live, customer-facing code                    |

**The rule is simple:** code flows in one direction — `dev` → `staging` → `main`. Never skip a stage, and never push feature work directly to `staging` or `main`.

---

## 2. How the CI Pipeline Works

The pipeline is defined in `.github/workflows/CI.yml` and runs automatically on GitHub Actions.

### When it runs

| Event          | Branches watched         |
| -------------- | ------------------------ |
| `push`         | `dev`, `staging`, `main` |
| `pull_request` | `staging`, `main`        |

Every push to any of those branches triggers a CI run. Every PR targeting `staging` or `main` also triggers one — and must pass before the PR can be merged.

### What the pipeline does

```
Checkout code → Install dependencies → Type check → Build
```

1. **Checkout** — fetches the exact commit being tested.
2. **Install dependencies** (`npm ci`) — installs from `package-lock.json` for a reproducible build. Never uses a cache that could mask real install failures.
3. **Type check** (`npm run type-check`) — runs `tsc --noEmit` across the entire codebase. TypeScript errors fail the build here before they ever reach staging.
4. **Build** (`npm run build`) — runs `next build`. This validates that the app compiles correctly, all imports resolve, and environment variables pass schema validation (see [Environment Variables](#4-environment-variables)).

If any step fails, all subsequent steps are skipped and the run is marked failed. A failed run on a PR blocks the merge.

---

## 3. Pre-commit Hooks (Local Gates)

Before code even reaches GitHub, Husky runs a `pre-commit` hook that formats all staged files with Prettier via `lint-staged`.

**What gets formatted on commit:**

| File types                         | Action             |
| ---------------------------------- | ------------------ |
| `*.ts`, `*.tsx`, `*.js`, `*.jsx`   | `prettier --write` |
| `*.json`, `*.css`, `*.md`, `*.mdx` | `prettier --write` |

This means your commits will always be consistently formatted, keeping diffs clean and code reviews focused on logic rather than style.

### Setup (one-time, per machine)

Husky installs its hooks automatically when you run `npm install` because of the `"prepare": "husky"` script in `package.json`. No extra steps needed.

To verify hooks are active:

```bash
cat .husky/pre-commit
# should output: pnpm exec lint-staged
```

> **Note:** The hook uses `pnpm exec` internally. If you are using `npm`, Husky will still fire on commit — Prettier is what matters, not the package manager invocation inside the hook.

---

## 4. Environment Variables

This project uses [`@t3-oss/env-nextjs`](https://env.t3.gg/) with Zod schemas to validate environment variables at **build time**. If a required variable is missing or malformed, the build fails immediately — by design.

### Variable files

| File                | Scope       | Accessible in         |
| ------------------- | ----------- | --------------------- |
| `src/env/client.ts` | Client-side | Browser + server      |
| `src/env/server.ts` | Server-side | Server only (SSR/API) |

### Defined variables

**Client (`src/env/client.ts`)**

| Variable               | Required | Default                 | Description             |
| ---------------------- | -------- | ----------------------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL`  | No       | `http://localhost:3000` | Public URL of the app   |
| `NEXT_PUBLIC_APP_NAME` | No       | `Next Starter`          | Display name of the app |

**Server (`src/env/server.ts`)**

| Variable       | Required | Default       | Description                                    |
| -------------- | -------- | ------------- | ---------------------------------------------- |
| `NODE_ENV`     | No       | `development` | Must be `development`, `test`, or `production` |
| `API_BASE_URL` | No       | —             | Backend API base URL                           |
| `API_SECRET`   | No       | —             | Secret key for API auth                        |

### How to set variables per environment

- **Local development** — create a `.env.local` file at the project root (this file is gitignored).
- **Staging / Production** — set variables in your deployment platform (Vercel, Railway, etc.) under the relevant environment scope.
- **GitHub Actions** — add secrets under **Settings → Secrets and variables → Actions** in the GitHub repo. Reference them in the workflow with `${{ secrets.VARIABLE_NAME }}`.

### Skipping validation (CI workaround)

If you need to run a build step without real variable values (e.g., in a purely static CI job), set:

```bash
SKIP_ENV_VALIDATION=1 npm run build
```

This bypasses Zod validation. Only use this when you know the variables are not needed for the step being run.

---

## 5. The Developer Workflow

### Day-to-day feature development

```bash
# 1. Branch off dev
git checkout dev
git pull origin dev
git checkout -b feat/your-feature-name

# 2. Make your changes, commit freely
git add .
git commit -m "feat: add X"
# Pre-commit hook runs automatically — Prettier formats staged files

# 3. Push and open a PR against dev
git push origin feat/your-feature-name
# Open PR: feat/your-feature-name → dev
```

CI runs on `dev` after your PR merges. No CI gate is required to merge into `dev`, but the pipeline will still run and failures will be visible.

### Naming conventions

| Type          | Format                         | Example                     |
| ------------- | ------------------------------ | --------------------------- |
| Feature       | `feat/<short-description>`     | `feat/user-profile-page`    |
| Bug fix       | `fix/<short-description>`      | `fix/avatar-overflow`       |
| Docs          | `docs/<short-description>`     | `docs/ci-cd-setup`          |
| Chore/tooling | `chore/<short-description>`    | `chore/update-dependencies` |
| Refactor      | `refactor/<short-description>` | `refactor/auth-module`      |

---

## 6. Testing in Staging

Staging is the final validation gate before production. Any PR into `staging` **must pass CI** before it can be merged. This is enforced by GitHub's branch protection rules.

### How to get your changes into staging

```bash
# 1. Ensure dev is up to date and your work is merged there
git checkout dev
git pull origin dev

# 2. Open a PR: dev → staging (do NOT merge dev into staging locally)
# Use GitHub UI: Compare & pull request, base: staging, compare: dev
```

On the PR:

- CI will run automatically (type check + build).
- At least one reviewer should approve the changes.
- Only merge once CI is green.

### What to validate in staging before approving

Before marking a staging PR as ready for review or approving one, run through these checks:

- [ ] The app builds and starts without errors (`npm run build && npm start`).
- [ ] All new UI components render correctly across breakpoints.
- [ ] Any new environment variables are configured on the staging deployment platform.
- [ ] Network requests hit the correct staging API endpoints (check `API_BASE_URL`).
- [ ] No `console.error` or unhandled promise rejections in the browser console.
- [ ] Forms, interactions, and flows touched by the change work end-to-end.

### Deploying staging (platform-specific)

Depending on your deployment target, merging into `staging` may trigger an automatic deploy. If it does not:

- **Vercel**: set `staging` as a preview branch in project settings. Each merge auto-deploys.
- **Other platforms**: configure the deployment to watch the `staging` branch.

---

## 7. Promoting to Production

Production (`main`) follows the same pattern as staging but with stricter scrutiny.

```bash
# Open a PR: staging → main (GitHub UI)
# base: main, compare: staging
```

Before merging to `main`:

- [ ] The staging environment has been running the change for a reasonable soak period.
- [ ] No regressions have been reported against staging.
- [ ] CI is green on the PR.
- [ ] All required approvals are in place.
- [ ] Production environment variables are confirmed correct.

After merging to `main`, monitor your deployment platform and error tracking tool for any spikes.

---

## 8. What to Do When CI Fails

### Type check failure (`npm run type-check`)

Run it locally first to see the full error output:

```bash
npm run typecheck
```

Common causes:

- Missing or incorrect prop types on a component.
- Using a value that could be `undefined` without a null check.
- Import of a type that no longer exists or was renamed.

Fix the type errors, commit, and push — CI will re-run automatically.

### Build failure (`npm run build`)

```bash
npm run build
```

Common causes:

- **Environment variable validation failed** — a variable defined in `src/env/server.ts` or `src/env/client.ts` is missing. Add it to `.env.local` locally or to the CI secrets in GitHub.
- **Import errors** — a module path is wrong or a package was not installed.
- **Syntax errors** — something that TypeScript missed but the bundler caught.

If the build passes locally but fails in CI, the most likely cause is a missing environment variable that you have set locally but not in GitHub Secrets.

### Dependency install failure (`npm ci`)

`npm ci` is strict — it installs exactly what is in `package-lock.json` and will error if `package.json` and `package-lock.json` are out of sync.

```bash
# If you added a package locally, make sure to commit the updated lockfile
git add package-lock.json
git commit -m "chore: update lockfile"
```

---

## 9. Common Mistakes to Avoid

| Mistake                                                 | Why it's a problem                                                       | What to do instead                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Pushing directly to `staging` or `main`                 | Bypasses CI and peer review                                              | Always use a PR                                                                 |
| Skipping `dev` and opening a PR straight to `staging`   | Changes are untested in dev                                              | Merge to `dev` first                                                            |
| Committing `.env.local`                                 | Exposes secrets in git history                                           | It is already in `.gitignore` — leave it there                                  |
| Adding a new env variable in code but not in the schema | Build will pass locally (if the var is set) but fail for others or in CI | Always update `src/env/client.ts` or `src/env/server.ts` when adding a variable |
| Force-pushing to shared branches                        | Rewrites history, breaks others' local copies                            | Use a new commit to fix mistakes on shared branches                             |
| Merging a PR with a failing CI run                      | Introduces broken code to the branch                                     | Fix CI first, then merge                                                        |

---

## Quick Reference

```bash
# Local checks before pushing (mirrors CI)
npm run typecheck   # TypeScript check
npm run build       # Full production build

# Check Prettier formatting manually
npx prettier --check .

# Fix formatting manually
npx prettier --write .
```

**Branch flow summary:**

```
feat/* or fix/* → dev → staging → main
                  (CI)   (CI + review) (CI + review + soak)
```
