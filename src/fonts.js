import { JetBrains_Mono, Roboto } from "next/font/google";

export const JBM_Font = JetBrains_Mono({
  subsets: ["latin"]
});

export const Roboto_Font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});
