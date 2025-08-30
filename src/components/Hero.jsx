import './Hero.css';
import phebeanImage from '../assets/images/phebe.png';

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Sweet Creations by Phebean</h1>
            <p className="hero-subtitle">Artisan bakes crafted with passion and precision</p>
            <p className="hero-description">
              Creating delicious treats that bring joy to every occasion. From classic favorites to unique custom creations, each bake is made with care and quality ingredients to make your moments sweeter.
            </p>
            <button className="hero-cta" onClick={scrollToGallery}>
              View My Creations
            </button>
          </div>
          <div className="hero-image">
            <img 
              src={phebeanImage} 
              alt="Phebean - Passionate baker and creator of sweet delights"
              className="profile-image"
              // style={{ top: '10', left: '-20', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
