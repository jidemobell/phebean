import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Birthday Cakes",
      price: "€25 - €60",
      description: "Custom designed birthday cakes tailored to your theme and taste preferences. Available in various sizes and flavors.",
      features: ["Custom design", "Choice of flavors", "Personal message", "Serves 8-20 people"]
    },
    {
      id: 2,
      title: "Cupcake Sets",
      price: "€15 - €35",
      description: "Beautifully decorated cupcakes perfect for parties, office treats, or small celebrations.",
      features: ["12 or 24 cupcakes", "Various flavors", "Custom decorations", "Gift box included"]
    },
    {
      id: 3,
      title: "Cookie Platters",
      price: "€12 - €25",
      description: "Freshly baked cookies in different varieties, perfect for sharing or as gifts.",
      features: ["2-3 dozen cookies", "Mix of varieties", "Beautiful packaging", "Great for gifts"]
    },
    {
      id: 4,
      title: "Special Orders",
      price: "Quote on request",
      description: "Have something specific in mind? I love a challenge! Contact me to discuss your custom baking needs.",
      features: ["Custom creations", "Event catering", "Dietary accommodations", "Consultation included"]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">What I Bake</h2>
        <p className="services-subtitle">Delicious treats made fresh to order</p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">{feature}</li>
                ))}
              </ul>
              <button className="service-cta">Order Now</button>
            </div>
          ))}
        </div>
        
        <div className="services-note">
          <p>💡 <strong>Note:</strong> All orders require 48-72 hours notice. Prices may vary based on complexity and ingredients. Contact me for a personalized quote!</p>
        </div>
      </div>
    </section>
  );
}
