// src/utils/types/pr.ts

export interface TableMarkdown {
  th: string[];

  [rowKey: string]: any;
}

export interface PRStats {
  additions: number;
  deletions: number;
  comments: number;
  commits: number;
  checks: number;
  files_changed: number;
}

export interface PR {
  number: number;
  title: string;
  description: string | null;
  state: string;
  merged_by: string;
  merged_at: string;
  base: string;
  head: string;
  stats: PRStats;
  labels: string[];
  projects: string[];
  milestone: string[];
  tabs: string[];
  timeline: Omit<TimelineEvent, "id" | "avatarUrl">[];
  reviews: { user: string; state: string; at: string }[];
  participants: string[];
  assignees: string[];
}
export type TimelineEvent = {
  id: string;
  type:
    | "comment"
    | "merged"
    | "approval"
    | "title_changed"
    | "force_push"
    | "label"
    | "deployment"
    | "commit";
  user: string;
  avatarUrl?: string;
  at: string;
  content?: string;
  from?: string;
  to?: string;
  from_sha?: string;
  to_sha?: string;
  label?: string;
  role?: string;
  deployed_to?: string;
  code?: string;
  table_markdown?: TableMarkdown;
};
