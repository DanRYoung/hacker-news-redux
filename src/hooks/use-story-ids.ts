import { useEffect, useState } from "react";

import routes from "../api/routes";

export interface StoryIdsOptions {
  /* Number of stories to fetch */
  count: number;
}

const useStoryIds = (options: StoryIdsOptions) => {
  const [stories, setStories] = useState<number[]>([]);

  useEffect(() => {
    const getStoryIds = async () => {
      const response = await fetch(routes.stories);
      if (!response.ok) setStories([]);
      setStories((await response.json()).slice(0, options.count));
    };
    getStoryIds();
  }, []);

  return stories;
};

export default useStoryIds;
