// components/workspace/character/db.ts
export type IDBMode = "readonly" | "readwrite";

const DB_NAME = "fabricator";

// ⬇️ IMPORTANT: bump version so onupgradeneeded runs and adds the new store(s)
const DB_VERSION = 2;

const STORE_CHARACTERS = "characters";
const STORE_IMAGES = "characterImages";

// ✅ NEW: assets store for GLBs etc
const STORE_ASSETS = "characterAssets";

export type CharacterAssetType = 
  | "blockout_glb"
  | "deform_params_json"
  | "sculpt_delta_json";

export type CharacterAssetRecord = {
  characterId: string;
  type: CharacterAssetType; // "blockout_glb"
  filename: string;         // e.g. "character-blockout.glb"
  blob: Blob;               // GLB bytes
  updatedAt: string;        // ISO
};



function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;

      // characters store
      if (!db.objectStoreNames.contains(STORE_CHARACTERS)) {
        const store = db.createObjectStore(STORE_CHARACTERS, { keyPath: "id" });
        store.createIndex("name", "name", { unique: false });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }

      // images store (composite key)
      if (!db.objectStoreNames.contains(STORE_IMAGES)) {
        const store = db.createObjectStore(STORE_IMAGES, {
          keyPath: ["characterId", "view"],
        });
        store.createIndex("characterId", "characterId", { unique: false });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }

      // ✅ NEW: assets store (composite key)
      if (!db.objectStoreNames.contains(STORE_ASSETS)) {
        const store = db.createObjectStore(STORE_ASSETS, {
          keyPath: ["characterId", "type"],
        });
        store.createIndex("characterId", "characterId", { unique: false });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx<T>(
  db: IDBDatabase,
  stores: string[],
  mode: IDBMode,
  fn: (t: IDBTransaction) => Promise<T>
): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = db.transaction(stores, mode);
    let result: T;
    t.oncomplete = () => resolve(result);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
    fn(t)
      .then((r) => {
        result = r;
      })
      .catch((e) => {
        // If fn throws, abort the transaction and reject.
        try { t.abort(); } catch {}
        reject(e);
      });
  });
}

function reqToPromise<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// ---------- API ----------
export async function listCharacters<T>(): Promise<T[]> {
  const db = await openDB();
  return tx(db, [STORE_CHARACTERS], "readonly", async (t) => {
    const store = t.objectStore(STORE_CHARACTERS);
    const all = await reqToPromise(store.getAll());
    return (all as any[]).sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt))) as T[];
  });
}

export async function getCharacter<T>(id: string): Promise<T | null> {
  const db = await openDB();
  return tx(db, [STORE_CHARACTERS], "readonly", async (t) => {
    const store = t.objectStore(STORE_CHARACTERS);
    const rec = await reqToPromise(store.get(id));
    return (rec ?? null) as T | null;
  });
}

export async function upsertCharacter<T extends { id: string }>(rec: T): Promise<void> {
  const db = await openDB();
  return tx(db, [STORE_CHARACTERS], "readwrite", async (t) => {
    const store = t.objectStore(STORE_CHARACTERS);
    await reqToPromise(store.put(rec));
  });
}

export async function deleteCharacter(id: string): Promise<void> {
  const db = await openDB();

  // ✅ include assets store too so deleting a character deletes its GLB(s)
  return tx(db, [STORE_CHARACTERS, STORE_IMAGES, STORE_ASSETS], "readwrite", async (t) => {
    // delete character
    await reqToPromise(t.objectStore(STORE_CHARACTERS).delete(id));

    // delete images by characterId
    const imgStore = t.objectStore(STORE_IMAGES);
    const imgIdx = imgStore.index("characterId");
    const imgRange = IDBKeyRange.only(id);

    await new Promise<void>((resolve, reject) => {
      const cur = imgIdx.openCursor(imgRange);
      cur.onerror = () => reject(cur.error);
      cur.onsuccess = () => {
        const cursor = cur.result;
        if (!cursor) return resolve();
        cursor.delete();
        cursor.continue();
      };
    });

    // ✅ delete assets by characterId
    const assetStore = t.objectStore(STORE_ASSETS);
    const assetIdx = assetStore.index("characterId");
    const assetRange = IDBKeyRange.only(id);

    await new Promise<void>((resolve, reject) => {
      const cur = assetIdx.openCursor(assetRange);
      cur.onerror = () => reject(cur.error);
      cur.onsuccess = () => {
        const cursor = cur.result;
        if (!cursor) return resolve();
        cursor.delete();
        cursor.continue();
      };
    });
  });
}

