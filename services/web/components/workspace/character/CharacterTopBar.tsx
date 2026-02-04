"use client";

import React, { useEffect, useState } from "react";
import { getActiveCharacterId, setActiveCharacterId } from "./CharacterSelectionStore";

type CharacterListItem = { id: string; name: string };

type Props = {
  title: string;
  // supply your existing loader from IndexedDB (or any source)
  loadCharacters: () => Promise<CharacterListItem[]>;
  onCharacterSelected?: (id: string | null) => void;
  rightSlot?: React.ReactNode;
};

export default function CharacterTopBar({ title, loadCharacters, onCharacterSelected, rightSlot }: Props) {
  const [characterList, setCharacterList] = useState<CharacterListItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    loadCharacters()
      .then((list) => {
        if (cancelled) return;
        setCharacterList(list);

        // restore last selection if present
        const saved = getActiveCharacterId();
        if (saved && list.some((c) => c.id === saved)) {
          setActiveId(saved);
          onCharacterSelected?.(saved);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [loadCharacters, onCharacterSelected]);

  function handleSelect(id: string) {
    setActiveId(id);
    setActiveCharacterId(id || null);
    onCharacterSelected?.(id || null);
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-sm font-semibold">{title}</div>

        <select
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
          value={activeId}
          onChange={(e) => handleSelect(e.target.value)}
          title="Select a saved character"
        >
          <option value="">Select character…</option>
          {characterList.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">{rightSlot}</div>
    </div>
  );
}
