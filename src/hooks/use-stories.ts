import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import moment from 'moment'

import routes from "../api/routes";
import Story from "../types/Story";
import useStoryIds from "./use-story-ids";

export interface StoryHookOptions {
  /* Number of stories to fetch */
  count: number;
  /* Where to start */
  skip: number;
}

const useStories = (options: StoryHookOptions) => {
  const [stories, setStories] = useState<Story[]>([]);
  const ids = useStoryIds({ count: options.count });

  useDeepCompareEffect(() => {
    const getStories = async () => {
      const { skip, count } = options;
      const idsToFetch = ids.slice(skip, skip + count);

      const result: Story[] = [];
      const parseStory = async (response: Response) => {
        if (!response.ok) return;
        const story = await response.json()
        result.push({ ...story, time: moment.unix(story.time) });
      };

      await Promise.all(
        idsToFetch.map((id) => fetch(routes.item(id)))
      ).then((responses) => Promise.all(responses.map(parseStory)));

      setStories(result);
    };
    getStories();
  }, [options, ids]);

  return stories;
};

export default useStories;
