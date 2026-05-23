import {
  IconZodiacAries,
  IconZodiacTaurus,
  IconZodiacGemini,
  IconZodiacCancer,
  IconZodiacLeo,
  IconZodiacVirgo,
  IconZodiacLibra,
  IconZodiacScorpio,
  IconZodiacSagittarius,
  IconZodiacCapricorn,
  IconZodiacAquarius,
  IconZodiacPisces,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

export type ZodiacSign = {
  name: string;
  icon: TablerIcon;
  dates: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  trait: string;
  description: string;
};

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: "Aries",
    icon: IconZodiacAries,
    dates: "Mar 21 – Apr 19",
    element: "Fire",
    trait: "The fearless initiator who leads with courage.",
    description:
      "Ruled by Mars, Aries souls are born pioneers — bold, energetic, and driven by passion. You are the spark that begins new chapters.",
  },
  {
    name: "Taurus",
    icon: IconZodiacTaurus,
    dates: "Apr 20 – May 20",
    element: "Earth",
    trait: "The steady builder who values beauty and roots.",
    description:
      "Venus blesses Taurus with patience and a deep love for life's pleasures. You create lasting foundations and find magic in the everyday.",
  },
  {
    name: "Gemini",
    icon: IconZodiacGemini,
    dates: "May 21 – Jun 20",
    element: "Air",
    trait: "The curious storyteller with two beautiful minds.",
    description:
      "Mercury gifts Gemini with wit, adaptability, and a thirst for knowledge. You weave worlds together through words and connection.",
  },
  {
    name: "Cancer",
    icon: IconZodiacCancer,
    dates: "Jun 21 – Jul 22",
    element: "Water",
    trait: "The intuitive nurturer who feels the unseen.",
    description:
      "The Moon's child carries deep emotional wisdom. Your sensitivity is your superpower — you sense what others cannot say.",
  },
  {
    name: "Leo",
    icon: IconZodiacLeo,
    dates: "Jul 23 – Aug 22",
    element: "Fire",
    trait: "The radiant heart that lights up every room.",
    description:
      "Ruled by the Sun, Leo souls are born to shine. You lead with warmth, generosity, and a creative fire that inspires others.",
  },
  {
    name: "Virgo",
    icon: IconZodiacVirgo,
    dates: "Aug 23 – Sep 22",
    element: "Earth",
    trait: "The thoughtful healer who perfects with care.",
    description:
      "Mercury's earthly child, Virgo blends analysis with service. You see the details others miss and turn chaos into harmony.",
  },
  {
    name: "Libra",
    icon: IconZodiacLibra,
    dates: "Sep 23 – Oct 22",
    element: "Air",
    trait: "The graceful weaver of beauty and balance.",
    description:
      "Venus guides Libra toward harmony in all things. You are the diplomat, the artist, the one who finds peace in partnership.",
  },
  {
    name: "Scorpio",
    icon: IconZodiacScorpio,
    dates: "Oct 23 – Nov 21",
    element: "Water",
    trait: "The deep mystic who transforms through truth.",
    description:
      "Ruled by Pluto, Scorpio souls walk between worlds. You hold the gift of transformation — what you touch is reborn.",
  },
  {
    name: "Sagittarius",
    icon: IconZodiacSagittarius,
    dates: "Nov 22 – Dec 21",
    element: "Fire",
    trait: "The seeker who chases meaning across horizons.",
    description:
      "Jupiter's wanderer, Sagittarius lives for adventure and wisdom. You chase truth like an arrow released into the cosmos.",
  },
  {
    name: "Capricorn",
    icon: IconZodiacCapricorn,
    dates: "Dec 22 – Jan 19",
    element: "Earth",
    trait: "The wise climber who builds legacies.",
    description:
      "Saturn forges Capricorn with discipline and depth. You climb mountains others fear — and build what outlasts time.",
  },
  {
    name: "Aquarius",
    icon: IconZodiacAquarius,
    dates: "Jan 20 – Feb 18",
    element: "Air",
    trait: "The visionary who dreams ahead of the world.",
    description:
      "Uranus blesses Aquarius with originality and vision. You see futures others cannot — your mind is a gift to humanity.",
  },
  {
    name: "Pisces",
    icon: IconZodiacPisces,
    dates: "Feb 19 – Mar 20",
    element: "Water",
    trait: "The ocean-souled dreamer of infinite worlds.",
    description:
      "Neptune's child swims in mystery and imagination. You are the artist, the empath, the bridge between the seen and unseen.",
  },
];
