export type CommandResult = {
  output: string[];
};

export const COMMANDS: Record<string, CommandResult> = {
  help: {
    output: [
      "Available Commands",
      "",
      "help      Show this menu",
      "status    Workshop status",
      "robot     Robot diagnostics",
      "coffee    Coffee reserves",
      "projects  Project archive",
      "clear     Clear terminal",
    ],
  },

  status: {
    output: [
      "Workshop Status",
      "────────────────────────────",
      "Projects : 7 in progress",
      "Coffee   : 82%",
      "Sleep    : 3%",
      "Bugs     : Too many",
    ],
  },

  robot: {
    output: [
      "Workshop Bot v0.7",
      "",
      "Mood      : Happy",
      "Energy    : ████████░░",
      "Last Crash: 17 minutes ago",
    ],
  },

  coffee: {
    output: [
      "Coffee Tank",
      "",
      "████████░░ 82%",
      "",
      "Enough caffeine to continue coding.",
    ],
  },

  projects: {
    output: [
      "Project Archive",
      "",
      "Archive is currently under maintenance.",
      "Please come back soon!",
    ],
  },
};