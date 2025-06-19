export type Data = {
  heading: string;
  title: string;
  description: string;
  img: string;
};

export const data: Data[] = [
  {
    heading: "Fast",
    title: "Because the best ideas can't wait",
    description: "We review all new applications weekly.",
    img: "/card/1.jpeg",
  },
  {
    heading: "Easy",
    title: "< 10min Application",
    description:
      "Ditch the Pitch. We just wanna know what you're building and why.",
    img: "/card/2.jpeg",
  },
  {
    heading: "Public",
    title: "Every grant becomes a story",
    description:
      "We spotlight you through thoughtful content on our channels. We're here to help you grow.",
    img: "/card/3.jpeg",
  },
] as const;
