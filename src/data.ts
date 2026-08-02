export type Status = "LIVE" | "WINNER" | "SUBMITTED" | "IN PROGRESS" | "RESEARCH";

export interface Project {
  id: string;
  name: string;
  status: Status;
  summary: string;
  stack: string[];
  metric?: { label: string; value: string };
  link?: string;
}

export const projects: Project[] = [
  {
    id: "ctflex",
    name: "CT Flex",
    status: "WINNER",
    summary:
      "AIE 2026 winning product — a flexible-premium insurance concept for Zimbabwe's gig and informal workforce, designed to go to market with licensed partners.",
    stack: ["InsurTech", "Actuarial Modeling", "Web Platform"],
    metric: { label: "AIE 2026", value: "winning team" },
    link: "https://fabber04.github.io/ct-flex/",
  },
  {
    id: "zsl",
    name: "ZSL Recognition",
    status: "RESEARCH",
    summary:
      "Continuous Zimbabwean Sign Language recognition from hand-landmark sequences, benchmarking LSTM, GRU, and Transformer models against a Random Forest baseline.",
    stack: ["MediaPipe", "PyTorch", "CPU Inference"],
    metric: { label: "inference target", value: "<300ms" },
  },
  {
    id: "fog",
    name: "Family of Greatness",
    status: "LIVE",
    summary:
      "Faith-based community platform: prayer requests, a paid digital library, podcasts, events, and a course system. Sole developer, fully self-built.",
    stack: ["React", "FastAPI", "Firebase", "Cloudflare R2"],
    metric: { label: "podcast files migrated", value: "100+" },
    link: "https://familyofgreatness.com",
  },
];
