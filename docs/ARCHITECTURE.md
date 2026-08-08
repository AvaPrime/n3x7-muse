# Architecture

## Boundary model

```text
Human
  ↓
Intent Engine / CIR
  ↓
MUSE — Music Intelligence
  ├─ Perception / DSP
  ├─ Semantic Analysis
  ├─ CreativeGenome
  ├─ Taste Model
  ├─ Creative Memory
  ├─ Discovery
  └─ Verification / Quality Gate
  ↓
Provider-neutral adapters
  ├─ Generators
  ├─ DAWs
  ├─ DJ systems
  ├─ Distribution
  └─ AV / live systems
  ↓
Artist OS
  ├─ Catalog
  ├─ Albums
  ├─ Releases
  ├─ Audience
  └─ Provenance
```

## Sovereignty rule

Canonical identity, memory, intent, provenance, schemas, decisions, and catalog relationships belong to the user-controlled system. Vendors are replaceable execution surfaces.

## Data flow

Audio and creative artifacts enter through explicit ingestion. Analysis produces observed features. Models may produce inferred interpretations. Human decisions produce curated/proposed state. These states must remain distinguishable.
