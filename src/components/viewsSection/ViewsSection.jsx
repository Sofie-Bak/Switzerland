import Mountains from "../../assets/heroImg.jpg";
import MountainsR from "../../assets/mountaincrop.png";
import MountainsL from "../../assets/mountaincropL.png";
import styles from "./viewsSection.module.css";
import { useEffect, useRef, useState } from "react";



const ViewsSection = () => {
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
      <div className={styles.container}>
        <img
          className={`${styles.mounL} ${
            isVisible ? styles.animateMounL : styles.reset
          }`}
          src={MountainsL}
          alt="Picture of Mountains in Klöntalersee"
        />
        <img
          className={`${styles.mounR} ${
            isVisible ? styles.animateMounR : styles.reset
          }`}
          src={MountainsR}
          alt="Picture of Mountains in Klöntalersee"
        />
        <div className={styles.textCenter}>
          <div
            ref={sectionRef}
            className={`${styles.text} ${
              isVisible ? styles.animate : styles.reset
            }`}
          >
            <h2>never-ending views</h2>
            <p>visiting the klöntalersee mountains</p>
          </div>
        </div>
        <img
          className={styles.moun}
          src={Mountains}
          alt="Breathtaking view of Klöntalersee mountains"
        />
      </div>
    </>
  );
};

export default ViewsSection;
