import type { Project, PromptArtifact, TasteDimension, Track } from "./types";

export const tracks: Track[] = [
  { id:"TRK-001", title:"Afterglow", bpm:128, key:"F Minor", camelot:"4A", energy:.78, danceability:.82, atmosphere:.71, complexity:.63, valence:.34, genreField:["Techno","Cinematic"], instrumental:true, status:"selected" },
  { id:"TRK-002", title:"Quantum Drift", bpm:126, key:"D Minor", camelot:"7A", energy:.74, danceability:.79, atmosphere:.66, complexity:.58, valence:.31, genreField:["Electro","Techno"], instrumental:true, status:"released" },
  { id:"TRK-003", title:"Void Walker", bpm:130, key:"A♭ Minor", camelot:"8B", energy:.86, danceability:.88, atmosphere:.48, complexity:.71, valence:.22, genreField:["Industrial","Techno"], instrumental:true, status:"candidate" },
  { id:"TRK-004", title:"Signal Lost", bpm:124, key:"F♯ Minor", camelot:"6A", energy:.59, danceability:.64, atmosphere:.87, complexity:.55, valence:.27, genreField:["Ambient","Electronica"], instrumental:true, status:"candidate" },
  { id:"TRK-005", title:"Lucid State", bpm:128, key:"E Minor", camelot:"9A", energy:.67, danceability:.73, atmosphere:.78, complexity:.61, valence:.41, genreField:["Deep","Electronica"], instrumental:true, status:"selected" }
];

export const projects: Project[] = [
  { id:"ALB-001", title:"Ecliptic Shadows", type:"Album", tracks:8, completion:72 },
  { id:"EP-001", title:"Nocturnal Protocol", type:"EP", tracks:5, completion:53 },
  { id:"SNG-001", title:"Synthetic Memories", type:"Single", tracks:1, completion:100 }
];

export const prompts: PromptArtifact[] = [
  { id:"PRM-001", title:"Dark Berlin Warehouse", text:"128 BPM, dark industrial techno, deep kick, restrained harmonic motion, cold terminal light...", uses:47, tags:["dark","industrial","128 BPM"] },
  { id:"PRM-002", title:"Ethereal Cinematic Build", text:"Sparse opening, suspended tension, granular atmosphere, gradual rhythmic density, no lyrical resolution...", uses:23, tags:["cinematic","ambient","build"] },
  { id:"PRM-003", title:"Hypnotic Minimal Groove", text:"126 BPM, minimal, hypnotic groove, sub-bass architecture, asymmetrical percussion...", uses:31, tags:["minimal","hypnotic","126 BPM"] }
];

export const taste: TasteDimension[] = [
  {name:"Energy", value:.78}, {name:"Danceability", value:.81}, {name:"Atmosphere", value:.86},
  {name:"Acousticness", value:.19}, {name:"Complexity", value:.68}, {name:"Valence", value:.32}
];
