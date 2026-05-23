export type TarotCard = {
  id: string;
  name: string;
  arcana: string;
  meaning: string;
  keywords: string[];
  symbol: "moon" | "sun" | "star" | "tower" | "lovers";
};

export const TAROT_CARDS: TarotCard[] = [
  {
    id: "the-moon",
    name: "The Moon",
    arcana: "Major Arcana · XVIII",
    meaning:
      "Hidden truths are surfacing. Trust your intuition before logic — what feels uncertain today will reveal itself in a softer light.",
    keywords: ["Intuition", "Mystery", "Subconscious"],
    symbol: "moon",
  },
  {
    id: "the-star",
    name: "The Star",
    arcana: "Major Arcana · XVII",
    meaning:
      "After a long night, hope arrives quietly. Healing is already in motion — keep faith in the path even when you cannot yet see it.",
    keywords: ["Hope", "Renewal", "Faith"],
    symbol: "star",
  },
  {
    id: "the-sun",
    name: "The Sun",
    arcana: "Major Arcana · XIX",
    meaning:
      "Clarity and joy walk in. A long-held dream is ready to step into the daylight — celebrate the warmth before you ask for more.",
    keywords: ["Joy", "Success", "Vitality"],
    symbol: "sun",
  },
  {
    id: "the-lovers",
    name: "The Lovers",
    arcana: "Major Arcana · VI",
    meaning:
      "A choice of the heart asks for your honest yes. Whether romance, friendship or self — align with what makes you most truthful.",
    keywords: ["Union", "Choice", "Values"],
    symbol: "lovers",
  },
  {
    id: "the-tower",
    name: "The Tower",
    arcana: "Major Arcana · XVI",
    meaning:
      "What was built on shaky ground is shaking loose. This is not loss — this is liberation. The new will rise on truer foundations.",
    keywords: ["Awakening", "Release", "Truth"],
    symbol: "tower",
  },
];
