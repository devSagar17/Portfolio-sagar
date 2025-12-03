import { useState } from 'react'
import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="portfolio">
      {/* Navbar */}
      <Navbar expand="lg" className="fixed-top" aria-label="Main Navigation">
        <Container>
          <Navbar.Brand href="#home" aria-label="Sagar Dhapate home">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="fw-bold">Sagar Dhapate</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-3">
              <Nav.Link href="#about" onClick={() => setActiveSection('about')}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={() => setActiveSection('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => setActiveSection('projects')}>Projects</Nav.Link>
              <Nav.Link href="#services" onClick={() => setActiveSection('services')}>Services</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setActiveSection('contact')}>Contact</Nav.Link>
              <Nav.Item className="ms-lg-3">
                <Button variant="primary" size="sm" href="#" aria-label="Download resume">
                  <i className="bi bi-download me-1"></i> Resume
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <header id="home" className="section hero" style={{ minHeight: '82vh', display: 'grid', placeItems: 'center', paddingTop: '84px' }}>
        <Container className="text-center">
          <p style={{ letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '700', fontSize: '.78rem', marginBottom: '.6rem' }}>Hello, I'm</p>
          <h1 style={{ fontSize: '2.6rem', marginBottom: '.4rem' }}>Sagar <span style={{ background: 'linear-gradient(90deg,#d6cfc8,#f0ebe8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Dhapate</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '760px', margin: '0 auto 1.25rem' }}>Python & React Developer from Pune, India — crafting performant, accessible, and elegant web experiences.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="outline-primary" href="#projects">View My Work</Button>
            <Button variant="outline-primary" href="#contact">Let's Collaborate</Button>
          </div>
        </Container>
      </header>

      <main>
        {/* About */}
        <section id="about" className="section">
          <Container>
            <Row className="g-4 align-items-center">
              <Col lg={6}>
                <Card className="p-4">
                  <h2>About</h2>
                  <p className="text-muted mb-3">I build scalable web apps with a focus on performance, accessibility, and clean UI. My toolkit includes Python, React, PHP, and MySQL. I transform complex problems into simple solutions.</p>
                  <ul className="mb-0 text-muted">
                    <li>Experienced in full-stack apps and APIs</li>
                    <li>Design-driven with attention to accessibility</li>
                    <li>Mobile-first and performance focused</li>
                  </ul>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="p-4">
                  <h3>Highlights</h3>
                  <Row className="g-3 mt-2">
                    <Col md={6}>
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-check2-circle fs-4" aria-hidden="true"></i>
                        <div>
                          <strong>Fast APIs</strong>
                          <div className="meta text-muted">FastAPI · Flask</div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-phone fs-4" aria-hidden="true"></i>
                        <div>
                          <strong>Responsive</strong>
                          <div className="meta text-muted">Mobile-first & accessible</div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-gear fs-4" aria-hidden="true"></i>
                        <div>
                          <strong>Optimized</strong>
                          <div className="meta text-muted">Performance & SEO</div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-people fs-4" aria-hidden="true"></i>
                        <div>
                          <strong>Collaborative</strong>
                          <div className="meta text-muted">Agile & clean code</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <Container>
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <p className="kicker" style={{ color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '800', fontSize: '.75rem', margin: '0' }}>Capabilities</p>
                <h2 style={{ marginTop: '.4rem' }}>Skills</h2>
              </div>
              <div className="text-muted">Tools & frameworks I use</div>
            </div>
            <Row className="g-3">
              <Col xs={6} md={3}>
                <Card className="p-3 text-center">
                  <i className="bi bi-code-slash fs-2" aria-hidden="true"></i>
                  <h5 className="mt-2 mb-0">Python</h5>
                  <div className="meta text-muted">FastAPI · Scripts</div>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card className="p-3 text-center">
                  <i className="bi bi-braces fs-2" aria-hidden="true"></i>
                  <h5 className="mt-2 mb-0">React</h5>
                  <div className="meta text-muted">Hooks · SPA</div>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card className="p-3 text-center">
                  <i className="bi bi-server fs-2" aria-hidden="true"></i>
                  <h5 className="mt-2 mb-0">PHP</h5>
                  <div className="meta text-muted">Laravel · Core</div>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card className="p-3 text-center">
                  <i className="bi bi-database fs-2" aria-hidden="true"></i>
                  <h5 className="mt-2 mb-0">MySQL</h5>
                  <div className="meta text-muted">Schema · Query</div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Projects Flip Carousel */}
        <section id="projects" className="section">
          <Container>
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <p className="kicker" style={{ color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '800', fontSize: '.75rem', margin: '0' }}>Selected Work</p>
                <h2 style={{ marginTop: '.4rem' }}>Projects</h2>
              </div>
              <div className="text-muted">Browse my recent work</div>
            </div>
            
            <div className="flip-carousel-wrapper">
              <div className="flip-carousel">
                <div className="flip-card">
                  <div className="project-meta d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-light text-dark">Fullstack</span>
                    <span className="badge bg-light text-dark">Python</span>
                  </div>
                  <h3 className="project-title">E-commerce Platform</h3>
                  <p className="project-desc">A full-featured online store with payment integration, inventory management, and admin dashboard.</p>
                  <div className="project-btns d-flex gap-2">
                    <Button variant="outline-primary" size="sm">Live Demo</Button>
                    <Button variant="outline-primary" size="sm">Source Code</Button>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="project-meta d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-light text-dark">Frontend</span>
                    <span className="badge bg-light text-dark">React</span>
                  </div>
                  <h3 className="project-title">Task Management App</h3>
                  <p className="project-desc">A productivity application with drag-and-drop interface, real-time collaboration, and analytics.</p>
                  <div className="project-btns d-flex gap-2">
                    <Button variant="outline-primary" size="sm">Live Demo</Button>
                    <Button variant="outline-primary" size="sm">Source Code</Button>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="project-meta d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-light text-dark">Backend</span>
                    <span className="badge bg-light text-dark">FastAPI</span>
                  </div>
                  <h3 className="project-title">API Gateway</h3>
                  <p className="project-desc">Scalable API gateway with rate limiting, authentication, and analytics dashboard.</p>
                  <div className="project-btns d-flex gap-2">
                    <Button variant="outline-primary" size="sm">Live Demo</Button>
                    <Button variant="outline-primary" size="sm">Source Code</Button>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="project-meta d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-light text-dark">Fullstack</span>
                    <span className="badge bg-light text-dark">React</span>
                  </div>
                  <h3 className="project-title">Portfolio Website</h3>
                  <p className="project-desc">Modern portfolio website with smooth animations, responsive design, and CMS integration.</p>
                  <div className="project-btns d-flex gap-2">
                    <Button variant="outline-primary" size="sm">Live Demo</Button>
                    <Button variant="outline-primary" size="sm">Source Code</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <Container>
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <p className="kicker" style={{ color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '800', fontSize: '.75rem', margin: '0' }}>Offerings</p>
                <h2 style={{ marginTop: '.4rem' }}>Services</h2>
              </div>
              <div className="text-muted">What I can help you with</div>
            </div>
            
            <Row className="g-4">
              <Col md={6} lg={4}>
                <Card className="h-100">
                  <Card.Body>
                    <i className="bi bi-code-slash fs-1 mb-3"></i>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>Custom websites and web applications built with modern technologies for optimal performance and user experience.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={4}>
                <Card className="h-100">
                  <Card.Body>
                    <i className="bi bi-phone fs-1 mb-3"></i>
                    <Card.Title>Responsive Design</Card.Title>
                    <Card.Text>Mobile-first designs that look and function perfectly on all devices and screen sizes.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={4}>
                <Card className="h-100">
                  <Card.Body>
                    <i className="bi bi-speedometer2 fs-1 mb-3"></i>
                    <Card.Title>Performance Optimization</Card.Title>
                    <Card.Text>Improving website speed, efficiency, and Core Web Vitals for better user engagement.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center mb-5">
                  <p className="kicker" style={{ color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '800', fontSize: '.75rem', margin: '0' }}>Get In Touch</p>
                  <h2 style={{ marginTop: '.4rem' }}>Contact</h2>
                  <p className="text-muted mt-3">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
                </div>
                
                <Card className="p-4">
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="your.email@example.com" />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="subject">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="How can I help?" />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="message">
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" rows={5} placeholder="Your message..." />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="text-center mt-4">
                        <Button variant="primary" type="submit">Send Message</Button>
                      </Col>
                    </Row>
                  </Form>
                </Card>
                
                <Row className="g-4 mt-4 text-center">
                  <Col md={4}>
                    <i className="bi bi-envelope fs-4 mb-2"></i>
                    <h5>Email</h5>
                    <p className="text-muted">sagardhapate14@gmail.com</p>
                  </Col>
                  <Col md={4}>
                    <i className="bi bi-telephone fs-4 mb-2"></i>
                    <h5>Phone</h5>
                    <p className="text-muted">+91 8956479800</p>
                  </Col>
                  <Col md={4}>
                    <i className="bi bi-geo-alt fs-4 mb-2"></i>
                    <h5>Location</h5>
                    <p className="text-muted">Pune, India</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Sagar Dhapate. All rights reserved.</p>
        </Container>
      </footer>

      {/* Scroll to top */}
      <button id="toTop" className="btn">
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  )
}

export default App