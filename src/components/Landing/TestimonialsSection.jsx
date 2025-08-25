import useScrollFadeIn from '../../utils/useScrollFadeIn';

const TestimonialsSection = () => {
  const fadeIn = useScrollFadeIn('up', 1, 0);

  return(
  <section className="testimonials-section" ref={fadeIn.ref} style={fadeIn.style}>
    <h2>What Our Students Say</h2>
    <div className="testimonial-card">
      <p>"Intellecto helped me learn faster and get the support I needed from my lecturers!"</p>
      <span>- Sarah, Computer Science Student</span>
    </div>
    <div className="testimonial-card">
      <p>"The flexibility and resources available are unmatched. Highly recommended."</p>
      <span>- James, Business Management Student</span>
    </div>
  </section>
);
};

export default TestimonialsSection;
