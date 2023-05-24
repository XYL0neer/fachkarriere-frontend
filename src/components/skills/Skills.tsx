import { useState } from "react";
interface Skill {
  id: number;
  name: string | undefined;
}
const initialList: Skill[] = [
  {
    id: 1,
    name: "Angular",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "Scrum",
  },
  {
    id: 4,
    name: "java",
  },
  {
    id: 5,
    name: "Full-Stack",
  },
  {
    id: 6,
    name: "Presentation",
  },
  {
    id: 7,
    name: "Coach",
  },
];

export default function Skills() {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState();

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  // eslint-disable-next-line
  const handleAddSkill = (e: any) => {
    // eslint-disable-next-line
    e.preventDefault();
    const newList = list.concat({ id: getRandomInt(), name: text });
    // eslint-disable-next-line
    setList(newList);
  };

  // eslint-disable-next-line
  const handleChange = (e: any) => {
    // eslint-disable-next-line
    setText(e.target.value);
  };

  return (
    <>
      <div className="my-4">
        <h2 className="m-2 text-2xl">Skills</h2>
        <form className="flex gap-4" onSubmit={handleAddSkill}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn-circle btn justify-center bg-white align-middle"
          >
            <span>+</span>
          </button>
        </form>
      </div>

      <div className="h-[2px] w-full bg-white"></div>

      <div className="flex flex-wrap ">
        {list.map((item) => (
          <span
            key={item.id}
            className="badge m-2 h-8 rounded-3xl bg-white text-black"
          >
            <span className="mx-1">{item.name}</span>
          </span>
        ))}
      </div>
    </>
  );
}
