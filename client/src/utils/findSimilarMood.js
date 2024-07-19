import { moodTable } from "../services/getMoviesByMood";

const moodList = Object.keys(moodTable);

const findSimilarMood = (rawSearch) => {
  const lowerSearch = rawSearch.toLowerCase();
  const similarMood = moodList.find((mood) => mood.includes(lowerSearch));
  return similarMood || moodList[0];
};

export default findSimilarMood;
