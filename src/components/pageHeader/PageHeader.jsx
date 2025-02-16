import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <header className={styles.main}>
        <div className={styles.content}>
          <article className={styles.text}>
            <p className={styles.preTitle}>switzerland</p>
            <h2 className={styles.title}>behind the mountains</h2>
            <p className={styles.description}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className={styles.button}>know more</button>
          </article>

          <figure className={styles.image}>
          </figure>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
