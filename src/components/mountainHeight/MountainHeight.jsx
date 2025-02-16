import Mountains from "../../assets/mounCropFadee.png";
import { useEffect, useRef, useState } from "react";
import styles from "./mountainHeight.module.css";

const MountainHeight = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
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
    <article
      ref={sectionRef}
      className={`${styles.container} ${
        isVisible ? styles.animate : styles.reset
      }`}
    >
      <svg
        className={`${styles.line} ${
          isVisible ? styles.animate : styles.reset
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1441.32 467.46"
      >
        <path
          d="M501.52,397.81l103.43,68.95.42-.62-103.43-68.95-.42.62ZM604.95,466.76l248.08-188.12-.45-.6-248.08,188.12.45.6ZM853.03,278.64l228.59-77.95-.24-.71-228.59,77.95.24.71ZM1081.63,200.69l184.37-119.92-.41-.63-184.37,119.92.41.63ZM1265.25,80.77l29.98,9.74.23-.71-29.98-9.74-.23.71ZM853.29,279.05l.24-.71M502.27,397.06l-143.15-38.22-.19.72,143.15,38.22.19-.72ZM359.12,358.83L127.53,187.95l-.45.6,231.59,170.88.45-.6ZM1295.23,90.52L1440.63,1.33l-.39-.64-145.4,89.19.39.64ZM127.53,187.95L.86,146.73l-.23.71,126.66,41.22.23-.71Z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </svg>
      <img className={styles.img} src={Mountains} alt="Outline of Mountain" />
      <p>
        Tucked away in the Swiss Alps, Klöntalersee is a paradise for outdoor
        lovers. <br /> With its mirror-like waters, rugged peaks, and endless trails,
        this alpine lake is perfect for hiking, camping, and scenic drives.
      </p>
    </article>
  );
};

export default MountainHeight;