export async function upsertImage(args: {
  characterId: string;
  view: string;
  mime: string;
  blob: Blob;
  updatedAt: string;
}): Promise<void> {
  const db = await openDB();
  return tx(db, [STORE_IMAGES], "readwrite", async (t) => {
    const store = t.objectStore(STORE_IMAGES);
    await reqToPromise(
      store.put({
        characterId: args.characterId,
        view: args.view,
        mime: args.mime,
        blob: args.blob,
        updatedAt: args.updatedAt,
      })
    );
  });
}

// ------------------------------------------------------------------
// Compatibility aliases (so both pages can share a single DB module)
// ------------------------------------------------------------------
export type View = "front" | "side" | "back" | "front_3q_left" | "back_3q_left";
export type CharacterImageRecord = {
  characterId: string;
  view: View;   // ✅
  mime: string;
  blob: Blob;
  updatedAt: string;
};

/** Alias used by CharacterModelTool (older name) */
export async function upsertCharacterImage(rec: CharacterImageRecord): Promise<void> {
  return upsertImage(rec);
}

/** Alias used by CharacterModelTool (older name) */
export async function listCharacterImages(characterId: string): Promise<CharacterImageRecord[]> {
  const db = await openDB();
  return tx(db, [STORE_IMAGES], "readonly", async (t) => {
    const store = t.objectStore(STORE_IMAGES);
    const idx = store.index("characterId");
    const range = IDBKeyRange.only(characterId);

    const out: CharacterImageRecord[] = [];
    await new Promise<void>((resolve, reject) => {
      const cur = idx.openCursor(range);
      cur.onerror = () => reject(cur.error);
      cur.onsuccess = () => {
        const cursor = cur.result;
        if (!cursor) return resolve();
        out.push(cursor.value as any);
        cursor.continue();
      };
    });
    return out;
  });
}

export async function getImage(args: {
  characterId: string;
  view: string;
}): Promise<{ mime: string; blob: Blob } | null> {
  const db = await openDB();
  return tx(db, [STORE_IMAGES], "readonly", async (t) => {
    const store = t.objectStore(STORE_IMAGES);
    const rec = await reqToPromise(store.get([args.characterId, args.view]));
    if (!rec) return null;
    return { mime: (rec as any).mime, blob: (rec as any).blob };
  });
}

export async function listImagesForCharacter(
  characterId: string
): Promise<Record<string, { mime: string; blob: Blob } | null>> {
  const db = await openDB();
  return tx(db, [STORE_IMAGES], "readonly", async (t) => {
    const store = t.objectStore(STORE_IMAGES);
    const idx = store.index("characterId");
    const range = IDBKeyRange.only(characterId);

    const out: Record<string, { mime: string; blob: Blob } | null> = {};
    await new Promise<void>((resolve, reject) => {
      const cur = idx.openCursor(range);
      cur.onerror = () => reject(cur.error);
      cur.onsuccess = () => {
        const cursor = cur.result;
        if (!cursor) return resolve();
        const v = (cursor.value as any).view as string;
        out[v] = { mime: (cursor.value as any).mime, blob: (cursor.value as any).blob };
        cursor.continue();
      };
    });

    return out;
  });
}

// ------------------------------
// ✅ NEW: Asset (GLB) helpers
// ------------------------------
export async function upsertAsset(rec: CharacterAssetRecord): Promise<void> {
  const db = await openDB();
  return tx(db, [STORE_ASSETS], "readwrite", async (t) => {
    await reqToPromise(t.objectStore(STORE_ASSETS).put(rec as any));
  });
}

export async function getAsset(
  characterId: string,
  type: CharacterAssetType
): Promise<CharacterAssetRecord | null> {
  const db = await openDB();
  return tx(db, [STORE_ASSETS], "readonly", async (t) => {
    const rec = await reqToPromise(t.objectStore(STORE_ASSETS).get([characterId, type] as any));
    return (rec ?? null) as any;
  });
}

export async function listAssetsForCharacter(
  characterId: string
): Promise<CharacterAssetRecord[]> {
  const db = await openDB();
  return tx(db, [STORE_ASSETS], "readonly", async (t) => {
    const store = t.objectStore(STORE_ASSETS);
    const idx = store.index("characterId");
    const range = IDBKeyRange.only(characterId);

    const out: CharacterAssetRecord[] = [];
    await new Promise<void>((resolve, reject) => {
      const cur = idx.openCursor(range);
      cur.onerror = () => reject(cur.error);
      cur.onsuccess = () => {
        const cursor = cur.result;
        if (!cursor) return resolve();
        out.push(cursor.value as CharacterAssetRecord);
        cursor.continue();
      };
    });
    return out;
  });
}

/** Delete a single asset (e.g. blockout_glb) for a character */
export async function deleteAsset(
  characterId: string,
  type: CharacterAssetType
): Promise<void> {
  const db = await openDB();
  return tx(db, [STORE_ASSETS], "readwrite", async (t) => {
    await reqToPromise(t.objectStore(STORE_ASSETS).delete([characterId, type] as any));
  });
}