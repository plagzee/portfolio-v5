interface Props {
  history: {
    type: "command" | "output";
    text: string;
  }[];
}

export default function TerminalOutput({
  history,
}: Props) {
  return (
    <div className="space-y-1 text-sm font-mono">
      {history.map((entry, index) => (
        <div key={index}>
          {entry.type === "command" ? (
            <div>
              <span className="mr-2 text-violet-400">{">"}</span>
              {entry.text}
            </div>
          ) : (
            <div className="pl-4 text-zinc-300">
              {entry.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}