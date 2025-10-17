import { z } from "zod";
import { requiredString } from "../util/util";

export const resetPasswordScheme = z
  .object({
    newPassword: requiredString("newPassword"),
    confirmPassword: requiredString("confirmPassword"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type ResetPasswordScheme = z.infer<typeof resetPasswordScheme>