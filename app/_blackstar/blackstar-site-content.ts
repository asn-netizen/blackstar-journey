export type BlackstarRoomKey =
  | "about"
  | "journal"
  | "chapters"
  | "projects"
  | "contact";

export type BlackstarArtifactType =
  | "portrait"
  | "newspaper"
  | "compass"
  | "projector"
  | "telephone";

export type BlackstarJourneyPath = {
  roomKey: BlackstarRoomKey;
  roomNumber: string;
  roomName: string;
  artifactType: BlackstarArtifactType;
  artifactLabel: string;
  roomPath: string;
  artifactInvitation: string;
  roomIntroduction: string;
};

export type BlackstarJourneyRoom = {
  roomKey: BlackstarRoomKey;
  roomLabel: string;
};

export type BlackstarSkyStar = {
  leftPosition: string;
  topPosition: string;
};

export type BlackstarConversationPrompt = {
  promptKey: string;
  question: string;
  answer: string;
};

export type BlackstarJournalStory = {
  storyType: string;
  storyPlace: string;
  storyTitle: string;
  storyDeck: string;
  storyExcerpt: string;
  colorTheme: string;
};

export type BlackstarChapterPlace = {
  chapterKey: string;
  placeName: string;
  countryName: string;
  coordinates: string;
  visitorPrompt: string;
  placeDescription: string;
};

export type BlackstarProject = {
  projectNumber: string;
  projectTitle: string;
  projectMedium: string;
  projectStatus: string;
  projectSummary: string;
  projectQuestion: string;
  accentClassName: string;
};

export const BLACKSTAR_JOURNEY_PATHS: BlackstarJourneyPath[] = [
  {
    roomKey: "about",
    roomNumber: "01",
    roomName: "About",
    artifactType: "portrait",
    artifactLabel: "The portrait",
    roomPath: "/about",
    artifactInvitation: "You found the portrait.",
    roomIntroduction:
      "Come meet the thinking behind Blackstar—why it exists, what it notices, and the kind of world it wants to help create.",
  },
  {
    roomKey: "journal",
    roomNumber: "02",
    roomName: "Journal",
    artifactType: "newspaper",
    artifactLabel: "The newspaper",
    roomPath: "/journal",
    artifactInvitation: "There is something in today’s paper.",
    roomIntroduction:
      "Open the journal for field notes, photographs, interviews, and the small details that make a place feel alive.",
  },
  {
    roomKey: "chapters",
    roomNumber: "03",
    roomName: "Chapters",
    artifactType: "compass",
    artifactLabel: "The compass",
    roomPath: "/chapters",
    artifactInvitation: "The compass is pointing somewhere.",
    roomIntroduction:
      "Choose a place and follow the relationships that connect Accra, London, and Black communities across distance.",
  },
  {
    roomKey: "projects",
    roomNumber: "04",
    roomName: "Projects",
    artifactType: "projector",
    artifactLabel: "The projector",
    roomPath: "/projects",
    artifactInvitation: "The projector is still warm.",
    roomIntroduction:
      "See the films, sound experiments, gatherings, and objects that move an idea out of the notebook and into the world.",
  },
  {
    roomKey: "contact",
    roomNumber: "05",
    roomName: "Contact",
    artifactType: "telephone",
    artifactLabel: "The telephone",
    roomPath: "/contact",
    artifactInvitation: "The telephone is waiting.",
    roomIntroduction:
      "Have an idea, a question, or a story we should hear? Pick up the line. A real conversation can start here.",
  },
];

export const BLACKSTAR_JOURNEY_ROOMS: BlackstarJourneyRoom[] =
  BLACKSTAR_JOURNEY_PATHS.map(
    ({ roomKey, roomName }): BlackstarJourneyRoom => ({
      roomKey,
      roomLabel: roomName,
    }),
  );

export const BLACKSTAR_ROOM_COUNT = BLACKSTAR_JOURNEY_ROOMS.length;

export const BLACKSTAR_SKY_STARS: BlackstarSkyStar[] = [
  { leftPosition: "8%", topPosition: "18%" },
  { leftPosition: "17%", topPosition: "72%" },
  { leftPosition: "31%", topPosition: "30%" },
  { leftPosition: "47%", topPosition: "82%" },
  { leftPosition: "58%", topPosition: "14%" },
  { leftPosition: "69%", topPosition: "66%" },
  { leftPosition: "83%", topPosition: "23%" },
  { leftPosition: "92%", topPosition: "76%" },
  { leftPosition: "76%", topPosition: "42%" },
  { leftPosition: "40%", topPosition: "55%" },
];

export const BLACKSTAR_ABOUT_CONVERSATIONS: BlackstarConversationPrompt[] = [
  {
    promptKey: "why",
    question: "Why did you call it Blackstar?",
    answer:
      "Because a black star can be both a point of origin and a direction. The name reminds us that culture is never standing still—it travels, gathers meaning, and helps people find one another.",
  },
  {
    promptKey: "notice",
    question: "What are you looking for?",
    answer:
      "The details people usually pass by: a room after the music ends, the way someone handles a tool they learned to use as a child, or the moment a stranger decides to join a conversation.",
  },
  {
    promptKey: "feel",
    question: "What should I feel while I’m here?",
    answer:
      "Curious enough to keep looking and comfortable enough to take your time. We are not trying to rush you toward a conclusion. We want to leave room for your own questions.",
  },
];

