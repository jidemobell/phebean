import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              Hi! I'm a final-year secondary school student in Ireland with a passion for baking that started years ago. 
              What began as a hobby has grown into something special - I now take on small baking contracts for friends, 
              family, and acquaintances who love my homemade treats.
            </p>
            <p className="about-description">
              From birthday cakes to cookies for special occasions, I put love and care into every creation. 
              Balancing school and baking has taught me time management and the joy of bringing sweetness to others' lives.
            </p>
            {/* <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Baking</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Made with Love</span>
              </div>
            </div> */}
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&crop=center" 
              alt="Baking process"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
