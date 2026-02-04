// characterDb.ts
const DB_NAME = "fabricator";
const DB_VERSION = 1;

const STORE_CHARACTERS = "characters";
const STORE_IMAGES = "characterImages";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;

      if (!db.objectStoreNames.contains(STORE_CHARACTERS)) {
        db.createObjectStore(STORE_CHARACTERS, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(STORE_IMAGES)) {
        db.createObjectStore(STORE_IMAGES, {
          keyPath: ["characterId", "view"],
        });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function req<T>(r: IDBRequest<T>): Promise<T> {
  return new Promise((res, rej) => {
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

/* ---------- API ---------- */

export async function listCharacters() {
  const db = await openDB();
  const tx = db.transaction(STORE_CHARACTERS, "readonly");
  return req<any[]>(tx.objectStore(STORE_CHARACTERS).getAll());
}

export async function saveCharacter(rec: any) {
  const db = await openDB();
  const tx = db.transaction(STORE_CHARACTERS, "readwrite");
  await req(tx.objectStore(STORE_CHARACTERS).put(rec));
}

export async function deleteCharacter(id: string) {
  const db = await openDB();
  const tx = db.transaction([STORE_CHARACTERS, STORE_IMAGES], "readwrite");
  tx.objectStore(STORE_CHARACTERS).delete(id);

  const imgStore = tx.objectStore(STORE_IMAGES);
  const all = await req<any[]>(imgStore.getAll());
  all.filter((i) => i.characterId === id).forEach((i) => {
    imgStore.delete([i.characterId, i.view]);
  });
}

export async function saveImage(
  characterId: string,
  view: string,
  blob: Blob,
  mime: string
) {
  const db = await openDB();
  const tx = db.transaction(STORE_IMAGES, "readwrite");
  await req(
    tx.objectStore(STORE_IMAGES).put({
      characterId,
      view,
      blob,
      mime,
      updatedAt: new Date().toISOString(),
    })
  );
}

export async function loadImages(characterId: string) {
  const db = await openDB();
  const tx = db.transaction(STORE_IMAGES, "readonly");
  const all = await req<any[]>(tx.objectStore(STORE_IMAGES).getAll());
  return all.filter((i) => i.characterId === characterId);
}
