import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const bootzy = localFont({
  src: "../fonts/BootzyTM.ttf",
  variable: "--font-bootzy-tm",
  display: "swap",
});

export const melodrame = localFont({
  src: "../fonts/RelationshipOfMelodrame.ttf",
  variable: "--font-melodrame-family",
  display: "swap",
});
