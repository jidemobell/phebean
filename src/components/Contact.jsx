import { useState } from 'react';
import './Contact.css';
import emailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/phone.png';
import timeIcon from '../assets/icons/time.png';
import locationIcon from '../assets/icons/location.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: '',
    message: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    // In a real app, you'd send this to your backend or email service
    console.log('Order inquiry:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderType: '',
      message: '',
      date: ''
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Let's Create Something Sweet!</h2>
            <p className="contact-description">
              Ready to order? Have questions about my baking services? I'd love to hear from you! 
              Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <img src={emailIcon} alt="Email" className="contact-icon-img" />
                <div>
                  <h4>Email</h4>
                  <p>sweetcreations@email.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" className="contact-icon-img" />
                <div>
                  <h4>Phone/WhatsApp</h4>
                  <p>+353 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="contact-item">
                <img src={locationIcon} alt="Location" className="contact-icon-img" />
                <div>
                  <h4>Location</h4>
                  <p>Ireland (Local delivery available)</p>
                </div>
              </div>
              
              <div className="contact-item">
                <img src={timeIcon} alt="Time" className="contact-icon-img" />
                <div>
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="orderType">What are you looking for? *</label>
              <select
                id="orderType"
                name="orderType"
                value={formData.orderType}
                onChange={handleChange}
                required
              >
                <option value="">Please select...</option>
                <option value="birthday-cake">Birthday Cake</option>
                <option value="cupcakes">Cupcakes</option>
                <option value="cookies">Cookies</option>
                <option value="special-order">Special Order</option>
                <option value="question">Just a Question</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="date">When do you need this?</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Tell me more about your order *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your vision, dietary requirements, size, flavors, or any special requests..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send My Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
