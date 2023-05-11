import { useLoaderData } from "react-router-dom";
import { TrainingListWord } from "./types";
import { useMemo, useState } from "react";

const randomItem = <T,>(list: T[]): T =>
  list[Math.floor(Math.random() * list.length)];

function getRandomRightValueExceptForId(
  list: TrainingListWord[],
  exceptId: number
): TrainingListWord {
  const random = list[Math.floor(Math.random() * list.length)];
  if (random.id === exceptId) {
    return getRandomRightValueExceptForId(list, exceptId);
  }
  return random;
}

export const Viewer = () => {
  const data = useLoaderData() as TrainingListWord[];
  const [selectedByChallenge, setSelectedByChallenge] = useState(
    Array.from({ length: 10 }, () => 0)
  );

  const challenges = useMemo(() => {
    const list: [TrainingListWord, TrainingListWord[]][] = [];
    for (let i = 0; i < 10; i++) {
      const random = randomItem(data);
      list.push([
        random,
        Array.from({ length: 9 }, () =>
          getRandomRightValueExceptForId(data, random.id)
        ).concat(random),
      ]);
    }
    return list;
  }, [data]);

  return (
    <div>
      {challenges.map(([a, c], idx) => (
        <div key={a.id} className="flex gap-4 border-b mb-4 px-1 py-2">
          <p>{a.left_value}:</p>
          <select
            onChange={(v) =>
              setSelectedByChallenge(
                selectedByChallenge.with(
                  idx,
                  parseInt(v.currentTarget.value, 10)
                )
              )
            }
            value={selectedByChallenge[idx]}
          >
            {c.map((b) => (
              <option key={b.id} value={b.id}>
                {b.right_value}
              </option>
            ))}
          </select>
          {selectedByChallenge[idx] === a.id ? "goed" : "fout"}
        </div>
      ))}
    </div>
  );
};
