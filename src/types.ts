export type EpistemicStatus = "OBSERVED" | "INFERRED" | "PROPOSED" | "UNKNOWN";

export interface Track {
  id: string;
  title: string;
  bpm: number;
  key: string;
  camelot: string;
  energy: number;
  danceability: number;
  atmosphere: number;
  complexity: number;
  valence: number;
  genreField: string[];
  instrumental: boolean;
  status: "candidate" | "selected" | "released";
}

export interface PromptArtifact {
  id: string;
  title: string;
  text: string;
  uses: number;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  type: "Album" | "EP" | "Single" | "Experiment";
  tracks: number;
  completion: number;
}

export interface TasteDimension {
  name: string;
  value: number;
}
