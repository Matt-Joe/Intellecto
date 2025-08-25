import useScrollFadeIn from '../../utils/useScrollFadeIn';

const AboutSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="about-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>Intellecto</h2>
    <p>
      Intellecto is your all-in-one platform for interactive learning. 
      Connect with expert lecturers, explore a variety of modules, and 
      track your progress toward achieving your educational goals — 
      anytime, anywhere.
    </p>
  </section>
  );
};

export default AboutSection;
