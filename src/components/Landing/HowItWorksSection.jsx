import useScrollFadeIn from '../../utils/useScrollFadeIn';

const HowItWorksSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="how-it-works-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>How It Works</h2>
    <ol>
      <li>Sign up and create your profile</li>
      <li>Get access to your assigned courses</li>
      <li>Learn, interact, and complete assignments</li>
      <li>Earn certificates for your completed modules</li>
    </ol>
  </section>
);
};

export default HowItWorksSection;
