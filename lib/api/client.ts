// ✅ AI wrote: base fetch wrapper signature
// 🔧 Developer must implement: attach auth headers, refresh token logic, error normalisation
import type { ApiResponse } from "@/types";

export async function apiRequest<T>(
  path: string,
  init?: RequestInit
): Promise<ApiResponse<T>> {
  // TODO: Attach Authorization header from session
  // TODO: Handle 401 → token refresh → retry
  // TODO: Normalise error shape to ApiError
  throw new Error("Not implemented");
}
