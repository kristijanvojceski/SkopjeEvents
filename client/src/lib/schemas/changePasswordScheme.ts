import { z } from "zod";
import { requiredString } from "../util/util";

export const changePasswordScheme = z
  .object({
    currentPassword: requiredString("currentString"),
    newPassword: requiredString("newPassword"),
    confirmPassword: requiredString("confirmPassword"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type ChangePasswordScheme = z.infer<typeof changePasswordScheme>