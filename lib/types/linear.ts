export type LinearTask = {
  /** Might be an empty string or null if not archived */
  Archived: string | null;

  /** Assignee of the task */
  Assignee: string;

  /** Might be an empty string or null if the task was not canceled */
  Canceled: string | null;

  /** Might be an empty string or null if the task was not completed */
  Completed: string | null;

  /** Date string representing when the task was created */
  Created: string;

  /** Creator of the task */
  Creator: string;

  /** Date string representing the end of the cycle */
  "Cycle End": string;

  /** Name of the cycle the task is part of */
  "Cycle Name": string;

  /** Cycle number, could be a string or number depending on the use case */
  "Cycle Number": string;

  /** Date string representing the start of the cycle */
  "Cycle Start": string;

  /** Description of the task, might be null if not provided */
  Description: string | null;

  /** Due date of the task, might be null if not set */
  "Due Date": string | null;

  /** Estimate for the task, might be null if not provided */
  Estimate: string | null;

  /** Unique identifier for the task */
  ID: string;

  /** Initiatives related to the task, might be null if not provided */
  Initiatives: string | null;

  /** Labels associated with the task, might be null if not provided */
  Labels: string | null;

  /** Parent issue of the task, might be null if not provided */
  "Parent issue": string | null;

  /** Priority level of the task, can be "ASAP", "HIGH", "MEDIUM", or "LOW" */
  Priority: "ASAP" | "HIGH" | "MEDIUM" | "LOW";

  /** Project name the task is associated with */
  Project: string;

  /** Project ID the task is associated with */
  "Project ID": string;

  /** Project milestone related to the task, might be null if not provided */
  "Project Milestone": string | null;

  /** Project milestone ID, might be null if not provided */
  "Project Milestone ID": string | null;

  /** Roadmaps related to the task, might be null if not provided */
  Roadmaps: string | null;

  /** SLA status of the task, might be null if not provided */
  "SLA Status": string | null;

  /** Date string representing when the task was started, might be null if not started */
  Started: string | null;

  /** Current status of the task */
  Status: string;

  /** Team associated with the task */
  Team: string;

  /** Title of the task */
  Title: string;

  /** Triaged status, might be null if not triaged */
  Triaged: string | null;

  /** Date string representing when the task was last updated */
  Updated: string;
};
