import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from '../components/SELF-CARE white.png';
import "../App.css";
import {
  FaHeart,
  FaMoon,
  FaLeaf,
  FaRunning,
  FaBrain,
  FaArrowDown,
} from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { GiMeditation, GiSpiralArrow } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  const [darkMode] = useState(true);
  const controls = useAnimation();
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Animated Particles Background */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="hero-content text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  Nurture Your <span className="text-gradient">Wellbeing</span>
                </h1>
                <p className="hero-subtitle">
                  Our self-care app helps you build healthy habits, reduce
                  stress, and find balance with personalized routines.
                </p>
                <p className="hero-subtitle mt-2">
                  Discover daily tips, mood tracking, and guided activities
                  designed to uplift your mind, body, and soul.
                </p>
                <div className="hero-buttons">
                  <Button variant="primary" className="me-3">
                    Start Your Journey
                  </Button>
                  <Button variant="outline-light">Learn More</Button>
                </div>
                <div className="scroll-indicator">
                  <GiSpiralArrow className="animate-spin" />
                  <span>Scroll to explore</span>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="hero-image-col">
              <Parallax speed={-10}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hero-image-container"
                >
                  <Carousel controls={false} indicators={false} interval={3000}>
                    {/* <Carousel.Item>
                      <img
                       src={logo} alt="SelfCare Logo" 
                        className="hero-image img-fluid rounded-4"
                      />
                    </Carousel.Item> */}
                    <Carousel.Item>
                      <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*5yark5e7LmJqpFwQbHW8Fw.gif"
                        alt="Yoga animation"
                        className="hero-image img-fluid rounded-4"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div className="floating-icon floating-icon-1">
                    <FaHeart className="icon-pulse" />
                  </div>
                  <div className="floating-icon floating-icon-2">
                    <IoMdHappy className="icon-rotate" />
                  </div>
                  <div className="floating-icon floating-icon-3">
                    <GiMeditation className="icon-bounce" />
                  </div>
                </motion.div>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row className="g-4 justify-content-center">
            {[
              { value: "500K+", label: "Active Users" },
              { value: "4.9", label: "App Rating" },
              { value: "10M+", label: "Sessions" },
            ].map((stat, index) => (
              <Col md={4} key={index} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="stat-card p-4 rounded-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="stat-number">{stat.value}</h2>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">Holistic Wellness Features</h2>
                <p className="section-subtitle">
                  Our app offers a comprehensive suite of tools designed to
                  nurture every aspect of your well-being.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                icon: <FaMoon />,
                title: "Sleep Tracking",
                desc: "Advanced sleep analysis with personalized recommendations",
              },
              {
                icon: <FaLeaf />,
                title: "Mindfulness",
                desc: "Guided meditations and breathing exercises",
              },
              {
                icon: <FaRunning />,
                title: "Movement",
                desc: "Customized yoga and stretching routines",
              },
              {
                icon: <FaBrain />,
                title: "Mental Health",
                desc: "Mood tracking and cognitive exercises",
              },
            ].map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="feature-card h-100 p-4 rounded-4"
                >
                  <div className="feature-icon mb-4">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <Button variant="outline-primary" size="sm" className="mt-3">
                    Learn More
                  </Button>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Daily Routine Section */}
      {/* App Showcase */}
      <section id="about" className="app-showcase-section">
        <Container>
          <Row className="ppp align-items-center">
            <Col lg={6} className="order-lg-1 order-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-4">
                  Personalized Wellness Journey
                </h2>
                <p className="mb-4">
                  Our AI-powered platform adapts to your unique needs, creating
                  a customized self-care routine that evolves with you.
                </p>

                <div className="feature-list">
                  <motion.div
                    className="feature-item mb-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="feature-number">01</div>
                    <div >
                      <h4>Daily Check-ins</h4>
                      <p>
                        Track your mood, energy, and sleep quality with
                        intuitive interfaces.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="feature-item mb-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="feature-number">02</div>
                    <div>
                      <h4>Smart Recommendations</h4>
                      <p>
                        Get personalized suggestions based on your patterns and
                        preferences.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="feature-item mb-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="feature-number">03</div>
                    <div>
                      <h4>Progress Insights</h4>
                      <p>
                        Visualize your wellness journey with beautiful,
                        data-rich dashboards.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="order-lg-2 order-1 mb-5 mb-lg-0">
              <Parallax speed={10}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="phone-mockup"
                >
                  <div className="phone-frame">
                    <Carousel
                      controls={false}
                      indicators={false}
                      interval={3000}
                    >
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </motion.div>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">What Our Community Says</h2>
                <p className="section-subtitle">
                  Join thousands who have transformed their self-care routines.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel indicators={false} className="testimonial-carousel">
                {[
                  {
                    quote:
                      "This app completely changed my morning routine. I start each day with intention and feel more centered.",
                    name: "Sarah J.",
                    role: "Teacher, 34",
                    img: "https://randomuser.me/api/portraits/women/32.jpg",
                  },
                  {
                    quote:
                      "The breathing exercises and guided meditations have been a game-changer for my anxiety.",
                    name: "Michael T.",
                    role: "Developer, 28",
                    img: "https://randomuser.me/api/portraits/men/45.jpg",
                  },
                ].map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="testimonial-card p-5 rounded-4"
                    >
                      <div className="ppp testimonial-content">
                        <p className="lead">"{testimonial.quote}"</p>
                        <div className="testimonial-author mt-4">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="rounded-circle me-3"
                          />
                          <div>
                            <h5 className="mb-1">{testimonial.name}</h5>
                            <p className="small text-muted">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="cta-content p-5 rounded-4"
              >
                <h2 className="mb-4">Ready to Transform Your Self-Care?</h2>
                <p className="mb-4">
                  Download our app today and take the first step toward a
                  healthier, happier you.
                </p>
                <div className="cta-buttons">
                  <Button variant="light" className="me-3">
                    <i className="fab fa-apple me-2"></i> App Store
                  </Button>
                  <Button variant="dark">
                    <i className="fab fa-google-play me-2"></i> Google Play
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row className="ppp">
            <Col lg={4} className="mb-4 mb-lg-0">
              <h5 className="footer-brand">SelfCare</h5>
              <p className="mt-3">
                Your personal companion for a balanced and mindful life.
              </p>
              <div className="social-icons mt-4">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                  (icon) => (
                    <a key={icon} href="#" className="me-3">
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </Col>
            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h6>Product</h6>
              <ul className="footer-links">
                {["Features", "Pricing", "FAQ", "Download"].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
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

export default Home;