export const BLACKSTAR_JOURNAL_STORIES: BlackstarJournalStory[] = [
  {
    storyType: "Field note",
    storyPlace: "Accra",
    storyTitle: "Before the city wakes",
    storyDeck: "At 5:42 in the morning, the coast is already having a conversation.",
    storyExcerpt:
      "The first sound is not traffic. It is a metal bowl set on concrete, then a voice calling across the blue light. We follow the morning through the people who begin working before most windows turn on.",
    colorTheme: "clay",
  },
  {
    storyType: "Interview",
    storyPlace: "Kumasi",
    storyTitle: "Making is a form of remembering",
    storyDeck: "A conversation about learning with your hands and passing knowledge forward.",
    storyExcerpt:
      "The work starts long before the finished object. It starts in observation: watching an elder measure without a ruler, listening for the sound that means a tool is ready, and knowing when not to interrupt.",
    colorTheme: "gold",
  },
  {
    storyType: "Photo essay",
    storyPlace: "Mississippi",
    storyTitle: "What the road keeps",
    storyDeck: "Porches, hand-painted signs, and the memory held between two towns.",
    storyExcerpt:
      "Some archives are filed in buildings. Others live in roads people still call by an old family name. This essay follows the visible and invisible landmarks that keep a community’s map intact.",
    colorTheme: "blue",
  },
  {
    storyType: "Listening note",
    storyPlace: "London",
    storyTitle: "The room after the music",
    storyDeck: "What remains when the last record stops and nobody is ready to leave.",
    storyExcerpt:
      "A good room changes while people are inside it. Chairs move. Introductions become arguments, then laughter. When the speakers go quiet, the room keeps a little of every person who was there.",
    colorTheme: "ink",
  },
];

export const BLACKSTAR_JOURNAL_FILTERS = [
  "All",
  "Field note",
  "Interview",
  "Photo essay",
  "Listening note",
] as const;

export type BlackstarJournalFilter =
  (typeof BLACKSTAR_JOURNAL_FILTERS)[number];

export const BLACKSTAR_CHAPTER_PLACES: BlackstarChapterPlace[] = [
  {
    chapterKey: "accra",
    placeName: "Accra",
    countryName: "Ghana",
    coordinates: "05.6037° N · 00.1870° W",
    visitorPrompt:
      "Start here if you want to feel the city moving before you can name its rhythm.",
    placeDescription:
      "Accra is not treated as a backdrop. It is a voice in the work—coastal air, traffic, football fields, studios, kitchens, and people building new ideas beside old knowledge.",
  },
  {
    chapterKey: "london",
    placeName: "London",
    countryName: "United Kingdom",
    coordinates: "51.5072° N · 00.1276° W",
    visitorPrompt:
      "Start here if you are interested in what it means to make home more than once.",
    placeDescription:
      "London holds overlapping maps. We follow the friendships, music, food, language, and everyday rituals through which diaspora communities keep memory alive while creating something unmistakably new.",
  },
  {
    chapterKey: "rural",
    placeName: "Rural Black America",
    countryName: "United States",
    coordinates: "LAND · KINSHIP · MEMORY",
    visitorPrompt:
      "Start here if you believe a place can remember the people who cared for it.",
    placeDescription:
      "Across rural Black communities, land is archive, inheritance, pressure, and possibility. This chapter listens to the people protecting local knowledge and imagining what staying can mean.",
  },
];

export const BLACKSTAR_PROJECTS: BlackstarProject[] = [
  {
    projectNumber: "01",
    projectTitle: "The Pitch Is a Gathering Place",
    projectMedium: "Film · Football · Accra",
    projectStatus: "In development",
    projectSummary:
      "A moving portrait of the neighborhood football grounds where competition, friendship, argument, and community all share the same touchline.",
    projectQuestion: "What can a game tell us about who feels at home?",
    accentClassName: "project-rust",
  },
  {
    projectNumber: "02",
    projectTitle: "Water Carries the Sound",
    projectMedium: "Sound · Accra ↔ London",
    projectStatus: "Research",
    projectSummary:
      "Field recordings and conversations placed side by side—not to make two cities sound alike, but to hear what travels between them.",
    projectQuestion: "Can listening become a map?",
    accentClassName: "project-blue",
  },
  {
    projectNumber: "03",
    projectTitle: "Objects for Keeping",
    projectMedium: "Craft · Publication · Kumasi",
    projectStatus: "Early concept",
    projectSummary:
      "A collection about the ordinary things people refuse to throw away, and the memories, skills, and relationships those objects quietly hold.",
    projectQuestion: "What do the things we keep ask us to remember?",
    accentClassName: "project-gold",
  },
];
