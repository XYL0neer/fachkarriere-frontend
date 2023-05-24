import { type FormEvent, useContext, useState } from "react";
import { ProfileContext } from "~/contexts/ProfileContext";

export default function Skills() {
  const {skills, addSkill} = useContext(ProfileContext);
  const [text, setText] = useState("");

  // eslint-disable-next-line
  const handleAddSkill = (e: FormEvent) => {
    // eslint-disable-next-line
    e.preventDefault();
    if (addSkill) {
      addSkill(text);

      setText("");
    }
  };

  // eslint-disable-next-line
  const handleChange = (e) => {
    // eslint-disable-next-line
    setText(e.target.value);
  };

  return (
    <>
      <div className="my-4">
        <h2 className="m-2 text-xl font-bold">Skills</h2>
        <form className="flex gap-4" onSubmit={handleAddSkill}>
          <input
            onChange={handleChange}
            value={text}
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

      <div className="h-[2px] w-[calc(100vw-4rem)] bg-white"></div>

      <div className="flex flex-wrap pt-4 h-24">
        {skills.map((item) => (
          <span
            key={item.id}
            className="badge badge-lg m-2 py-6 rounded-3xl bg-white text-black"
          >
            <span className="mx-1 py-8 text-xl">{item.name}</span>
          </span>
        ))}
      </div>
    </>
  );
}
