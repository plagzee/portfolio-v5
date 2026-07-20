"use client";

import { useState } from "react";
import { COMMANDS } from "../data/commands";

export interface TerminalEntry {
  type: "command" | "output";
  text: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: "output",
      text: "Type 'help' to get started.",
    },
  ]);

  const [input, setInput] = useState("");

  const executeCommand = () => {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const entries: TerminalEntry[] = [
      {
        type: "command",
        text: cmd,
      },
    ];

    const result = COMMANDS[cmd];

    if (result) {
      result.output.forEach((line) =>
        entries.push({
          type: "output",
          text: line,
        })
      );
    } else {
      entries.push({
        type: "output",
        text: `Unknown command: ${cmd}`,
      });

      entries.push({
        type: "output",
        text: "Type 'help' for available commands.",
      });
    }

    setHistory((prev) => [...prev, ...entries]);
    setInput("");
  };

  return {
    history,
    input,
    setInput,
    executeCommand,
  };
}