import './Gallery.scss'

export default function Gallery({ list }) {
  return (
    <div className="gallery">
      {list.map((item) => (
        <figure className="gallery__item" key={item.id}>
          <figcaption className="gallery__item--name">{item.name}</figcaption>
          <img className="gallery__item--image" src={item.image} alt={item.name} />
        </figure>
      ))}
    </div>
  );
}
