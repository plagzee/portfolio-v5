interface Props {
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
}

export default function TerminalInput({
  input,
  setInput,
  onSubmit,
}: Props) {
  return (
    <div className="mt-4 flex items-center font-mono">
      <span className="mr-2 text-violet-400">{">"}</span>

      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
}