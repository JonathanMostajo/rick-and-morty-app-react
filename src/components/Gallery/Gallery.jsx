import { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';
import './Gallery.scss'

export default function Gallery({ list }) {
  const {setProfile} = useContext(ProfileContext)
  return (
    <div className="gallery">
      {list.map((item) => (
        <figure className="gallery__item" key={item.id}>
          <figcaption className="gallery__item--name">{item.name}</figcaption>
          <img className="gallery__item--image" src={item.image} alt={item.name} />
          <button onClick={() => setProfile(item)}>Set as Favorite</button>
        </figure>
      ))}
    </div>
  );
}
