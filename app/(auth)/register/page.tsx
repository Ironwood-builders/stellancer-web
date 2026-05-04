// ✅ AI wrote: page shell
// 🔧 Developer must implement: registration form submission, email verification flow
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Create your account</h1>
      <RegisterForm />
    </div>
  );
}
