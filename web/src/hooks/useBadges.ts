import data from '../data/badges.json';
import type { Patch } from '../types';

type BadgeMap = Record<string, Patch>;

const badgeMap: BadgeMap = (data as Patch[]).reduce((acc, patch) => {
  acc[patch.id] = patch;
  return acc;
}, {} as BadgeMap);

const getBadgeById = (id: string): Patch | undefined => {
  return badgeMap[id];
};

export const useBadges = () => {
  return {
    badges: data as Patch[],
    getBadgeById,
  };
};
