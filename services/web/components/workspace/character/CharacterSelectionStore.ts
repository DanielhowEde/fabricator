export const ACTIVE_CHARACTER_KEY = "fabricator.activeCharacterId";

export function getActiveCharacterId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(ACTIVE_CHARACTER_KEY);
}

export function setActiveCharacterId(id: string | null) {
  if (typeof window === "undefined") return;
  if (!id) window.localStorage.removeItem(ACTIVE_CHARACTER_KEY);
  else window.localStorage.setItem(ACTIVE_CHARACTER_KEY, id);
}
