import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  year: number;
  imageUrl: string;
}

export default function PortfolioGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col break-words">
            <div className="group-hover:scale-105 w-full h-96 object-cover transition-transform duration-500">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between text-white">
              <h3 className="text-lg md:text-xl font-medium mb-3 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 category-text">{project.category}</p>
              <p className="text-xl font-semibold">{project.year}</p>
              <div className="mt-6 flex justify-between items-center">
                <a href={`#project-${i+1}`} className="text-blue-300 hover:text-blue-400 transition-colors">
                  View Details
                </a>
                <div className="animate-pulse rounded-full h-7 w-7 bg-blue-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}