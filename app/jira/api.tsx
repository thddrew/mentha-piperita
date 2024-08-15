"use server";

import { Issue } from "@/lib/types/jira";
import { MotionTask } from "@/lib/types/motion";
import { createTask } from "../motion/api";

export const getProjectIssues = async (projectKey: string = "ELI-REPORT") => {
  try {
    const response = await fetch(
      `${process.env.JIRA_DOMAIN}/rest/api/3/search?jql=project%20%3D%20${projectKey}&maxresults=100`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `${process.env.JIRA_AUTH_KEY}`,
        },
      }
    );

    const data = await response.json();

    return data as {
      issues: Issue[];
      maxResults: number;
      startAt: number;
      total: number;
      expand: string;
    };
  } catch (err) {
    console.log(err);
    return {
      issues: [],
      maxResults: 0,
      startAt: 0,
      total: 0,
      expand: "",
    };
  }
};

export const convertJiraIssueToMotionTask = async (
  issue: Issue,
  projectId: string,
  workspaceId: string
) => {
  const { fields } = issue;

  const motionTask: MotionTask = {
    name: `${issue.key}: ${fields.summary}`,
    description: `${process.env.JIRA_DOMAIN}/browse/${issue.key}`,
    projectId,
    workspaceId,
  };

  return motionTask;
};

export const getJiraIssueDetails = async (issueKey: string) => {
  try {
    const response = await fetch(
      `${process.env.JIRA_DOMAIN}/rest/api/2/issue/${issueKey}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `${process.env.JIRA_AUTH_KEY}`,
        },
      }
    );

    return (await response.json()) as Issue;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createJiraIssueLinkFormAction = async (
  state: Issue | null,
  formData: FormData
) => {
  const issueKey = formData.get("issueKey") as string;
  const projectId = formData.get("project") as string;
  const workspaceId = formData.get("workspace") as string;

  if (!issueKey) {
    return null;
  }

  const issue = await getJiraIssueDetails(issueKey);

  if (!issue) {
    return null;
  }

  const motionTask = await convertJiraIssueToMotionTask(
    issue,
    projectId,
    workspaceId
  );

  await createTask(motionTask);

  return motionTask;
};
