"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const lines = [
    "Initializing Workshop...",
    "",
    "Loading workspace...",
    "",
    "Checking inventory...",
    "✓ Coffee",
    "✓ Creative Ideas",
    "✓ Good Music",
    "✓ Keyboard",
    "✗ Sleep",
    "",
    "Searching project archive...",
    "...",
    "...",
    "...",
    "",
    "ERROR: Project archive unavailable.",
    "",
    "Launching fallback interface...",
];

interface BootScreenProps {
    onComplete: () => void;
}

export default function BootScreen({
    onComplete,
}: BootScreenProps) {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState("");

    const terminalRef = useRef<HTMLDivElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let line = 0;
        let char = 0;

        const interval = setInterval(() => {
            if (line >= lines.length) {
                clearInterval(interval);

                const tl = gsap.timeline({
                    onComplete,
                });

                tl.to(terminalRef.current, {
                    x: -8,
                    duration: 0.05,
                })
                    .to(terminalRef.current, {
                        x: 8,
                        duration: 0.05,
                    })
                    .to(terminalRef.current, {
                        x: -6,
                        duration: 0.05,
                    })
                    .to(terminalRef.current, {
                        x: 6,
                        duration: 0.05,
                    })
                    .to(terminalRef.current, {
                        x: 0,
                        duration: 0.05,
                    })
                    .to(
                        flashRef.current,
                        {
                            opacity: 0.25,
                            duration: 0.08,
                            yoyo: true,
                            repeat: 1,
                        },
                        "<"
                    )
                    .to(terminalRef.current, {
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.35,
                        ease: "power2.in",
                    });
                return;
            }

            const text = lines[line];

            if (char <= text.length) {
                setCurrentLine(text.slice(0, char));
                char++;
            } else {
                setVisibleLines((prev) => [...prev, text]);
                setCurrentLine("");
                line++;
                char = 0;
            }
        }, currentLine.startsWith("ERROR") ? 80 : 28);;

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-[#050505] text-zinc-200 font-mono">
            <div
                ref={flashRef}
                className="pointer-events-none absolute inset-0 bg-violet-500 opacity-0"
            />
            <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6">
                <div
                    ref={terminalRef}
                    className="w-full max-w-3xl rounded-2xl border border-zinc-800 bg-black/70 p-8 shadow-2xl"
                >

                    <div className="mb-6">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <p className="text-violet-400 font-bold tracking-widest">
                            PROJECT VAULT
                        </p>

                        <p className="text-xs text-zinc-500">
                            Version 0.7.2
                        </p>
                    </div>

                    <div className="mb-6 h-px bg-zinc-800" />

                    <div className="space-y-1 text-[15px]">
                        {visibleLines.map((line, i) => {
                            const isError = line.startsWith("ERROR");

                            return (
                                <div
                                    key={i}
                                    className={isError ? "text-red-500" : ""}
                                >
                                    {line && (
                                        <span className="mr-2 text-violet-400">&gt;</span>
                                    )}

                                    {line}
                                </div>
                            );
                        })}

                        <div>
                            <span className="mr-2 text-violet-400">&gt;</span>
                            {currentLine}
                            <span className="ml-1 inline-block h-5 w-2 bg-violet-400 animate-pulse" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}