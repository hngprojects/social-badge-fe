export function hasPasswordSpecialCharacter(value: string): boolean {
  if (!value) return false;
  return /[^\p{L}\p{N}\s_]/u.test(value);
}

export const PASSWORD_SPECIAL_CHAR_MESSAGE = 'Password should have at least a special character';
