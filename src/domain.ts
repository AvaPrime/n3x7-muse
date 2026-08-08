export type { Track, PromptArtifact, Project, TasteDimension, EpistemicStatus } from "./types";

/** Domain boundary marker: provider-specific integrations belong outside this module. */
export interface ProviderAdapter {
  id: string;
  capability: string;
  status: "planned" | "verified" | "connected" | "deprecated";
}
