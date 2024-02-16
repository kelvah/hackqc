import { useEffect, useState } from "react";

import { Topic } from "../types.ts";
import { api } from "../api.ts";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [topicsSelection, setTopicsSelection] = useState<number[]>([]);
  const [topicsLoading, setTopicsLoading] = useState(false);

  const loadTopics = () => {
    setTopicsLoading(true);
  };

  useEffect(() => {
    if (topicsLoading) {
      const startTime = Date.now();
      Promise.all([
        api.get("/dummy/quarterly/mmortari/2023Q4"),
        api.get("/dummy/rewardzone/mmortari/2023Q4"),
        api.get("/dummy/anniversary/mmortari/2023Q4"),
      ])
        .then((values) => {
          const topics: Topic[] = [];
          values.forEach((value) => {
            if (value.data && value.data.length > 0) {
              topics.push(
                ...value.data.map((item: string) => ({
                  text: item,
                  source: "",
                })),
              );
            }
          });
          setTopics(topics);
          setTopicsSelection([...Array(topics.length).keys()]);
        })
        .finally(() => {
          const endTime = Date.now();
          const elapsedTime = endTime - startTime;
          if (elapsedTime < 3000) {
            setTimeout(() => {
              setTopicsLoading(false);
            }, 3000 - elapsedTime);
          } else {
            setTopicsLoading(false);
          }
        });
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
