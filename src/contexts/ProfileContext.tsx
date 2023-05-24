import { ReactNode, createContext, useState } from "react";

type ProfileContextType = {
  timelineElements: string[];
  badges: string[];
  skills: string[];
  addElement?: (element: string) => void;
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
  const [skills, setSkills] = useState<string[]>([]);

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

  return <ProfileContext.Provider value={{timelineElements, badges, skills, addElement }}>{children}
  {showAlert && <div className="alert alert-success shadow-lg absolute top-0 z-50">
  <div>
    <img src="achievements.png" alt="nice achievement unlocked" />
    <span>Glückwünsch! Du hast das Badge <span className="font-extrabold"> Conference Hunter </span>freigeschalten</span>
  </div>
</div>}
  </ProfileContext.Provider>
}