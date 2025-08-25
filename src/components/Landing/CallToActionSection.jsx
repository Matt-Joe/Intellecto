import useScrollFadeIn from '../../utils/useScrollFadeIn';

const CallToActionSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="cta-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>Join Thousands of Learners</h2>
    <p>Start your journey with Intellecto today and unlock your potential.</p>
    <button onClick={() => window.location.href='/auth'}>
      Start Learning
    </button>
  </section>
);
};

export default CallToActionSection;
