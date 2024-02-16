import { useState } from "react";

export const useExtraTopic = () => {
  const [extraTopic, setExtraTopic] = useState<string | null>(null);
  const [isExtraTopicSelected, setIsExtraTopicSelected] = useState(false);

  const changeExtraTopic = (topic: string | null) => {
    setExtraTopic(topic);
  };

  return {
    extraTopic,
    changeExtraTopic,
    isExtraTopicSelected,
    setIsExtraTopicSelected,
  };
};
