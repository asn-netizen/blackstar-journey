import {
  BLACKSTAR_JOURNEY_ROOMS,
  type BlackstarRoomKey,
} from "./blackstar-site-content";

const BLACKSTAR_VISITED_ROOMS_STORAGE_KEY = "blackstar-visited";
const BLACKSTAR_ROOM_KEYS = new Set<BlackstarRoomKey>(
  BLACKSTAR_JOURNEY_ROOMS.map(({ roomKey }) => roomKey),
);

export function readBlackstarVisitedRoomKeys(): BlackstarRoomKey[] {
  try {
    const storedRoomKeys = JSON.parse(
      localStorage.getItem(BLACKSTAR_VISITED_ROOMS_STORAGE_KEY) ?? "[]",
    );

    if (!Array.isArray(storedRoomKeys)) {
      return [];
    }

    return storedRoomKeys.filter(
      (roomKey): roomKey is BlackstarRoomKey =>
        typeof roomKey === "string" &&
        BLACKSTAR_ROOM_KEYS.has(roomKey as BlackstarRoomKey),
    );
  } catch {
    return [];
  }
}

export function saveBlackstarVisitedRoomKeys(
  roomKeys: BlackstarRoomKey[],
): BlackstarRoomKey[] {
  const uniqueRoomKeys = Array.from(new Set(roomKeys));
  localStorage.setItem(
    BLACKSTAR_VISITED_ROOMS_STORAGE_KEY,
    JSON.stringify(uniqueRoomKeys),
  );
  return uniqueRoomKeys;
}

export function includeBlackstarVisitedRoomKey(
  roomKey: BlackstarRoomKey,
): BlackstarRoomKey[] {
  return saveBlackstarVisitedRoomKeys([
    ...readBlackstarVisitedRoomKeys(),
    roomKey,
  ]);
}
