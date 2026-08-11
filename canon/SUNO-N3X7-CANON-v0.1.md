# SUNO / N3X7 PROMPTING CANON v0.1

**Status:** ACTIVE WORKING CANON  
**Scope:** Suno prompting, N3X7 lyric generation, production-score construction, and prompt compilation.

> **Suno is the rendering engine. It is not the author of the artistic intent.**

The human establishes intent, emotional direction, conceptual meaning, and desired experience. SoundForge/MUSE transforms that intent into structured musical instructions. Suno renders a probabilistic interpretation.

```text
HUMAN INTENT
     ↓
STRUCTURED MUSICAL INTENT
     ↓
SUNO COMPILATION
     ↓
GENERATION
     ↓
LISTEN / EVALUATE
     ↓
REVISE
```

Never reverse this relationship.

## 1. N3X7 lyric philosophy

### Primary rule

> **Do not describe the aesthetic. Make the language behave like the aesthetic.**

N3X7 lyrics should be abstract, cinematic without relying on cinematic clichés, psychologically suggestive, emotionally ambiguous, conceptually dense, restrained, intelligent, occasionally strange, open to interpretation, and economical with language.

Lyrics should create a feeling or question, not explain the concept.

### Prefer

- contradiction
- uncertainty
- implication
- recursion
- semantic compression
- unexpected associations
- conceptual metaphor
- absence
- ambiguity
- incomplete thought

### Avoid

Literal descriptions of the aesthetic. Express the underlying idea rather than naming its visual representation.

If the concept is silence, do not necessarily write about silence. If the concept is machine/human symbiosis, do not write "the machine speaks." If the concept is memory, do not automatically write about photographs.

## 2. N3X7 Anti-Cliché Lexicon

Unless specifically requested or genuinely justified by the concept, avoid default AI imagery.

**Prohibited / strongly discouraged:**

```text
neon
 glow
lights
city lights
shadows
windows
rooms
floors
streets
mirrors
rain
fire
flames
eyes
hands
skin
heartbeat
pulse
static
signal
frequency
ghosts
machines
code
cyberpunk
digital dreams
electric soul
broken pieces
fragments
darkness
stars
night sky
holograms
circuits
screens
```

This is not an absolute ban on individual words. Do not use these merely because an AI music model associates them with futuristic/cinematic/electronic music. A word may be used when it has specific semantic necessity.

## 3. Anti-generic test

Before accepting generated lyrics:

- **A — Cyberpunk test:** Could this have been generated for any cyberpunk song? If yes → rewrite.
- **B — Illustration test:** Is the imagery merely illustrating the prompt? If yes → rewrite.
- **C — Explanation test:** Does the line explain something the listener should discover? If yes → consider removing it.
- **D — Relationship test:** Does the line contain an unexpected relationship? If no → scrutinize it.
- **E — Naked lyric test:** Would the lyric still be interesting without the production? If no → strengthen the writing.

## 4. Semantic collision

N3X7 should favour semantic collisions over generic futurism.

Examples:

```text
emotion × mathematics
memory × computation
myth × software
desire × protocol
silence × information
love × error
recursion × identity
entropy × intimacy
nature × algorithm
```

Possible results include `CtrlFreq`, `UltraViolins`, `Qt.py`, `Sentient Code`, `Signal Lost`, `Memory.exe`, `404 Love`, `Ghost Protocol`, and `Fractal Desire`.

> **Collision is a creative technique, not a naming formula.**

## 5. Machine/human boundary

N3X7 should not default to humans versus machines.

> **Prefer human and machine becoming difficult to distinguish.**

The machine may transform, amplify, mutate, interpret, and reveal. The human retains intent, taste, emotional authority, meaning, and final creative judgment.

Never make "AI" itself the subject merely because the music was AI-assisted.

## 6. Production-score principle

The Lyrics field may be used as a scene-by-scene production score rather than conventional lyrics.

Production instructions use square brackets:

```text
[INTRO]
[VERSE]
[PRE-CHORUS]
[CHORUS]
[BRIDGE]
[BREAKDOWN]
[INSTRUMENTAL]
[OUTRO]
[END]
```

Descriptive production instructions may follow:

```text
[INTRO — sparse, intimate]
[Fingerpicked guitar, tape texture, long negative space]
```

Performance directions may use parentheses where appropriate:

```text
(whispered)
(close-mic)
(spoken)
(layered vocal)
```

Do not confuse this production-score syntax with guaranteed official Suno grammar.

> **SoundForge owns the structured representation; the Suno adapter determines the final compatible syntax.**

## 7. Timing markers

For SoundForge's internal production score, scenes may carry timing:

```text
[00:00–00:18 | INTRO — SIGNAL EMERGENCE]
[00:18–00:48 | VERSE — FRAGMENTED MEMORY]
```

