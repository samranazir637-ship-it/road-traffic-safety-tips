import { useEffect, useRef, useState } from 'react';
import './SafetyTipsSection.css';

interface SafetyTip {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const SAFETY_TIPS: SafetyTip[] = [
  {
    id: 1,
    title: 'Wear Your Seatbelt',
    description: 'Always wear a seatbelt while driving. It reduces the risk of injury by up to 50%.',
    icon: '🔒',
  },
  {
    id: 2,
    title: 'Follow Speed Limits',
    description: 'Speed limits are set based on road conditions. Always obey them for your safety.',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Avoid Distractions',
    description: 'Keep your eyes on the road. Don\'t use your phone while driving.',
    icon: '📱',
  },
  {
    id: 4,
    title: 'Check Your Mirrors',
    description: 'Regularly check your mirrors and blind spots before changing lanes.',
    icon: '👀',
  },
  {
    id: 5,
    title: 'Maintain Your Vehicle',
    description: 'Regular maintenance ensures your vehicle is safe and roadworthy.',
    icon: '🔧',
  },
  {
    id: 6,
    title: 'Drive Defensively',
    description: 'Anticipate other drivers\' actions and always be prepared to avoid danger.',
    icon: '🛡️',
  },
  {
    id: 7,
    title: 'Don\'t Drive When Tired',
    description: 'Fatigue impairs your driving ability. Get adequate rest before long drives.',
    icon: '😴',
  },
  {
    id: 8,
    title: 'Use Proper Signals',
    description: 'Always signal before turning or changing lanes to communicate with other drivers.',
    icon: '👉',
  },
];

const SafetyTipsSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards]);

  return (
    <section className="safety-tips-section">
      <div className="section-header">
        <h2>🛣️ Road Safety Tips</h2>
        <p>Learn essential safety practices to stay safe on the road</p>
      </div>

      <div className="tips-grid">
        {SAFETY_TIPS.map((tip, index) => (
          <div
            key={tip.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`safety-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            style={{
              animationDelay: `${visibleCards.includes(index) ? index * 0.1 : 0}s`,
            }}
          >
            <div className="icon-container">
              <span className="icon">{tip.icon}</span>
            </div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
            <div className="card-footer">
              <span className="tip-number">Tip {tip.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyTipsSection;
