import { ChatGPTAPI } from "chatgpt";
import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { TrainingListWord } from "./types";

const randomItem = <T,>(list: T[]): T =>
  list[Math.floor(Math.random() * list.length)];

const chatGptApi = new ChatGPTAPI({
  apiKey: import.meta.env.VITE_OPENAPI_TOKEN,
});

export const AiViewer = () => {
  const data = useLoaderData() as TrainingListWord[];
  const [sentence, setSentence] = useState("");

  const theLeftWord = useMemo(() => {
    return randomItem(data).left_value;
  }, [data]);

  useEffect(() => {
    chatGptApi
      .sendMessage(
        `Create a sentence around the following word and include this word, but replace it with three dots: "${theLeftWord}". Output nothing else than that.`
      )
      .then((v) => setSentence(v.text));
  }, [theLeftWord]);

  return <p>{sentence}</p>;
};
