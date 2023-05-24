import Image from "next/image"
import { useContext } from "react"
import { ProfileContext } from "~/contexts/ProfileContext"

export default function Profile() {
  const {badges} = useContext(ProfileContext)
  return <>
  <div>
<div className="avatar flex justify-center">
  <div className="w-48 mb-8 rounded-full ring ring-primary ring-offset-2">
    <img src="/marcProfile.jpeg" alt="profile picture" />
  </div>
</div>

<h3 className="text-xl mb-4 font-bold ">Achievements</h3>
<div className=" border-black border p-4 rounded-lg h-40">

<div className="wrapper achievments flex flex-row gap-4">
  {badges.map(badge => <div  key={badge} className="avatar">
    <div className="w-12 rounded">
      <img src={badge} alt="badge" />
    </div>
  </div>
    )}
    </div>
</div>
</div>
  </>

}