import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollFadeIn from "../../utils/useScrollFadeIn";

const testimonials = [
  {
    text: "Intellecto helped me learn faster and get the support I needed from my lecturers!",
    author: "Sarah, Computer Science Student",
  },
  {
    text: "The flexibility and resources available are unmatched. Highly recommended.",
    author: "James, Business Management Student",
  },
  {
    text: "Lecturers are very engaging and provide constant feedback. My grades improved a lot!",
    author: "Priya, Engineering Student",
  },
  {
    text: "I could access modules anytime, even on the go. It made studying so much easier.",
    author: "Michael, Marketing Student",
  },
  {
    text: "The certificates really helped me stand out when applying for internships.",
    author: "Lerato, Data Science Student",
  },
];

const TestimonialsSection = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0);
  const [current, setCurrent] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    if (resetTimer) {
      clearInterval(interval);
      setResetTimer(false);
    }

    return () => clearInterval(interval);
  }, [resetTimer]);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setResetTimer(true);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setResetTimer(true);
  };

  return (
    <section className="testimonials-section" ref={fadeIn.ref} style={fadeIn.style}>
      <h2>What Our Students Say</h2>
      <div className="testimonial-slider">
        <button className="arrow" onClick={prevTestimonial}>
          &#8249;
        </button>

        <div className="testimonial-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="testimonial-content"
            >
              <p>"{testimonials[current].text}"</p>
              <span>- {testimonials[current].author}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="arrow" onClick={nextTestimonial}>
          &#8250;
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => {
              setCurrent(index);
              setResetTimer(true);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
