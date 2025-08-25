import useScrollFadeIn from '../../utils/useScrollFadeIn';

const ShowcaseSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="showcase-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>Life at Intellecto</h2>
    <div className="showcase-grid">
      <img src="/images/students.jpg" alt="Students learning" />
      <img src="/images/lecturer.jpg" alt="Lecturer teaching" />
      <img src="/images/certificate.jpg" alt="Student receiving certificate" />
    </div>
  </section>
);
};

export default ShowcaseSection;
