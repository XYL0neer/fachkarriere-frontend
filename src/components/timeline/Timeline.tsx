import { type FormEvent, useState, useContext, type ChangeEvent } from "react";
import {ProfileContext} from "~/contexts/ProfileContext";

export default function Timeline() {
  const { timelineElements, addElement} = useContext(ProfileContext);
  const [dateInput, setDateInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  
  const onDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setDateInput(e.target.value);
  }

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  }

  const submitElement = (e: FormEvent) => {
    e.preventDefault();
    if (addElement) {
      addElement(`${dateInput}: ${titleInput}`);
    }

    setDateInput("");
    setTitleInput("");
  }
  
  return <section>
    <h3 className="text-2xl font-bold mb-8">Timeline</h3>
    <ul className="steps steps-vertical">
      <li className="step" data-content=""> 
      <form className="flex" onSubmit={submitElement}>
        <input type="date" value={dateInput} onChange={onDateChange} className="input input-sm" />
        <input className="input input-sm" value={titleInput} onChange={onTitleChange} placeholder="Neuer Eintrag..." />
      </form>
      </li>
      {timelineElements.map(el => 
      <li className="step text-lg" data-content="" key={el}><p className="pb-4"> {el}</p></li>

        )}
    </ul>
  </section>
}