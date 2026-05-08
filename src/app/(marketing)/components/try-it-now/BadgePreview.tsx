import { forwardRef } from 'react';
import Image from 'next/image';
import { BadgeState, BadgeStyle } from '../../types/badge';

interface Props {
  badge: BadgeState;
}

interface BadgeLayoutVariant {
  root: string;
  topBand: { wrapper: string; avatarOuter: string; eventOuter: string; eventText: string };
  identity: { wrapper: string; name: string; role: string };
  decorativeCircle: string;
}

const TRANSITION_LAYER =
  'transition-all duration-300 ease-in-out motion-reduce:transition-none motion-reduce:transform-none';

function DecorativeBottomSquare() {
  return (
    <div
      className={`pointer-events-none absolute bottom-3 right-3 ${TRANSITION_LAYER}`}
      aria-hidden
    >
      <div className="w-7 h-7 p-1 bg-white/10 rounded-md inline-flex flex-col justify-start items-start">
        <div className="self-stretch self-stretch bg-white/60 rounded-[1px]" />
        <div className="self-stretch self-stretch bg-white/60 rounded-[1px]" />
        <div className="self-stretch self-stretch bg-white/60 rounded-[1px]" />
        <div className="self-stretch self-stretch bg-white/60 rounded-[1px]" />
        <div className="self-stretch self-stretch bg-white/60 rounded-[1px]" />
      </div>
    </div>
  );
}

const BADGE_LAYOUT: Record<BadgeStyle, BadgeLayoutVariant> = {
  classic: {
    root: '',
    topBand: {
      wrapper: `absolute inset-x-0 top-0 z-10 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 pl-4 pr-16 pt-3 ${TRANSITION_LAYER}`,
      avatarOuter: 'h-10 w-10 shrink-0',
      eventOuter: 'min-w-0 flex-1',
      eventText:
        'text-left text-[10px] font-semibold uppercase leading-snug tracking-wider truncate drop-shadow-[0_1px_1px_rgba(0,0,0,.12)]',
    },
    identity: {
      wrapper: `absolute bottom-11 left-4 right-[3rem] z-10 flex flex-col items-start gap-0.5 text-left ${TRANSITION_LAYER}`,
      name: 'font-bold tabular-nums text-lg md:text-xl leading-tight truncate max-w-full',
      role: 'text-[11px] font-medium uppercase tracking-widest truncate max-w-[95%]',
    },
    decorativeCircle: `pointer-events-none absolute right-3 top-2 h-10 w-10 rounded-full border-[2px] border-white/35 ${TRANSITION_LAYER}`,
  },

  centered: {
    root: '',
    topBand: {
      wrapper: `absolute left-1/2 top-3 z-10 flex w-[92%] max-w-[272px] -translate-x-1/2 flex-col items-center gap-2 text-center px-3 ${TRANSITION_LAYER}`,
      avatarOuter: 'h-11 w-11 shrink-0',
      eventOuter: 'flex w-full min-w-0 max-w-[19rem] justify-center px-1',
      eventText:
        'line-clamp-1 w-full text-center text-[10px] font-semibold uppercase leading-snug tracking-wider truncate',
    },
    identity: {
      wrapper: `absolute left-1/2 top-[66%] z-10 flex w-[90%] max-w-[19rem] -translate-x-1/2 flex-col items-center gap-1.5 text-center ${TRANSITION_LAYER}`,
      name: 'font-bold text-xl leading-tight truncate max-w-full',
      role: 'max-w-[90%] text-xs font-semibold uppercase tracking-widest',
    },
    decorativeCircle: `pointer-events-none absolute right-3 top-10 h-10 w-10 rounded-full border-[2px] border-white/30 ${TRANSITION_LAYER}`,
  },

  banner: {
    root: '',
    topBand: {
      wrapper: `absolute inset-x-0 top-0 z-10 flex flex-row items-center gap-x-3 pl-4 pr-4 pt-3 ${TRANSITION_LAYER}`,
      avatarOuter: 'h-10 w-10 shrink-0',
      eventOuter: 'flex min-h-0 flex-1 min-w-0 flex-col justify-center pt-px',
      eventText:
        'text-left text-[10px] font-semibold uppercase leading-snug tracking-wider truncate drop-shadow-[0_1px_1px_rgba(0,0,0,.12)]',
    },
    identity: {
      wrapper: `absolute left-4 top-[43%] z-10 flex max-w-[min(94%,calc(100%-6.5rem))] flex-col items-start gap-1 text-left ${TRANSITION_LAYER}`,
      name: 'font-bold text-base md:text-lg leading-snug truncate max-w-full',
      role: 'text-[11px] font-semibold uppercase tracking-[0.2em] truncate max-w-full',
    },
    decorativeCircle: `pointer-events-none absolute right-4 top-[40%] h-10 w-10 -translate-y-1/2 rounded-full border-[2px] border-white/30 ${TRANSITION_LAYER}`,
  },
};

function buildEventLine(event: string, hashtag: string) {
  const tag = hashtag ? (hashtag.startsWith('#') ? hashtag : `#${hashtag}`) : '';
  const parts = [event.trim(), tag].filter(Boolean).join(' / ');
  return parts || 'BADGE.BUILD / DEVCON 2026';
}

const BadgePreview = forwardRef<HTMLDivElement, Props>(({ badge }, ref) => {
  const { photoPreview, name, role, event, hashtag, style, badgeColor, textColor } = badge;

  const layout = BADGE_LAYOUT[style];

  const initials =
    name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '?';

  const eventLabel = buildEventLine(event, hashtag);

  const avatarShell = [
    'flex items-center justify-center overflow-hidden rounded-full font-bold backdrop-blur-[1px]',
    'shadow-[inset_0_0_0_2px_rgba(255,255,255,0.38)]',
    TRANSITION_LAYER,
  ].join(' ');

  const avatarInner =
    photoPreview !== '' ? (
      <Image
        src={photoPreview}
        alt="Profile"
        width={48}
        height={48}
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="tabular-nums">{initials}</span>
    );

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: badgeColor,
        color: textColor,
      }}
      className={[
        layout.root,
        'relative h-36 w-72 shrink-0 overflow-hidden rounded-2xl p-4 shadow-xl select-none',
        'motion-reduce:transition-none motion-reduce:duration-0',
      ].join(' ')}
    >
      <div className={layout.decorativeCircle} aria-hidden />

      {/* Avatar + event (position by layout) */}
      <div className={layout.topBand.wrapper}>
        <div
          className={`${avatarShell} ${layout.topBand.avatarOuter}`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.18)',
            color: textColor,
          }}
        >
          {avatarInner}
        </div>
        <div className={layout.topBand.eventOuter}>
          <p
            className={layout.topBand.eventText}
            title={eventLabel}
            style={{ opacity: style === 'banner' ? 0.95 : 0.92 }}
          >
            {eventLabel}
          </p>
        </div>
      </div>

      {/* Name + role */}
      <div className={layout.identity.wrapper}>
        <p className={layout.identity.name} style={{ opacity: 1 }}>
          {name.trim() ? name : 'Your Name'}
        </p>
        <p
          className={layout.identity.role}
          style={{ opacity: 0.9 }}
          title={(role.trim() ? role : 'Your Role / Title') || ''}
        >
          {role.trim() ? role : 'Your Role / Title'}
        </p>
      </div>

      <DecorativeBottomSquare />
    </div>
  );
});

BadgePreview.displayName = 'BadgePreview';

export default BadgePreview;
