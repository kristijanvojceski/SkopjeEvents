import { z } from "zod";
import { requiredString } from "../util/util";

export const registerScheme = z.object({
  email: z.string().email(),
  displayName: requiredString("displayName"),
  password: requiredString("password"),
});

export type RegisterScheme = z.infer<typeof registerScheme>;