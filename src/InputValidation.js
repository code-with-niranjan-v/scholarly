import zod from "zod";

export const LoginInput = zod.object({
  email: zod.string(),
  password: zod.string().min(4),
});
