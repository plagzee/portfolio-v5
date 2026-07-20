"use client";

import { CheckCircle2, Circle } from "lucide-react";

const tasks = [
  { text: "Polishing every project", done: true },
  { text: "Writing detailed case studies", done: true },
  { text: "Making everything pixel-perfect", done: true },
  { text: "Convincing bugs to move out", done: false },
  { text: "Cleaning coffee stains", done: false },
];

export default function Checklist() {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
      <h3 className="mb-6 text-lg font-semibold text-white">
        Currently on the workbench
      </h3>

      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.text}
            className="task flex items-center gap-3"
          >
            {task.done ? (
              <CheckCircle2
                size={20}
                className="text-violet-400"
              />
            ) : (
              <Circle
                size={20}
                className="text-zinc-600"
              />
            )}

            <span
              className={
                task.done
                  ? "text-zinc-200"
                  : "text-zinc-500"
              }
            >
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}