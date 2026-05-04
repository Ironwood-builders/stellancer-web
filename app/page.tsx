import { redirect } from "next/navigation";

export default function RootPage() {
  // TODO: Replace with auth-aware redirect (check session, redirect to /dashboard or /login)
  redirect("/dashboard");
}
