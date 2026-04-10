import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './AnimatedTestimonials.css';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  title = 'Hear from Road Safety Champions',
  subtitle = 'See what drivers and safety experts have to say about our road safety tips and resources.',
  badgeText = 'Trusted by thousands of drivers',
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`testimonials-section ${className || ''}`}>
      <div className="testimonials-container">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="testimonials-grid"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="testimonials-left">
            <div className="testimonials-content">
              {badgeText && (
                <div className="testimonials-badge">
                  <Star className="badge-icon" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="testimonials-title">{title}</h2>

              <p className="testimonials-subtitle">{subtitle}</p>

              <div className="testimonials-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`indicator ${activeIndex === index ? 'active' : ''}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="testimonials-right">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card-wrapper"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="testimonial-card">
                  <div className="rating">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="star-icon" />
                      ))}
                  </div>

                  <div className="testimonial-quote">
                    <Quote className="quote-icon" />
                    <p className="quote-text">"{testimonial.content}"</p>
                  </div>

                  <div className="testimonial-separator" />

                  <div className="testimonial-author">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="avatar-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name);
                      }}
                    />
                    <div className="author-info">
                      <h3 className="author-name">{testimonial.name}</h3>
                      <p className="author-role">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="decorative-element decorative-bottom-left" />
            <div className="decorative-element decorative-top-right" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedTestimonials;
