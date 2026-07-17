export default function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10">
      <h3 className="text-2xl font-bold">
        No Projects Yet
      </h3>

      <p className="mt-3 text-zinc-500">
        Add a project from the admin
        dashboard and it will appear
        here automatically.
      </p>
    </div>
  );
}