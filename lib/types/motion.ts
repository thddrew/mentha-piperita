export type AutoScheduled = {
  /** ISO 8601 date-time string */
  startDate: string;

  /** "HARD", "SOFT", or "NONE" */
  deadlineType: "HARD" | "SOFT" | "NONE";

  /** Schedule the task must adhere to. "Work Hours" is a common value, but it could be others */
  schedule: "Work Hours" | string;
};

export type MotionTask = {
  /** ISO 8601 date-time string, required for scheduled tasks */
  dueDate?: string;

  /** "NONE", "REMINDER", or an integer greater than 0 */
  duration?: "NONE" | "REMINDER" | number;

  /** Defaults to workspace default status */
  status?: string;

  /** Can be an object or null if auto scheduling is off */
  autoScheduled?: AutoScheduled | null;

  /** Required, minimum 1 character */
  name: string;

  /** Project ID associated with the task */
  projectId?: string;

  /** Workspace ID associated with the task */
  workspaceId: string;

  /** Input as GitHub Flavored Markdown */
  description?: string;

  /** Priority level, default is "MEDIUM" */
  priority?: "ASAP" | "HIGH" | "MEDIUM" | "LOW";

  /** Array of label strings associated with the task */
  labels?: string[];

  /** User ID the task is assigned to */
  assigneeId?: string;
};

export type MotionProjectStatus = {
  /** The name of the status */
  name: string;

  /** Indicates if this is the default status */
  isDefaultStatus: boolean;

  /** Indicates if this is a resolved status */
  isResolvedStatus: boolean;
};

export type MotionProject = {
  /** Unique identifier for the project */
  id: string;

  /** The name of the project */
  name: string;

  /** A description of the project */
  description: string;

  /** Workspace ID associated with the project */
  workspaceId: string;

  /** Status information for the project */
  status: MotionProjectStatus;
};

export type MotionMetaData = {
  /** The cursor for the next page of results */
  nextCursor: string;

  /** The size of the current page */
  pageSize: number;
};

export type MotionProjectResponse = {
  /** An array of projects */
  projects: MotionProject[];

  /** Metadata for pagination */
  meta: MotionMetaData;
};

export type MotionStatus = {
  /** The name of the status */
  name: string;

  /** Indicates if this is the default status */
  isDefaultStatus: boolean;

  /** Indicates if this is a resolved status */
  isResolvedStatus: boolean;
};

export type MotionLabel = {
  /** The name of the label */
  name: string;
};

export type MotionWorkspace = {
  /** Unique identifier for the workspace */
  id: string;

  /** The name of the workspace */
  name: string;

  /** The team ID associated with the workspace */
  teamId: string;

  /** An array of statuses associated with the workspace */
  statuses: MotionStatus[];

  /** An array of labels associated with the workspace */
  labels: MotionLabel[];

  /** The type of the workspace */
  type: string;
};

export type MotionWorkspaceResponse = {
  /** An array of workspaces */
  workspaces: MotionWorkspace[];

  /** Metadata for pagination */
  meta: MotionMetaData;
};
