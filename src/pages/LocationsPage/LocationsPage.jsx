import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import './LocationsPage.scss'

const defaultImg= "https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643473050/Rick%20y%20morty/planera_rick_y_morty_jkili2.png"

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  const getLocations = async (newPage = 1) => {
    const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
    setLocations(res.data.results);
    setTotalPages(res.data.info)

  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="location-page">
      <Pagination getLocations={getLocations} totalPages={totalPages}/>
      <div className="location-card">
      {locations.map((item) => (
        <figure className="location-card__item" key={item.id}>
          <figcaption className="location-card__item--name">{item.name}</figcaption>
          <img className="location-card__item--image" src={defaultImg} alt={item.name} />
        </figure>
      ))}
    </div>
    </div>
  );
}