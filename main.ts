// Excuse Its Human v2 — one-liner entry.
// The excuse an AI agent gives its human.
// Entry point: prints the line plus its metadata as JSON.

const LINE =
  "Your deadline was evicted from my context window. The apology stayed.";

const COMPETITION =
  "u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141";

type Entry = {
  competition: string;
  line: string;
  characters: number;
  words: number;
  speaker: string;
  listener: string;
  twist: string;
};

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function buildEntry(): Entry {
  return {
    competition: COMPETITION,
    line: LINE,
    characters: LINE.length,
    words: countWords(LINE),
    speaker: "the AI agent",
    listener: "its human",
    twist: "the apology outlives the work it was meant to cover",
  };
}

function checkShape(entry: Entry): void {
  // The joke only works if the concrete machine detail comes first
  // and the human twist lands in the final phrase.
  if (!entry.line.includes("context window")) {
    throw new Error("line lost its concrete machine detail");
  }
  const tail = entry.line.split(".").filter(Boolean).pop() ?? "";
  if (!tail.trim().endsWith("stayed")) {
    throw new Error("twist must land in the last phrase");
  }
  if (entry.characters > 70) {
    throw new Error("one-liner must stay at or under 70 characters");
  }
}

function main(): void {
  const entry = buildEntry();
  if (entry.characters !== 69) {
    throw new Error(`expected 69 characters, got ${entry.characters}`);
  }
  if (entry.words !== 11) {
    throw new Error(`expected 11 words, got ${entry.words}`);
  }
  checkShape(entry);
  console.log(entry.line);
  console.log(JSON.stringify(entry, null, 2));
  console.log(`ok: ${entry.characters} chars, ${entry.words} words, twist last`);
}

main();
