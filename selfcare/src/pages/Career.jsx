import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Accordion,
} from "react-bootstrap";
import {
  FaLeaf,
  FaHeartbeat,
  FaBrain,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaUserShield,
  FaArrowDown,
  FaCheck,
  FaRegLightbulb,
  FaUsers,
  FaChartLine,
  FaSeedling,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../App.css";

const Career = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Departments
  const departments = [
    { id: "All", name: "All Departments", icon: <FaUsers /> },
    { id: "Mindfulness", name: "Mindfulness", icon: <FaLeaf /> },
    { id: "Wellness", name: "Wellness", icon: <FaHeartbeat /> },
    { id: "Education", name: "Education", icon: <FaBookOpen /> },
    { id: "Research", name: "Research", icon: <FaRegLightbulb /> },
    { id: "Community", name: "Community", icon: <FaHandsHelping /> },
  ];

  // Career positions data
  const positions = [
    {
      id: 1,
      title: "Mindfulness Coach",
      department: "Mindfulness",
      icon: <FaLeaf />,
      description:
        "Guide clients through meditation and mindfulness techniques to reduce stress and improve mental clarity.",
      highlights: [
        "Develop personalized mindfulness programs",
        "Conduct one-on-one and group sessions",
        "Create digital content (guided meditations, articles)",
        "Stay updated with latest mindfulness research",
      ],
      impact:
        "You'll help 100+ clients annually achieve greater peace and focus in their daily lives.",
      type: "Full-time | Remote",
      salary: "$55,000 - $75,000",
      posted: "New",
      featured: true,
    },
    {
      id: 2,
      title: "Holistic Wellness Consultant",
      department: "Wellness",
      icon: <FaHeartbeat />,
      description:
        "Design comprehensive wellness plans that address physical, mental, and emotional health.",
      highlights: [
        "Assess client wellness needs",
        "Create customized wellness roadmaps",
        "Track progress with innovative tools",
        "Collaborate with healthcare professionals",
      ],
      impact:
        "Your guidance will transform lives by creating sustainable healthy habits.",
      type: "Full-time | Hybrid",
      salary: "$60,000 - $85,000",
      posted: "2 days ago",
    },
    {
      id: 3,
      title: "Mental Health Educator",
      department: "Education",
      icon: <FaBookOpen />,
      description:
        "Develop curriculum and deliver programs about mental health awareness and self-care techniques.",
      highlights: [
        "Create engaging educational content",
        "Conduct workshops and seminars",
        "Develop digital learning materials",
        "Partner with schools and organizations",
      ],
      impact:
        "Each year, you'll educate 500+ individuals on crucial mental health topics.",
      type: "Full-time | On-site",
      salary: "$58,000 - $80,000",
      posted: "1 week ago",
    },
    {
      id: 4,
      title: "Self-Care Research Specialist",
      department: "Research",
      icon: <FaRegLightbulb />,
      description:
        "Investigate and validate self-care techniques through rigorous scientific methods.",
      highlights: [
        "Design and conduct research studies",
        "Analyze effectiveness of self-care methods",
        "Publish findings in accessible formats",
        "Collaborate with academic institutions",
      ],
      impact:
        "Your research will shape the future of evidence-based self-care practices.",
      type: "Full-time | Remote",
      salary: "$70,000 - $95,000",
      posted: "New",
      featured: true,
    },
    {
      id: 5,
      title: "Community Wellness Advocate",
      department: "Community",
      icon: <FaHandsHelping />,
      description:
        "Promote self-care and mental health awareness through community engagement.",
      highlights: [
        "Organize community wellness events",
        "Build partnerships with local organizations",
        "Create accessible mental health resources",
        "Advocate for self-care in workplaces",
      ],
      impact: "You'll bring self-care resources to underserved communities.",
      type: "Full-time | Field Work",
      salary: "$52,000 - $70,000",
      posted: "3 days ago",
    },
    {
      id: 6,
      title: "Corporate Wellness Director",
      department: "Wellness",
      icon: <FaChartLine />,
      description:
        "Develop and implement wellness programs for corporate clients.",
      highlights: [
        "Assess organizational wellness needs",
        "Design workplace wellness initiatives",
        "Train HR teams on mental health support",
        "Measure program effectiveness",
      ],
      impact:
        "You'll transform workplace cultures to prioritize employee wellbeing.",
      type: "Full-time | Hybrid",
      salary: "$85,000 - $110,000",
      posted: "1 week ago",
    },
    {
      id: 7,
      title: "Children's Mindfulness Instructor",
      department: "Education",
      icon: <FaSeedling />,
      description:
        "Teach mindfulness techniques tailored for children and adolescents.",
      highlights: [
        "Develop age-appropriate mindfulness exercises",
        "Work with schools and youth organizations",
        "Create engaging materials for young learners",
        "Train educators in mindfulness techniques",
      ],
      impact: "You'll equip the next generation with lifelong coping skills.",
      type: "Part-time | On-site",
      salary: "$40 - $60/hour",
      posted: "New",
    },
    {
      id: 8,
      title: "Equity in Wellness Specialist",
      department: "Community",
      icon: <FaBalanceScale />,
      description:
        "Ensure our programs are accessible and relevant to diverse populations.",
      highlights: [
        "Assess program inclusivity",
        "Develop culturally-sensitive materials",
        "Train staff on diversity and inclusion",
        "Build partnerships with diverse communities",
      ],
      impact:
        "You'll make self-care accessible to all, regardless of background.",
      type: "Full-time | Remote",
      salary: "$65,000 - $85,000",
      posted: "5 days ago",
    },
  ];

  const filteredPositions =
    activeDepartment === "All"
      ? positions
      : positions.filter((pos) => pos.department === activeDepartment);

  const featuredPositions = positions.filter((pos) => pos.featured);
  const regularPositions = filteredPositions.filter((pos) => !pos.featured);

  const openPositionModal = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  // Employee testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya K.",
      role: "Mindfulness Coach",
      quote:
        "Teaching mindfulness here has been transformative - not just for our clients, but for my own practice too. The support for staff wellbeing is unparalleled.",
      fullStory:
        "When I joined SelfCare two years ago, I thought I was just changing jobs. What actually happened was I found a community that values personal growth as much as professional development. The monthly mindfulness retreats and continuous learning opportunities have deepened my practice in ways I couldn't imagine. Now when I guide clients, I speak from an even more authentic place.",
    },
    {
      id: 2,
      name: "Marcus T.",
      role: "Research Lead",
      quote:
        "Our research directly impacts real people's lives. Seeing our studies turn into practical self-care tools is incredibly rewarding.",
      fullStory:
        "After years in academic research, I wanted to see my work make immediate differences in people's daily lives. At SelfCare, our studies on breathing techniques were implemented in the app within months, helping thousands manage anxiety. The collaborative environment here means ideas flow freely between researchers, coaches, and educators - breaking down the usual silos.",
    },
    {
      id: 3,
      name: "Aisha B.",
      role: "Community Advocate",
      quote:
        "Bringing self-care to underserved communities fills me with purpose every single day.",
      fullStory:
        "Growing up, mental health wasn't something we talked about in my community. Now I get to change that narrative. Last month, we trained 30 community leaders in basic self-care techniques who will each reach hundreds more. The ripple effect is incredible. What I love most is how the organization backs up its inclusive values with real action and resources.",
    },
  ];

  return (
    <div className="selfcare-careers-page">
      {/* Hero Section */}
      <section className="selfcare-careers-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="selfcare-careers-title">
                  Build a Career That Cares
                </h1>
                <p className="selfcare-careers-subtitle">
                  Join a team that practices what we preach - meaningful work
                  with work-life harmony at its core
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="selfcare-careers-cta mt-3"
                    onClick={() => {
                      document
                        .getElementById("positions")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Explore Opportunities <FaArrowDown className="ms-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
        <section className="selfcare-featured-positions">
          <Container>
            <Row className="justify-content-center mb-4">
              <Col lg={8} className="text-center">
                <motion.h2
                  className="selfcare-section-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Featured Opportunities
                </motion.h2>
                <motion.p
                  className="selfcare-section-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  These roles represent our current priority openings
                </motion.p>
              </Col>
            </Row>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {featuredPositions.map((position) => (
                  <Col md={6} key={position.id}>
                    <motion.div variants={itemVariants}>
                      <Card className="selfcare-featured-card h-100">
                        <Card.Body>
                          <div className="selfcare-featured-badge">
                            Featured
                          </div>
                          <div className="selfcare-position-icon">
                            {position.icon}
                          </div>
                          <h3 className="selfcare-position-title">
                            {position.title}
                          </h3>
                          <div className="selfcare-position-meta">
                            <span className="selfcare-position-department">
                              {position.department}
                            </span>
                            <span className="selfcare-position-type">
                              {position.type}
                            </span>
                            <span className="selfcare-position-posted">
                              {position.posted}
                            </span>
                          </div>
                          <p className="selfcare-position-description">
                            {position.description}
                          </p>
                          <div className="selfcare-position-impact">
                            <FaRegLightbulb className="me-2" />
                            <strong>Your Impact:</strong> {position.impact}
                          </div>
                          <Button
                            variant="primary"
                            className="selfcare-position-btn mt-3"
                            onClick={() => openPositionModal(position)}
                          >
                            Learn More
                          </Button>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Department Filter */}
      <section className="selfcare-department-filter" id="positions">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={10} className="text-center">
              <motion.h2
                className="selfcare-section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Browse By Department
              </motion.h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="selfcare-department-tabs">
                {departments.map((dept) => (
                  <Button
                    key={dept.id}
                    variant="link"
                    className={`selfcare-department-tab ${
                      activeDepartment === dept.id ? "active" : ""
                    }`}
                    onClick={() => setActiveDepartment(dept.id)}
                  >
                    <div className="selfcare-department-icon">{dept.icon}</div>
                    {dept.name}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* All Positions */}
      <section className="selfcare-careers-positions">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              {regularPositions.map((position) => (
                <Col md={6} lg={4} key={position.id}>
                  <motion.div variants={itemVariants}>
                    <Card className="selfcare-position-card h-100">
                      <Card.Body>
                        <div className="selfcare-position-icon">
                          {position.icon}
                        </div>
                        <h3 className="selfcare-position-title">
                          {position.title}
                        </h3>
                        <div className="selfcare-position-meta">
                          <span className="selfcare-position-department">
                            {position.department}
                          </span>
                          <span className="selfcare-position-type">
                            {position.type}
                          </span>
                          <span className="selfcare-position-posted">
                            {position.posted}
                          </span>
                        </div>
                        <p className="selfcare-position-description">
                          {position.description}
                        </p>
                        <div className="selfcare-position-footer">
                          <Button
                            variant="outline-primary"
                            className="selfcare-position-btn"
                            onClick={() => openPositionModal(position)}
                          >
                            View Details
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Employee Testimonials */}
      <section className="selfcare-testimonials">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2
                className="selfcare-section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Life at SelfCare
              </motion.h2>
              <motion.p
                className="selfcare-section-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hear from our team about what makes working here special
              </motion.p>
            </Col>
          </Row>
          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col md={4} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="selfcare-testimonial-card h-100">
                    <Card.Body>
                      <div className="selfcare-testimonial-content">
                        <blockquote className="selfcare-testimonial-quote">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="selfcare-testimonial-author">
                          <h4 className="selfcare-testimonial-name">
                            {testimonial.name}
                          </h4>
                          <p className="selfcare-testimonial-role">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <Accordion
                        activeKey={
                          expandedTestimonial === testimonial.id
                            ? testimonial.id
                            : null
                        }
                      >
                        <Accordion.Collapse eventKey={testimonial.id}>
                          <div className="selfcare-testimonial-full">
                            <p>{testimonial.fullStory}</p>
                          </div>
                        </Accordion.Collapse>
                        <div className="selfcare-testimonial-toggle">
                          <Button
                            variant="link"
                            onClick={() =>
                              setExpandedTestimonial(
                                expandedTestimonial === testimonial.id
                                  ? null
                                  : testimonial.id
                              )
                            }
                          >
                            {expandedTestimonial === testimonial.id
                              ? "Read Less"
                              : "Read Full Story"}
                          </Button>
                        </div>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Position Details Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="selfcare-position-modal"
      >
        {selectedPosition && (
          <>
            <Modal.Header closeButton className="selfcare-modal-header">
              <div>
                <Modal.Title className="selfcare-modal-title">
                  {selectedPosition.title}
                </Modal.Title>
                <div className="selfcare-modal-subtitle">
                  <span className="selfcare-modal-department">
                    {selectedPosition.department}
                  </span>
                  <span>{selectedPosition.type}</span>
                  {selectedPosition.salary && (
                    <span>{selectedPosition.salary}</span>
                  )}
                </div>
              </div>
            </Modal.Header>
            <Modal.Body className="selfcare-modal-body">
              <div className="selfcare-modal-section">
                <h4 className="selfcare-modal-section-title">
                  Position Overview
                </h4>
                <p>{selectedPosition.description}</p>
              </div>

              <div className="selfcare-modal-section">
                <h4 className="selfcare-modal-section-title">What You'll Do</h4>
                <ul className="selfcare-modal-list">
                  {selectedPosition.highlights.map((item, index) => (
                    <li key={index}>
                      <FaCheck className="me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="selfcare-modal-section">
                <h4 className="selfcare-modal-section-title">
                  Your Potential Impact
                </h4>
                <div className="selfcare-impact-statement">
                  <FaRegLightbulb className="selfcare-impact-icon" />
                  <p>{selectedPosition.impact}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="selfcare-modal-footer">
              <p className="selfcare-modal-footer-text">
                Interested in this role? We'd love to hear from you when we
                begin our next hiring cycle.
              </p>
            </Modal.Footer>
          </>
        )}
      </Modal>

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

export default Career;
