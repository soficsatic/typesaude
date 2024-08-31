import { registerService } from "./register-service";
import { PrismaClient } from "@prisma/client";

export const prisma = registerService("prisma", () => new PrismaClient());
