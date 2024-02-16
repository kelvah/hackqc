import { useEffect, useState } from "react";

import { Topic } from "../types.ts";
import { topicsData } from "../data.ts";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [topicsSelection, setTopicsSelection] = useState<number[]>([]);
  const [topicsLoading, setTopicsLoading] = useState(false);

  const loadTopics = () => {
    setTopicsLoading(true);
  };

  useEffect(() => {
    if (topicsLoading) {
      const timer = setTimeout(() => {
        setTopicsLoading(false);
        setTopics(topicsData);
        setTopicsSelection([...Array(topicsData.length).keys()]);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      document
        .querySelector(".step-2")
        ?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [topicsLoading]);

  useEffect(() => {
    console.log(topicsSelection.join(", "));
  }, [topicsSelection]);

  return {
    topics,
    topicsLoading,
    topicsSelection,
    setTopicsSelection,
    loadTopics,
  };
};
