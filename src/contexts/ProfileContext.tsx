import { ReactNode, createContext, useState } from "react";

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

type ProfileContextType = {
  timelineElements: string[];
  badges: string[];
  skills: Skill[];
  addElement?: (element: string) => void;
  addSkill?: (text: string) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  timelineElements: [],
  badges: [],
  skills: [],
}
);


type ProfileContextProviderProps = {
  children: ReactNode;
}
export default function ProfileContextProvider({children}: ProfileContextProviderProps) {
  const [timelineElements, setTimelineElements] = useState<string[]>(['2023-05-24: Bester impact.6.day des Jahres', '2023-03-13: Projektjubiläum @ RCT', '2023-01-20: Kick-off und Pizza Event impact.6', '2023-01-04: Keynote@AWS Summit Berlin']);
  const [badges, setBadges] = useState<string[]>(['brain.png', 'badge.png']);
  const [skills, setSkills] = useState<Skill[]>(initialList);

  const [showAlert, setShowAlert] = useState(false);
  

  function addElement(element: string) {
    setTimelineElements(list => [element, ...list]);

    if (timelineElements.length === 4) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false)
        setBadges(list => ["achievements.png", ...list]);
      }, 5000)
    }
  }

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  // eslint-disable-next-line
  const addSkill = (text: string) => {
    // eslint-disable-next-line
    // e.preventDefault();
    const newList = skills.concat({ id: getRandomInt(), name: text });
    // eslint-disable-next-line
    setSkills(newList);
  };


  return <ProfileContext.Provider value={{timelineElements, badges, skills, addElement, addSkill }}>{children}
  {showAlert && <div className="alert alert-success shadow-lg absolute top-0 z-50">
  <div>
    <img src="achievements.png" alt="nice achievement unlocked" />
    <span>Glückwünsch! Du hast das Badge <span className="font-extrabold"> Conference Hunter </span>freigeschalten</span>
  </div>
</div>}
  </ProfileContext.Provider>
}