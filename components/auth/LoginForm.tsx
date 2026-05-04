// ✅ AI wrote: form shell
// 🔧 Developer must implement: useForm + zodResolver(loginSchema), submit handler, session creation
"use client";

export default function LoginForm() {
  // TODO: const form = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })
  // TODO: const { mutate, isPending } = useLogin()

  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-gray-400">Email</label>
        <input
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          // TODO: {...form.register("email")}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-gray-400">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          // TODO: {...form.register("password")}
        />
      </div>
      <button
        type="submit"
        disabled
        className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-50"
      >
        Sign In
      </button>
      {/* TODO: Link to /register */}
    </form>
  );
}
