import Story from "../types/Story";
import routes from "./routes";

export const fetchStory = async (id: number): Promise<Story | null> => {
  const response = await fetch(routes.item(id));
  if (!response.ok) return null;

  return response.json();
};
