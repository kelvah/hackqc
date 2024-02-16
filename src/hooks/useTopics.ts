import { useEffect, useState } from "react";

import { Topic } from "../types.ts";
import { api } from "../api.ts";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [topicsSelection, setTopicsSelection] = useState<number[]>([]);
  const [topicsLoading, setTopicsLoading] = useState(false);

  const loadTopics = (associateId: string, periodId: string) => {
    setTopicsLoading(true);
    const startTime = Date.now();
    Promise.all([
      api.get(`/json/quarterly/${associateId}/${periodId}`),
      api.get(`/json/rewardzone/${associateId}/${periodId}`),
      api.get(`/json/anniversary/${associateId}/${periodId}`),
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
  };

  useEffect(() => {
    if (topics && topics.length > 0 && !topicsLoading) {
      document
        .querySelector(".step-2")
        ?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [topicsLoading, topics]);

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
