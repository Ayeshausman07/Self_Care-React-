import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Accordion,
  Badge,
} from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
import axios from "axios";
import {
  FaLeaf,
  FaHeartbeat,
  FaUsers,
  FaQuoteLeft,
  FaMedal,
} from "react-icons/fa";
import { GiMeditation, GiYinYang } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState({ team: true, testimonials: true });
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // Fetch team members from API
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=4&nat=us"
        );
        setTeamMembers(
          response.data.results.map((member) => ({
            ...member,
            role: [
              "Wellness Expert",
              "Mindfulness Coach",
              "Yoga Instructor",
              "Nutrition Specialist",
            ][Math.floor(Math.random() * 4)],
          }))
        );
        setLoading((prev) => ({ ...prev, team: false }));
      } catch (error) {
        console.error("Error fetching team data:", error);
        setTeamMembers([
          {
            name: { first: "Sarah", last: "Johnson" },
            picture: {
              large: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            email: "sarah@selfcare.com",
            role: "Founder & CEO",
          },
          {
            name: { first: "Michael", last: "Chen" },
            picture: {
              large: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            email: "michael@selfcare.com",
            role: "Lead Developer",
          },
          {
            name: { first: "Priya", last: "Patel" },
            picture: {
              large: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            email: "priya@selfcare.com",
            role: "Wellness Expert",
          },
          {
            name: { first: "David", last: "Kim" },
            picture: {
              large: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            email: "david@selfcare.com",
            role: "UX Designer",
          },
        ]);
        setLoading((prev) => ({ ...prev, team: false }));
      }
    };

    // Fetch testimonials from API
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=3"
        );
        setTestimonials(
          response.data.map((item, index) => ({
            ...item,
            rating: 4 + index, // Random rating between 4-5
            role: ["Yoga Enthusiast", "Meditation Beginner", "Wellness Seeker"][
              index
            ],
          }))
        );
        setLoading((prev) => ({ ...prev, testimonials: false }));
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([
          {
            name: "Emma Wilson",
            body: "This app completely transformed my morning routine. I start each day with intention and feel more centered throughout the day.",
            rating: 5,
            role: "Yoga Enthusiast",
          },
          {
            name: "James Rodriguez",
            body: "As someone who struggles with anxiety, the breathing exercises and guided meditations have been a game-changer for me.",
            rating: 4,
            role: "Meditation Beginner",
          },
          {
            name: "Aisha Khan",
            body: "The personalized recommendations helped me establish a self-care routine that actually works with my busy schedule.",
            rating: 5,
            role: "Wellness Seeker",
          },
        ]);
        setLoading((prev) => ({ ...prev, testimonials: false }));
      }
    };

    fetchTeam();
    fetchTestimonials();
  }, []);

  // Animation trigger
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  // Stats data
  const stats = [
    {
      value: "500K+",
      label: "Active Users",
      icon: <FaUsers className="stat-icon" />,
    },
    {
      value: "4.9",
      label: "App Rating",
      icon: <FaMedal className="stat-icon" />,
    },
    {
      value: "10M+",
      label: "Sessions",
      icon: <GiMeditation className="stat-icon" />,
    },
  ];

  // Values data
  const values = [
    {
      title: "Holistic Approach",
      description: "We address mind, body, and spirit for complete wellness",
      icon: <GiYinYang className="value-icon" />,
    },
    {
      title: "Personalized Care",
      description: "Tailored recommendations based on your unique needs",
      icon: <FaLeaf className="value-icon" />,
    },
    {
      title: "Scientific Backing",
      description: "Evidence-based practices for real results",
      icon: <FaHeartbeat className="value-icon" />,
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge bg="primary" className="mb-3">
                  Our Story
                </Badge>
                <h1 className="display-4 fw-bold mb-4">
                  More Than An App — A Movement
                </h1>
                <p className="lead mb-4">
                  At SelfCare, we believe true wellness comes from nurturing all
                  aspects of your being. Our journey began in 2018 with a simple
                  mission: make holistic self-care accessible to everyone.
                </p>
                <Button variant="primary" size="lg" className="me-3">
                  Join Our Community <BsArrowRight />
                </Button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hero-image-container">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/1*uR_etjC2_wNXsuYG9ajeFg.gif"
                    alt="Group meditation"
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="stat-card text-center p-4 rounded-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon-container mb-3">{stat.icon}</div>
                  <h2 className="stat-number">{stat.value}</h2>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge bg="primary" className="mb-3">
                  Our Approach
                </Badge>
                <h2 className="mb-4">The Science Behind SelfCare</h2>
                <p className="lead">
                  We combine ancient wisdom with modern technology to create
                  transformative experiences
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {values.map((value, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  className="value-card h-100 p-4 rounded-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="value-icon-container mb-4">{value.icon}</div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge bg="primary" className="mb-3">
                  Our Team
                </Badge>
                <h2 className="mb-4">Meet The Wellness Experts</h2>
                <p className="lead">
                  Passionate professionals dedicated to your wellbeing
                </p>
              </motion.div>
            </Col>
          </Row>
          {loading.team ? (
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </Col>
            </Row>
          ) : (
            <Row className="g-4">
              {teamMembers.map((member, index) => (
                <Col lg={3} md={6} key={index}>
                  <motion.div
                    className="team-card text-center p-4 rounded-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="team-member-img mb-4">
                      <img
                        src={member.picture.large}
                        alt={`${member.name.first} ${member.name.last}`}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <h4 className="mb-1">{`${member.name.first} ${member.name.last}`}</h4>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="small text-muted">{member.email}</p>
                    <div className="social-links mt-3">
                      {["twitter", "linkedin", "instagram"].map((social) => (
                        <a key={social} href="#" className="mx-2">
                          <i className={`fab fa-${social}`}></i>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="community-voices-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge bg="primary" className="mb-3">
                  Community Voices
                </Badge>
                <h2 className="mb-4">What Our Members Say</h2>
                <p className="section-subtitle">
                  Real stories from people who transformed their lives
                </p>
              </motion.div>
            </Col>
          </Row>
          {loading.testimonials ? (
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <Carousel indicators={false} className="community-carousel">
                  {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                      <motion.div
                        className="voice-card p-5 rounded-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="voice-content">
                          <FaQuoteLeft className="quote-icon mb-4" />
                          <p className="voice-text mb-4">
                            "{testimonial.body}"
                          </p>
                          <div className="voice-author">
                            <div className="rating mb-2">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star ${
                                    i < testimonial.rating
                                      ? "text-warning"
                                      : "text-muted"
                                  }`}
                                ></i>
                              ))}
                            </div>
                            <h5 className="mb-1">{testimonial.name}</h5>
                            <p className="author-role">{testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4">Ready to Start Your Wellness Journey?</h2>
                <p className="lead mb-5">
                  Join thousands of people who have transformed their self-care
                  routine with SelfCare
                </p>
                <div className="cta-buttons">
                  <Button variant="light" size="lg" className="me-3">
                    Download Now
                  </Button>
                  <Button variant="outline-light" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer">
        <Container>
          <Row>
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

export default About;
