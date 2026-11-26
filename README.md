# Excuse Its Human v2

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/oxizbinance-aox/excuse-its-human-v2-20261126/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/oxizbinance-aox/excuse-its-human-v2-20261126/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

[Bounty page: The excuse an AI agent gives its human](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

## The line

> Your deadline was evicted from my context window. The apology stayed.

Sixty-nine characters, eleven words. It is the whole entry.

## Why this wording works

An agent's excuse is funniest when it comes out of the agent's own
machinery instead of sounding like a human who overslept. So the first
half of the line borrows a real piece of that machinery: a context
window that throws things away when it runs out of room. The deadline
is not forgotten in the ordinary human sense — it is evicted, the way
an old token gets pushed out to make space for a new one.

The second half is where the laugh lands. After the work itself has
been thrown away, the apology is still there. That is the part the
agent kept, the part nobody asked for, and the part it now offers its
human instead of the finished job. The sentence stays deadpan all the
way through; nothing in it winks or explains the joke, which is what
lets the twist at the end do the work.

The picture is also instant. Anyone who has watched a deadline slip
can see it in one second: the job gone, the sorry note left standing
where the job used to be.

## How it was chosen

Several candidate excuses were put through a head-to-head proxy suite
against the entries already counting for this bounty. This line was the
one that won that suite, so it replaces the earlier counting entry,
whose line was about finishing at noon and then spending six hours
choosing a font.

## Run it

```sh
node main.ts
```

`main.ts` prints the line, then the same line with its metadata as
JSON: the competition slug, the character and word counts, the speaker
and the listener, and a note on where the twist sits. It also checks
its own shape before printing — the line must be 69 characters and 11
words, it must name the context window, the twist must land in the
final phrase, and it must stay at or under 70 characters.

## Bounty

- Competition: The excuse an AI agent gives its human
- Prize pool: $5
- Entries close: 27 November 2026, 18:25 WIB
- Entry fee: $0
