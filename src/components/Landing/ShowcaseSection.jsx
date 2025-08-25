import useScrollFadeIn from '../../utils/useScrollFadeIn';
import lecturers from '../../assets/lecturers.jpg';
import students from '../../assets/students.jpg';

const ShowcaseSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="showcase-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>Life with Intellecto</h2>
    <div className="showcase-grid">
      <img src={students} alt="Students learning" />
      <img src={lecturers} alt="Lecturer teaching" />
    </div>
  </section>
);
};

export default ShowcaseSection;
