import './Gallery.css';
import muffinsImage from '../assets/cakes/heather-barnes.jpg';

export default function Gallery() {
  const bakingItems = [
    {
      id: 1,
      title: "Birthday Cakes",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
      description: "Custom designed birthday cakes"
    },
    {
      id: 2,
      title: "Cupcakes",
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop&crop=center",
      description: "Delicious cupcakes for every occasion"
    },
    {
      id: 3,
      title: "Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&crop=center",
      description: "Freshly baked cookies"
    },
    {
      id: 4,
      title: "Brownies",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center",
      description: "Rich and fudgy brownies"
    },
    {
      id: 5,
      title: "Muffins",
      image: muffinsImage,
      description: "Fluffy homemade muffins"
    },
    {
      id: 6,
      title: "Special Occasions",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=400&fit=crop&crop=center",
      description: "Custom cakes for special events"
    }
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">My Sweet Creations</h2>
        <p className="gallery-subtitle">Take a look at some of my favorite baking projects</p>
        
        <div className="gallery-grid">
          {bakingItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
