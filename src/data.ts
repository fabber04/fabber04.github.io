export type Status = "LIVE" | "WINNER" | "RESEARCH";

export interface Project {
  id: string;
  name: string;
  status: Status;
  summary: string;
  stack: string[];
  metric?: { label: string; value: string };
  link?: string;
}

export const FOG_URL = "https://familyofgreatness.com";

export const contactAsk =
  "Looking for one licensed insurer willing to talk about CT Flex.";

export const socials = [
  {
    label: "github",
    href: "https://github.com/fabber04",
    avatar: "/avatars/github.png",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/fabilous-lashidi-571ab0259/",
    avatar: "/avatars/linkedin.png",
  },
  {
    label: "tiktok",
    href: "https://www.tiktok.com/@fabulous.lashid",
    avatar: "/avatars/tiktok.jpg",
  },
] as const;

export const projects: Project[] = [
  {
    id: "fog",
    name: "Family of Greatness",
    status: "LIVE",
    summary:
      "Faith-community platform I built solo and run live: prayer requests, a paid digital library, podcasts, events, and a course system. I migrated 100+ podcast files onto Cloudflare R2 myself.",
    stack: ["React", "FastAPI", "Firebase", "Cloudflare R2"],
    metric: { label: "podcasts on R2", value: "100+" },
    link: FOG_URL,
  },
  {
    id: "ctflex",
    name: "CT Flex",
    status: "WINNER",
    summary:
      "Insurtech for Zimbabwe’s gig and informal workforce. Pricing uses Bühlmann-Straub credibility blending on recalibrated SA85-90 mortality tables. AIE 2026 winning product.",
    stack: ["InsurTech", "Bühlmann-Straub", "SA85-90"],
    metric: { label: "AIE 2026", value: "WINNER" },
    link: "https://fabber04.github.io/ct-flex/",
  },
  {
    id: "zsl",
    name: "ZSL Recognition",
    status: "RESEARCH",
    summary:
      "Continuous Zimbabwean Sign Language recognition from MediaPipe hand-landmark sequences. LSTM, GRU, and Transformer models benchmarked against a Random Forest baseline. Target: under 300ms on CPU.",
    stack: ["MediaPipe", "PyTorch", "CPU Inference"],
    metric: { label: "inference target", value: "<300ms" },
  },
];

export const zslHowItWent = [
  { tag: "tried", text: "Drafted the dissertation figures from existing diagram exports." },
  { tag: "broke", text: "Six figures didn’t match the results tables — axes, labels, and claimed metrics were out of sync." },
  { tag: "changed", text: "Threw them out and rebuilt every plot from the raw runs in matplotlib so the paper and the numbers agreed." },
];
