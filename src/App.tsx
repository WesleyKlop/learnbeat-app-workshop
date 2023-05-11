import { useState, useCallback, useEffect } from "react";
import { TrainingListsService } from "./generated";
import { TrainingListItem, TrainingListWord } from "./types";
import { Link } from "react-router-dom";

export const App = () => {
  const [lists, setLists] = useState<TrainingListItem[]>([]);
  const [selected, setSelected] = useState<TrainingListWord[]>();

  const select = useCallback(
    async (id: number) => {
      const resp = await TrainingListsService.getTraininglistsWords(id);
      setSelected(resp as TrainingListWord[]);
    },
    [setSelected]
  );

  useEffect(() => {
    TrainingListsService.getTraininglists().then((l) =>
      setLists(l as TrainingListItem[])
    );
  }, []);

  return (
    <ul>
      {lists.map((v) => (
        <li key={v.id}>
          <Link to={`/${v.id}`}>{v.name}</Link>
        </li>
      ))}
    </ul>
  );
};
