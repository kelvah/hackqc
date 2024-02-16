import { useState } from "react";
import { api } from "../api.ts";
import { AxiosRequestConfig } from "axios";

export const useTalkingPoints = () => {
  const [talkingPoints, setTalkingPoints] = useState("");
  const [loadingTalkingPoints, setLoadingTalkingPoints] = useState(false);

  const payload =
    'You are a manager conducting your quarterly performance review with your associates. Create a conversation plan with a list of talking points based on the associate data. Consolidate the topics and create a single plan with the talking points following the "Crucial Conversations" framework. Keep the talking points succinct and avoid giving conversation examples. Include in the plan a couple suggestions of possible areas for development of the associate. Avoid repeated topics.\n' +
    "Here is the data collected for your associate Matteo Mortari:\n" +
    "\n";

  const getPayload = (topics: string[]) => {
    let topicsList = "";
    topics.forEach((topic) => (topicsList = topicsList.concat(`- ${topic}\n`)));
    return payload.concat(topicsList);
  };
  const loadTalkingPoints = (topics: string[]) => {
    setLoadingTalkingPoints(true);

    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "text/plain",
      },
      responseType: "text",
    };
    const startTime = Date.now();
    api
      .post("freeform/convHelper", getPayload(topics), config)
      .then((response) => {
        console.log(response);
        setTalkingPoints(response.data);
      })
      .finally(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        if (elapsedTime < 3000) {
          setTimeout(() => {
            setLoadingTalkingPoints(false);
          }, 3000 - elapsedTime);
        } else {
          setLoadingTalkingPoints(false);
        }
      });
  };
  return { loadTalkingPoints, loadingTalkingPoints, talkingPoints };
};