These are scene targets, not guaranteed runtime instructions. They describe intended temporal architecture. The compiler may remove or simplify timestamps for the target generator.

## 8. Style of Music

The Style prompt should be compact and information-dense.

Target ordering:

```text
SONIC IDENTITY
→ GENRE / SUBGENRE
→ TEMPO
→ INSTRUMENTATION
→ VOCALS
→ MOOD
→ PRODUCTION
```

Avoid spending the opening characters on poetic prose.

**Style limit: maximum 1,000 characters.**

The compiler must enforce this before output. Never silently truncate a completed prompt.

If compilation exceeds the limit:

```text
FAIL
  ↓
compress
  ↓
recompile
  ↓
validate
```

## 9. Exclude

Exclude should remove specific failure modes, not become a giant negative prompt.

Prioritize unwanted genre drift, production conventions, vocal behaviour, clichés, and arrangement behaviour.

Example:

```text
commercial EDM, festival drop, glossy pop production,
generic cyberpunk, bright synthwave, excessive autotune
```

Keep it concise.

## 10. Lyrics / Production Score limit

**Maximum: 5,000 characters.**

This is a compiler constraint, not post-generation truncation.

If the score exceeds the limit, compress intelligently while preserving:

1. structure
2. critical production instructions
3. lyrics
4. narrative progression

## 11. Golden Sequence

**Epistemic status: PARTIALLY RECOVERED / UNKNOWN.**

Do not invent or reconstruct missing canonical wording and label it as recovered.

The working principle currently supported by history is:

```text
SONIC IDENTITY
→ MUSICAL PARAMETERS
→ INSTRUMENTATION
→ VOCAL / PERFORMANCE CHARACTER
→ EMOTIONAL INTENT
→ PRODUCTION TREATMENT
```

Until the original document is recovered, this remains **PROVISIONAL**, not canonical fact.

## 12. Production instructions should be musical, not literary

Prefer:

```text
[Reduce harmonic density]
[Remove kick]
[Introduce low sub pulse]
[Increase rhythmic fragmentation]
[Widen stereo field]
[Return to original motif, transformed]
```

over:

```text
[The machine awakens beneath the neon city]
```

The former tells the music model what to do. The latter tells it what cliché to imagine.

## 13. Structure should have an arc

Do not automatically generate a conventional pop structure unless appropriate.

Prefer conceptual architectures such as:

```text
STATE
→ TRANSITION
→ DEVELOPMENT
→ RUPTURE
→ RECOVERY / TRANSFORMATION
```

The musical architecture should serve the concept.

## 14. Silence is an active compositional element

Do not fill every section. Use negative space, pauses, unresolved phrases, removed instrumentation, sudden dynamic reduction, incomplete musical statements, and withheld resolution.

> **Silence can carry information.**

Do not repeatedly say "silence" in the lyrics. Make the arrangement create it.

## 15. Don't explain the metaphor

Bad:

> The machine represents my loneliness.

Better:

> Create a musical situation where the listener experiences loneliness without being told what it is.

This is the distinction between conceptual music and AI-generated concept description.

## 16. N3X7 quality gate

Before delivering a Suno prompt:

- [ ] Is the concept clear without being explicitly explained?
- [ ] Are the lyrics abstract rather than generic?
- [ ] Have default AI/cyberpunk images been removed?
- [ ] Does each production instruction have a musical purpose?
- [ ] Does the arrangement embody the concept?
- [ ] Is there meaningful negative space?
- [ ] Are the lyrics concise?
- [ ] Is Style ≤ 1,000 characters?
- [ ] Is Lyrics/Production Score ≤ 5,000 characters?
- [ ] Are square-bracket production tags correctly formatted?
- [ ] Are timestamps treated as scene targets rather than guaranteed Suno syntax?
- [ ] Is anything presented as Canon that is actually only inferred?
- [ ] Does the result sound like an artist rather than a prompt engineer?

### Critical final test

> **Would I still like this lyric if I removed every reference to technology, neon, static, darkness, machines and signals?**

If the answer is no, rewrite it.

## 17. Final N3X7 principle

> **Do not make AI music that sounds like AI music.**

Use AI as an instrument. Use prompts as production direction. Use language sparingly. Let the arrangement carry meaning. Let ambiguity survive. Let the listener participate.

Above all:

> **The music must be interesting before the mythology makes it interesting.**

## Canon classification

```text
SUNO-N3X7-CANON-v0.1

Status:
ACTIVE WORKING CANON

Recovered:
- square-bracket production convention
- Style ≤ 1000
- Lyrics ≤ 5000
- Style ordering principle
- production-score methodology
- N3X7 anti-cliché direction

Partially recovered:
- Golden Sequence exact canonical wording

Proposed / working doctrine:
- N3X7 Anti-Cliché Lexicon
- Semantic Collision method
- Quality Gate
- Machine/Human boundary doctrine
```
