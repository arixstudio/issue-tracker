import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535),
});

export const issueEditSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(255)
    .optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]).optional(),
});
