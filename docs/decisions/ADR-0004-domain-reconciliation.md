# ADR-0004 — Domain Reconciliation (CreativeGenome ↔ IntentContract / PEG / MAL / MERIT)

**Status:** Open  
**Date:** 2026-08-08  
**Deciders:** CEIO + N3X7 product authority

## Context

The M0 scaffold introduces the following provisional domain vocabulary:

- CreativeGenome
- TasteModel
- MixabilityVector
- AlbumGenome
- TrackLineage
- CreativeEpisode
- PromptArtifact
- ReferenceArtifact
- QualityAssessment
- ProvenanceRecord

Prior MUSE architecture work (Codessa / music intelligence research) established:

- IntentContract
- Music Architecture Language (MAL)
- Perceptual Expectation Graph (PEG)
- MERIT (disentangled melody / rhythm / timbre embeddings)
- Event-sourced CreativeEpisode ledger
- Intent Fidelity measurement

These two vocabularies currently coexist without explicit mapping. Continuing without reconciliation risks parallel, incompatible domain models.

## Decision Required

This ADR does **not** mandate immediate unification. It requires an explicit determination of:

| Concept | Candidate Classification | Notes |
|---------|--------------------------|-------|
| CreativeGenome | ? | Candidate for unified sonic/semantic/structural representation |
| TasteModel | ? | Behavioural + preference model; must not claim identity |
| MixabilityVector | ? | Possibly a projection of CreativeGenome + mixing constraints |
| AlbumGenome | ? | Coherence model across a release set |
| IntentContract | ? | Immutable intent representation |
| PEG | ? | Expectation management over time |
| MAL | ? | Intermediate representation / architecture language |
| MERIT | ? | Factorised embedding space |

For each concept the outcome must be one of:

- **Canonical** — becomes part of the sovereign domain model
- **Projection** — derived view of a canonical concept
- **Overlapping** — needs further evidence or redesign
- **Experimental** — retained for research only
- **Delete** — retired with rationale
- **Requires evidence** — blocked until specific research or measurement exists

## Constraints

- Provider-neutral representation remains mandatory (INV-0002)
- Epistemic status (OBSERVED / INFERRED / PROPOSED / UNKNOWN) must be preservable on every claim (INV-0005)
- Human curation gate remains non-negotiable for releases (INV-0003)
- No silent merging of prior and new concepts

## Consequences

Until this ADR is resolved and accepted:

- No new domain primitives may be promoted beyond PROPOSED
- UI and data models must treat current vocabulary as provisional
- Vertical slices that harden domain types are blocked
- Visual fidelity work remains deferred

## Next Actions

1. Produce a side-by-side concept map (CreativeGenome family vs IntentContract / PEG / MAL / MERIT family).
2. Identify genuine overlaps, gaps, and contradictions with evidence.
3. Recommend canonical set + projection set.
4. Update DOMAIN-MODEL.md and relevant specs only after acceptance.
