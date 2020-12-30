const BASE_URI = "https://hacker-news.firebaseio.com/v0";

const routes = {
  baseUri: BASE_URI,
  stories: `${BASE_URI}/topstories.json`,
  item: (id: number) => `${BASE_URI}/item/${id}.json`,
};

export default routes;
