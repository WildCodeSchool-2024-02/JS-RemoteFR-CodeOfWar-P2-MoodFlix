import tmdb from "./tmdb";

/*
export const moodTable = {
  happy: { emoji: "😄", id: 35 },
  sad: { emoji: "😢", id: 18 },
  action: { emoji: "💥", id: 28 },
  adventure: { emoji: "🌍", id: 12 },
  romantic: { emoji: "💖", id: 10749 },
  thriller: { emoji: "😱", id: 53 },
  horror: { emoji: "🧟‍♂️", id: 27 },
  mystery: { emoji: "🕵️‍♂️", id: 9648 },
  sciFi: { emoji: "🚀", id: 878 },
  fantasy: { emoji: "🧙‍♂️", id: 14 },
  family: { emoji: "👨‍👩‍👧‍👦", id: 10751 },
  animation: { emoji: "🎬", id: 16 },
  comedy: { emoji: "😂", id: 35 },
  drama: { emoji: "😓", id: 18 },
};
*/

export const moodTable = {
  happy: {
    emoji: "😄",
    id: 35,
    description:
      "Films qui apportent de la joie et du rire, parfaits pour se sentir bien après une journée chargée. 🎉🤣",
  },
  sad: {
    emoji: "😢",
    id: 18,
    description:
      "Histoires poignantes et émouvantes qui peuvent vous faire verser une larme. 💔😢",
  },
  action: {
    emoji: "💥",
    id: 28,
    description:
      "Films remplis d'excitation, de combat et d'aventure où les héros affrontent des défis impossibles. 🚀🔥",
  },
  adventure: {
    emoji: "🌍",
    id: 12,
    description:
      "Explorations épiques, découvertes de nouveaux mondes et aventures courageuses. 🗺️🏞️",
  },
  romantic: {
    emoji: "💖",
    id: 10749,
    description:
      "Récits d'amour et de romance qui vous font croire en la magie de l'amour. 💕🌹",
  },
  thriller: {
    emoji: "😱",
    id: 53,
    description:
      "Suspense intense, mystères captivants et intrigues palpitantes qui vous tiennent en haleine jusqu'à la fin. 🕵️‍♂️🔪",
  },
  horror: {
    emoji: "🧟‍♂️",
    id: 27,
    description:
      "Frissons et frayeurs, films d'horreur pour les amateurs de sensations fortes et d'histoires effrayantes. 🌑👻",
  },
  mystery: {
    emoji: "🕵️‍♂️",
    id: 9648,
    description:
      "Énigmes à résoudre, mystères cachés et investigations intrigantes pour les détectives en herbe. 🔍🤔",
  },
  sciFi: {
    emoji: "🚀",
    id: 878,
    description:
      "Aventures futuristes, technologies avancées et voyages interstellaires dans l'espace. 🌌👽",
  },
  fantasy: {
    emoji: "🧙‍♂️",
    id: 14,
    description:
      "Univers magiques, créatures fantastiques et contes enchanteurs remplis d'imaginaire et de merveilleux. 🏰🧚‍♂️",
  },
  family: {
    emoji: "👨‍👩‍👧‍👦",
    id: 10751,
    description:
      "Divertissement pour toute la famille, histoires joyeuses et aventures pour petits et grands. 🎈👨‍👩‍👧‍👦",
  },
  animation: {
    emoji: "🎬",
    id: 16,
    description:
      "Films animés, dessins animés et animations visuellement captivantes qui enchantent et émerveillent. 🌟🎨",
  },
  comedy: {
    emoji: "😂",
    id: 35,
    description:
      "Comédies hilarantes et légères qui vous feront éclater de rire et oublier les tracas du quotidien. 🤣🎭",
  },
  drama: {
    emoji: "😓",
    id: 18,
    description:
      "Récits émotionnels et profonds explorant les relations humaines, les défis de la vie et les dilemmes moraux. 🎭💬",
  },
};

export default function getMoviesByMood(mood) {
  return tmdb
    .get("/discover/movie", {
      params: {
        with_genres: moodTable[mood]?.id || 28,
        page: 1,
      },
    })
    .then((response) => response.data);
}
