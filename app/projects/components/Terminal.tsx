"use client";

import { useTerminal } from "../hooks/useTerminal";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

export default function Terminal() {
  const {
    history,
    input,
    setInput,
    executeCommand,
  } = useTerminal();

  return (
    <div className="mt-10 w-full max-w-2xl rounded-2xl border border-zinc-800 bg-black/60 p-6 backdrop-blur-md">
      <div className="mb-4 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <TerminalOutput history={history} />

      <TerminalInput
        input={input}
        setInput={setInput}
        onSubmit={executeCommand}
      />
    </div>
  );
}