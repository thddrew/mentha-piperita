export interface Issue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: Fields;
}

export interface Fields {
  statuscategorychangedate: string;
  issuetype: IssueType;
  timespent: number | null;
  customfield_10031: any[];
  project: Project;
  customfield_10032: any | null;
  customfield_10033: any | null;
  fixVersions: any[];
  customfield_10034: any | null;
  aggregatetimespent: number | null;
  customfield_10035: any | null;
  resolution: any | null;
  customfield_10037: any | null;
  customfield_10027: any | null;
  customfield_10028: any | null;
  customfield_10029: any | null;
  resolutiondate: string | null;
  workratio: number;
  watches: Watches;
  lastViewed: string | null;
  created: string;
  customfield_10020: any | null;
  customfield_10021: any | null;
  customfield_10022: any | null;
  priority: Priority;
  customfield_10023: any | null;
  labels: string[];
  customfield_10016: any | null;
  customfield_10017: any | null;
  customfield_10018: CustomField10018;
  customfield_10019: string;
  aggregatetimeoriginalestimate: number | null;
  timeestimate: number | null;
  versions: any[];
  issuelinks: any[];
  assignee: any | null;
  updated: string;
  status: Status;
  components: any[];
  timeoriginalestimate: number | null;
  description: string | null;
  customfield_10010: any | null;
  customfield_10014: any | null;
  customfield_10015: any | null;
  customfield_10005: any | null;
  customfield_10006: any | null;
  customfield_10007: any | null;
  security: any | null;
  customfield_10008: any | null;
  customfield_10009: any | null;
  aggregatetimeestimate: number | null;
  summary: string;
  creator: User;
  subtasks: any[];
  customfield_10040: any | null;
  customfield_10042: any | null;
  reporter: User;
  aggregateprogress: Progress;
  customfield_10000: string;
  customfield_10001: any | null;
  customfield_10002: any[];
  customfield_10003: any | null;
  customfield_10004: any | null;
  customfield_10038: any | null;
  customfield_10039: any | null;
  environment: any | null;
  duedate: string | null;
  progress: Progress;
  votes: Votes;
}

export interface IssueType {
  self: string;
  id: string;
  description: string;
  iconUrl: string;
  name: string;
  subtask: boolean;
  avatarId: number;
  entityId: string;
  hierarchyLevel: number;
}

export interface Project {
  self: string;
  id: string;
  key: string;
  name: string;
  projectTypeKey: string;
  simplified: boolean;
  avatarUrls: AvatarUrls;
}

export interface AvatarUrls {
  "48x48": string;
  "24x24": string;
  "16x16": string;
  "32x32": string;
}

export interface Watches {
  self: string;
  watchCount: number;
  isWatching: boolean;
}

export interface Priority {
  self: string;
  iconUrl: string;
  name: string;
  id: string;
}

export interface CustomField10018 {
  hasEpicLinkFieldDependency: boolean;
  showField: boolean;
  nonEditableReason: NonEditableReason;
}

export interface NonEditableReason {
  reason: string;
  message: string;
}

export interface Status {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: StatusCategory;
}

export interface StatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export interface User {
  self: string;
  accountId: string;
  emailAddress: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}

export interface Progress {
  progress: number;
  total: number;
}

export interface Votes {
  self: string;
  votes: number;
  hasVoted: boolean;
}
