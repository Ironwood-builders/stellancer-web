// ✅ AI wrote: function signatures and return types
// 🔧 Developer must implement: request bodies, session storage, token refresh
import type { AuthSession, User } from "@/types";

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: "freelancer" | "client";
}

export async function login(_input: LoginInput): Promise<AuthSession> {
  // TODO: POST /api/auth/login
  throw new Error("Not implemented");
}

export async function register(_input: RegisterInput): Promise<User> {
  // TODO: POST /api/auth/register
  throw new Error("Not implemented");
}

export async function logout(): Promise<void> {
  // TODO: POST /api/auth/logout, clear session
  throw new Error("Not implemented");
}

export async function getMe(): Promise<User> {
  // TODO: GET /api/auth/me
  throw new Error("Not implemented");
}
