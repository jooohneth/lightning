export type Data = {
  heading: string;
  title: string;
  description: string;
  img: string;
};

export const data: Data[] = [
  {
    heading: "Fast",
    title: "Lightning Fast Funding",
    description:
      "We're fast... like lightning fast. No Builder will wait for more than 7 days to get a reply.",
    img: "/card/1.jpg",
  },
  {
    heading: "Easy",
    title: "Fast and Simple Application",
    description:
      "The application process is dead simple... We want to make it as easy as possible for you to get the grant you need.",
    img: "/card/2.jpg",
  },
  {
    heading: "Public",
    title: "Amplify Your Story",
    description:
      "A grant is not just about the money, it's about the story. We want to tell your story and help you reach more people.",
    img: "/card/3.jpg",
  },
] as const;
