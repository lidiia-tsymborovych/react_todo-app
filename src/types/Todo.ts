export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const FilterTypes = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type Filter = (typeof FilterTypes)[keyof typeof FilterTypes];
