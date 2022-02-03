import { useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext"
import "./Profile.scss"

export default function Profile(){

    const {profile} = useContext(ProfileContext)

    return <div className="profile-card">

        <img className="profile-card__img" src={profile.image} alt=""/>
        <h4 className="profile-card__h4">{profile.name}-{profile.species}</h4>
    </div>
}