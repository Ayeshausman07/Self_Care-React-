import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
  Form,
} from "react-bootstrap";
import {
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
  FaRegClock,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

const Blog = () => {
  // Blog data
  const blogs = [
    {
      id: 1,
      title: "Mindful Morning Rituals",
      excerpt:
        "Start your day with intention and peace using these simple practices",
      content:
        "Creating a mindful morning routine sets the tone for your entire day. Begin with 5 minutes of deep breathing before getting out of bed. Hydrate with warm lemon water to awaken your digestive system. Practice gratitude by writing down three things you're thankful for. Spend 10 minutes stretching or doing gentle yoga. Avoid checking your phone for at least the first hour of your day. These practices help reduce stress and increase productivity.",
      category: "Mindfulness",
      date: "May 15, 2023",
      readTime: "7 min read",
      author: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Digital Detox Strategies",
      excerpt: "Reclaim your mental space from technology overload",
      content:
        "A digital detox can significantly improve your mental health. Start with small steps: designate tech-free zones in your home (like the bedroom), set specific times to check emails/social media, and turn off non-essential notifications. Try a 24-hour detox once a month where you disconnect completely. Use this time for nature walks, reading physical books, or creative hobbies. Notice how your concentration improves and anxiety decreases when you're not constantly stimulated by screens.",
      category: "Digital Wellness",
      date: "June 2, 2023",
      readTime: "9 min read",
      author: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Sleep Optimization Guide",
      excerpt: "Science-backed methods to improve your sleep quality",
      content:
        "Quality sleep is foundational to self-care. Maintain a consistent sleep schedule, even on weekends. Create a bedtime ritual with activities like reading or light stretching. Keep your bedroom cool (60-67°F), dark, and quiet. Avoid caffeine after 2pm and heavy meals before bed. Try the 4-7-8 breathing technique: inhale for 4 seconds, hold for 7, exhale for 8. This triggers your relaxation response. If you can't sleep after 20 minutes, get up and do something relaxing until you feel sleepy.",
      category: "Sleep",
      date: "June 10, 2023",
      readTime: "11 min read",
      author: "Emma Rodriguez",
      image:
        "https://images.unsplash.com/photo-1495197359483-d092478c170a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "The Art of Saying No",
      excerpt: "Setting boundaries as an act of self-respect",
      content:
        "Learning to say no is essential for mental health. Start by recognizing that 'no' is a complete sentence. Practice with low-stakes situations first. Try phrases like 'I appreciate you thinking of me, but I can't commit to this' or 'That doesn't work for me right now.' Remember that every time you say yes to something that drains you, you're saying no to something that nourishes you. Healthy boundaries create space for what truly matters in your life.",
      category: "Mental Health",
      date: "June 18, 2023",
      readTime: "6 min read",
      author: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "Nutrition for Mental Clarity",
      excerpt: "Foods that boost cognitive function and focus",
      content:
        "What you eat directly impacts brain performance. Incorporate these brain-boosting foods: fatty fish (rich in omega-3s), blueberries (antioxidants), nuts and seeds (vitamin E), dark leafy greens (folate), eggs (choline), and dark chocolate (flavonoids). Stay hydrated - even mild dehydration can impair concentration. Eat regular, balanced meals to maintain steady blood sugar levels. Consider reducing processed foods and sugars which can cause energy crashes and brain fog.",
      category: "Nutrition",
      date: "June 25, 2023",
      readTime: "8 min read",
      author: "Priya Patel",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Gratitude Journaling Benefits",
      excerpt: "How daily gratitude practice rewires your brain",
      content:
        "Neuroscience shows gratitude journaling increases happiness by up to 25%. Each night, write down 3 specific things you're grateful for from that day. Be detailed - instead of 'my family,' write 'how my partner made me laugh at breakfast.' Studies show this practice helps the brain scan for positives rather than negatives. Over time, it creates lasting changes in prefrontal cortex activity, making you naturally more optimistic. Even on difficult days, finding small gratitudes builds resilience.",
      category: "Mental Health",
      date: "July 5, 2023",
      readTime: "5 min read",
      author: "Lisa Zhang",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      title: "Beginner's Yoga Journey",
      excerpt: "A 30-day challenge to build mind-body connection",
      content:
        "Yoga combines physical postures, breathing techniques, and meditation. Start with just 10-15 minutes daily. Week 1: Learn foundational poses (Mountain, Downward Dog, Child's Pose). Week 2: Add simple flows like Sun Salutations. Week 3: Introduce balance poses (Tree Pose). Week 4: Combine sequences. Focus on breath awareness rather than perfection. Benefits include reduced stress, improved flexibility, better posture, and increased body awareness. Remember to listen to your body and modify as needed.",
      category: "Fitness",
      date: "July 12, 2023",
      readTime: "10 min read",
      author: "David Kim",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      title: "Breathing for Stress Relief",
      excerpt: "Simple techniques to calm your nervous system",
      content:
        "Conscious breathing is a powerful tool for stress management. Try these techniques: 1) Box Breathing: Inhale 4 sec, hold 4 sec, exhale 4 sec, hold 4 sec. 2) Alternate Nostril Breathing: Close right nostril, inhale left; close left, exhale right; inhale right, close right, exhale left. 3) 4-7-8 Breathing: Inhale 4 sec, hold 7 sec, exhale 8 sec. Practice for just 2-3 minutes when stressed. These methods activate the parasympathetic nervous system, lowering heart rate and blood pressure.",
      category: "Mindfulness",
      date: "July 20, 2023",
      readTime: "6 min read",
      author: "Maria Garcia",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      title: "Creating a Self-Care Plan",
      excerpt: "Design a personalized routine that works for you",
      content:
        "An effective self-care plan addresses physical, emotional, social, and spiritual needs. Assess your current self-care in these areas (rate each 1-10). Identify your weakest areas. Create small, sustainable habits: maybe a 5-minute morning stretch, weekly friend calls, or monthly digital detox. Schedule these like important appointments. Track what works and adjust as needed. Remember self-care isn't selfish - it's how you maintain your ability to care for others and meet life's demands.",
      category: "Self-Care",
      date: "July 28, 2023",
      readTime: "12 min read",
      author: "Thomas Wright",
      image:
        "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on search term and selected category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const toggleLike = (postId, e) => {
    e.stopPropagation();
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleBookmark = (postId, e) => {
    e.stopPropagation();
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="selfcare-blog-page">
      {/* Hero Section */}
      <section className="selfcare-blog-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="selfcare-blog-title">Nourish Your Mind & Soul</h1>
              <p className="selfcare-blog-subtitle">
                Discover transformative self-care practices to enhance your
                wellbeing
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <Container className="selfcare-filter-container">
        <Row className="mb-4">
          <Col md={8} className="mb-3 mb-md-0">
            <div className="selfcare-search-container">
              <FaSearch className="selfcare-search-icon" />
              <Form.Control
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="selfcare-search-input"
              />
            </div>
          </Col>
          <Col md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="selfcare-category-filter"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Container>

      {/* Blog Grid */}
      <Container className="selfcare-blog-container">
        {filteredBlogs.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredBlogs.map((blog) => (
              <Col key={blog.id}>
                <Card
                  className="selfcare-blog-card h-100"
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="selfcare-card-img-container">
                    <Card.Img
                      variant="top"
                      src={blog.image}
                      className="selfcare-card-img"
                      alt={blog.title}
                    />
                  </div>
                  <Card.Body className="selfcare-card-body">
                    <Badge pill className="selfcare-card-category">
                      {blog.category}
                    </Badge>
                    <Card.Title className="selfcare-card-title">
                      {blog.title}
                    </Card.Title>
                    <Card.Text className="selfcare-card-excerpt">
                      {blog.excerpt}
                    </Card.Text>
                    <div className="selfcare-card-footer">
                      <small className="selfcare-card-meta">
                        <FaRegClock className="me-1" /> {blog.readTime}
                      </small>
                      <div className="selfcare-card-actions">
                        <Button
                          variant="link"
                          onClick={(e) => toggleLike(blog.id, e)}
                          className={`selfcare-card-btn ${
                            likedPosts.includes(blog.id) ? "active" : ""
                          }`}
                        >
                          {likedPosts.includes(blog.id) ? (
                            <FaHeart />
                          ) : (
                            <FaRegHeart />
                          )}
                        </Button>
                        <Button
                          variant="link"
                          onClick={(e) => toggleBookmark(blog.id, e)}
                          className={`selfcare-card-btn ${
                            bookmarkedPosts.includes(blog.id) ? "active" : ""
                          }`}
                        >
                          {bookmarkedPosts.includes(blog.id) ? (
                            <FaBookmark />
                          ) : (
                            <FaRegBookmark />
                          )}
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="selfcare-no-results text-center py-5">
            <h4>No articles found</h4>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Container>

      {/* Blog Detail Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="selfcare-blog-modal"
      >
        {selectedBlog && (
          <>
            <Modal.Header closeButton className="selfcare-modal-header">
              <Modal.Title className="selfcare-modal-title">
                {selectedBlog.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="selfcare-modal-body">
              <div className="selfcare-modal-img-container">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="selfcare-modal-img"
                />
              </div>
              <div className="selfcare-modal-meta">
                <Badge pill className="selfcare-modal-category">
                  {selectedBlog.category}
                </Badge>
                <div className="selfcare-modal-author">
                  <FaUser className="me-1" /> {selectedBlog.author}
                </div>
                <div className="selfcare-modal-date">
                  <FaRegClock className="me-1" /> {selectedBlog.readTime} •{" "}
                  {selectedBlog.date}
                </div>
              </div>
              <div className="selfcare-modal-content">
                {selectedBlog.content.split("\n").map((paragraph, i) => (
                  <p key={i} className="selfcare-modal-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Modal.Body>
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

export default Blog;
