import useScrollFadeIn from '../../utils/useScrollFadeIn';

const FeaturesSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return (
    <section className="features-section" ref={fadeIn.ref} style={fadeIn.style}>
      <h2>What You Can Do</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Learn at Your Pace</h3>
          <p>Access your courses and modules anytime, anywhere.</p>
        </div>
        <div className="feature-card">
          <h3>Engage with Experts</h3>
          <p>Get guidance and feedback from qualified lecturers.</p>
        </div>
        <div className="feature-card">
          <h3>Track Your Progress</h3>
          <p>Stay up to date with deadlines and completion rates.</p>
        </div>
        <div className="feature-card">
          <h3>Earn Certificates</h3>
          <p>Showcase your achievements with official certificates.</p>
        </div>
        <div className="feature-card span-two-columns">
          <h3>Collaborate Seamlessly</h3>
          <p>Work together with peers and lecturers for group projects and discussions.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
