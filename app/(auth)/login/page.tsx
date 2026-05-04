// ✅ AI wrote: page shell
// 🔧 Developer must implement: auth form submission, session creation, redirect logic
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Sign in to Stellancer</h1>
      <LoginForm />
    </div>
  );
}
