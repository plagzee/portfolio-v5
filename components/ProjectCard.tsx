import Link from "next/link";

export default function ProjectCard({
  project,
}: {
  project: any;
}) {
  return (
    <Link
      href={`/projects/${project._id}`}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all hover:border-purple-500/50"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-zinc-400">
          {project.description}
        </p>
      </div>
    </Link>
  );
}