import './App.css';
import SafetyTipsSection from './components/SafetyTipsSection';
import AnimatedTestimonials from './components/AnimatedTestimonials';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Professional Driver',
    company: 'Metro Transportation',
    content:
      'These road safety tips have completely changed how I approach driving. I feel more confident and aware on the road. The animated presentation makes it easy to remember key points.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Driving Instructor',
    company: 'Safe Drivers Academy',
    content:
      'I recommend this resource to all my students. The practical tips and clear explanations help new drivers understand the importance of road safety. Outstanding work!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Safety Officer',
    company: 'City Traffic Department',
    content:
      'As someone working in traffic safety, I appreciate how well this app educates drivers. The visual animations make safety information stick with users much better than traditional methods.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Fleet Manager',
    company: 'Express Logistics',
    content:
      'We use this for our driver training program. Our accident rates have decreased by 30% since implementing these safety practices. Highly recommended for all drivers!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Parent & Driver',
    company: 'Community Safety Initiative',
    content:
      'This app helped both my teenage children and me become safer drivers. The tips are practical, the interface is beautiful, and we actually enjoy learning about road safety together!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="navbar">
          <h1 className="logo">🚗 TrafficSafe</h1>
          <ul className="nav-links">
            <li><a href="#tips">Tips</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <h2>Stay Safe on the Road</h2>
            <p>Learn essential traffic and road safety practices</p>
            <a href="#tips" className="cta-button">Explore Safety Tips</a>
          </div>
          <div className="hero-animation">
            <div className="animated-car">🚗</div>
          </div>
        </section>
      </header>

      <main id="tips">
        <SafetyTipsSection />
      </main>

      <section id="testimonials">
        <AnimatedTestimonials
          title="Hear from Road Safety Champions"
          subtitle="See what drivers and safety experts have to say about our road safety tips and resources."
          badgeText="Trusted by thousands of drivers"
          testimonials={TESTIMONIALS}
          autoRotateInterval={6000}
        />
      </section>

      <footer className="app-footer">
        <p>&copy; 2024 TrafficSafe. Drive safely, arrive happily.</p>
      </footer>
    </div>
  );
}

export default App;
