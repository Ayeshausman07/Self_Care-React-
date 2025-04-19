import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const [currentStep, setCurrentStep] = useState(1);
const [userSelections, setUserSelections] = useState([]);
const totalSteps = 3;

const handleSelection = (option) => {
  const newSelections = [...userSelections, option];
  setUserSelections(newSelections);
  
  if (currentStep < totalSteps - 1) {
    setCurrentStep(currentStep + 1);
  } else {
    setCurrentStep(totalSteps); // Show results
  }
};

const handleRestart = () => {
  setCurrentStep(1);
  setUserSelections([]);
};

const getRecommendation = (selections) => {
  // Simple recommendation logic - expand this as needed
  if (selections.includes('Stress relief') && selections.includes('Quiet & solo')) {
    return "Private Sound Bath Session";
  }
  if (selections.includes('Physical wellness') && selections.includes('Studio')) {
    return "Personalized Yoga Therapy";
  }
  if (selections.includes('Mental clarity') && selections.includes('Nature')) {
    return "Guided Forest Meditation";
  }
  return "Custom Wellness Consultation";
};

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('submitting');
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      details: "123 Wellness Way, Mindful City, MC 12345",
      description: "Visit our serene space designed for relaxation and healing"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Available Monday-Friday, 9am-5pm for immediate support"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "connect@selfcarejourney.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: "Mon-Fri: 9am-5pm | Sat: 10am-2pm",
      description: "Closed Sundays for our team's self-care"
    }
  ];

  return (
    <div className="selfcare-contact-page">
      {/* Hero Section */}
      <section className="selfcare-contact-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="selfcare-contact-title">Connect With Us</h1>
                <p className="selfcare-contact-subtitle">
                  Your wellbeing journey matters to us. Reach out anytime.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Grid */}
      <section className="selfcare-contact-grid">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              {contactMethods.map((method, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <div className="selfcare-contact-method">
                      <div className="selfcare-contact-icon">
                        {method.icon}
                      </div>
                      <h3 className="selfcare-contact-method-title">{method.title}</h3>
                      <p className="selfcare-contact-method-details">{method.details}</p>
                      <p className="selfcare-contact-method-description">{method.description}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="selfcare-contact-form-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="selfcare-contact-form-container">
                  <div className="selfcare-form-header">
                    <h2 className="selfcare-form-title">Send Us a Message</h2>
                    <p className="selfcare-form-subtitle">
                      Have questions about our programs or services? We're here to help.
                    </p>
                  </div>
                  
                  <Form onSubmit={handleSubmit} className="selfcare-form">
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Label className="selfcare-form-label">Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="selfcare-form-input"
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label className="selfcare-form-label">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="selfcare-form-input"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="formSubject">
                          <Form.Label className="selfcare-form-label">Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="selfcare-form-input"
                            placeholder="What's this about?"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="formMessage">
                          <Form.Label className="selfcare-form-label">Your Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="selfcare-form-textarea"
                            placeholder="Tell us how we can help..."
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="selfcare-form-submit-btn"
                            disabled={submitStatus === 'submitting'}
                          >
                            {submitStatus === 'submitting' ? (
                              'Sending...'
                            ) : (
                              <>
                                <FaPaperPlane className="me-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </motion.div>
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="selfcare-form-success"
                          >
                            Thank you! Your message has been sent. We'll respond soon.
                          </motion.div>
                        )}
                      </Col>
                    </Row>
                  </Form>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
  {/* Interactive Self-Care Guide Section */}
<section className="selfcare-location-guide">
  <Container>
    <Row className="justify-content-center">
      <Col lg={8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="guide-card">
            <div className="guide-content">
              <h3 className="guide-title">Find Your Perfect Self-Care Experience</h3>
              <p className="guide-subtitle">Answer a few questions to discover which of our services matches your needs</p>
              
              <div className="guide-progress">
                <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
              </div>
              
              {currentStep === 1 && (
                <div className="guide-step">
                  <h4>What brings you today?</h4>
                  <div className="option-grid">
                    {['Stress relief', 'Physical wellness', 'Mental clarity', 'Emotional balance'].map((option) => (
                      <button 
                        key={option}
                        className="guide-option"
                        onClick={() => handleSelection(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="guide-step">
                  <h4>Preferred environment?</h4>
                  <div className="option-grid">
                    {['Quiet & solo', 'Group energy', 'Nature', 'Studio'].map((option) => (
                      <button 
                        key={option}
                        className="guide-option"
                        onClick={() => handleSelection(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="guide-result">
                  <div className="result-icon">
                    <i className="bi bi-spa"></i>
                  </div>
                  <h4>We Recommend:</h4>
                  <p className="result-text">{getRecommendation(userSelections)}</p>
                  <p className="result-location">
                    <i className="bi bi-geo-alt"></i> Available at our Main Sanctuary
                  </p>
                  <div className="result-actions">
                    <Button variant="primary" className="me-2">
                      Book Now
                    </Button>
                    <Button 
                      variant="outline-primary"
                      onClick={handleRestart}
                    >
                      <i className="bi bi-arrow-repeat me-1"></i> Start Over
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="guide-map">
              <div className="map-placeholder">
                <i className="bi bi-geo-alt-fill"></i>
                <p>Our Peaceful Sanctuary</p>
                <small>123 Wellness Way, Serene City</small>
              </div>
            </div>
          </div>
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>
      
            {/* Footer */}
            <footer className="footer">
              <Container>
                <Row>
                  <Col lg={4} className="mb-4 mb-lg-0">
                    <h5 className="footer-brand">SelfCare</h5>
                    <p className="mt-3">
                      Your personal companion for a balanced and mindful life.
                    </p>
                    <div className="social-icons mt-4">
                      {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                        <a key={icon} href="#" className="me-3">
                          <i className={`fab fa-${icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </Col>
                  <Col md={4} lg={2} className="mb-4 mb-md-0">
                    <h6>Product</h6>
                    <ul className="footer-links">
                      {['Features', 'Pricing', 'FAQ', 'Download'].map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h6>Company</h6>
              <ul className="footer-links">
                {[
                  { name: "About", path: "/About" },
                  { name: "Blog", path: "/Blog" },
                  { name: "Careers", path: "/Career" },
                  { name: "Contact", path: "/Contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
                  <Col md={4} lg={4}>
                    <h6>Join Our Newsletter</h6>
                    <div className="newsletter-form mt-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="form-control mb-2"
                      />
                      <Button variant="primary" className="w-100">
                        Subscribe
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row className="footer-bottom mt-5">
                  <Col>
                    <p className="small text-center text-muted mb-0">
                      © {new Date().getFullYear()} SelfCare. All rights reserved.
                    </p>
                  </Col>
                </Row>
              </Container>
            </footer>
    </div>
  );
};

export default Contact;