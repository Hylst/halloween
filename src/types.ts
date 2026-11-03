export type GameCategory = 'all' | 'arcade' | 'survival' | 'puzzle' | 'tycoon';

export interface CategoryDef {
  id: GameCategory;
  label: string;
  icon: string;
}

export interface GameEntry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: GameCategory;
  badge: string;
  desc: string;
  tags: string[];
  iconPath: string;
  coverPath: string;
  accentColor: string;
  borderColor: string;
  isTeaser?: boolean;
}
