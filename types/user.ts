export type UserRole = "freelancer" | "client" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  stellarPublicKey: string | null;
  avatarUrl: string | null;
  createdAt: string;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  expiresAt: number;
}
