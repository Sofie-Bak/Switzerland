import { useEffect, useRef, useState } from "react";
import styles from "./IntroSection.module.css";
import mountainImg from "../../assets/mountain1.jpg";

const IntroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting); /* Update my state when it is on screen */
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.flex}>
          <div
            ref={sectionRef}
            className={`${styles.container} ${
              isVisible ? styles.animate : styles.reset
            }`}
          >
            <h2>Welcome to Klöntalersee: Switzerland's Hidden Alpine Gem</h2>
            <p>
              Nestled deep in the heart of the Swiss Alps, Klöntalersee is a
              breathtaking mountain lake that feels like a scene straight out of a
              postcard. Surrounded by towering peaks and lush green valleys, this
              glacial lake offers the perfect escape for nature lovers, adventure
              seekers, and anyone craving a peaceful retreat away from the crowds.
            </p>
          </div>
          <img
            className={`${styles.img} ${
              isVisible ? styles.animate : styles.reset
            }`}
            src={mountainImg}
            alt="Mountain side in Klöntalersee"
          />
      </section>
    </>
  );
};

export default IntroSection;
