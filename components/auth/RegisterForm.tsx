// ✅ AI wrote: form shell
// 🔧 Developer must implement: useForm + zodResolver(registerSchema), submit handler, email verification
"use client";

export default function RegisterForm() {
  // TODO: const form = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) })
  // TODO: const { mutate, isPending } = useRegister()

  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-gray-400">Name</label>
        <input
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-gray-400">Email</label>
        <input
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-gray-400">Password</label>
        <input
          type="password"
          autoComplete="new-password"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-gray-400">Role</label>
        <select className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>
      </div>
      <button
        type="submit"
        disabled
        className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-50"
      >
        Create Account
      </button>
      {/* TODO: Link to /login */}
    </form>
  );
}
