import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import styles from "./HeroRaceBay.module.css";

/** Homepage hero. Phones get the red Corvette still (no video download); 768px and up get the shop video with a pause button. */
export default function HeroRaceBay() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.slogan}>Go All Out.</p>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.line}>Window Tinting,</span>
              <span className={styles.line}>PPF &amp; Wraps</span>
              <span className={styles.cityLine}>in Gonzales &amp; Baton Rouge, LA</span>
            </h1>
            <p className={styles.copy}>
              Family owned. Window tint for cars, homes, businesses and boats, plus paint protection film and ceramic coating.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={`${styles.action} ${styles.quote}`}>
                Get a Free Quote <span className={styles.arrow} aria-hidden="true" />
              </Link>
              <a href="tel:2252519184" className={`${styles.action} ${styles.outline} ${styles.callOnPhone}`}>
                Call (225) 251-9184
              </a>
              <Link href="/gallery" className={`${styles.action} ${styles.outline}`}>View Our Work</Link>
            </div>
          </div>
          <div className={styles.photo}>
            <BackgroundVideo
              fill
              src="/hero.mp4"
              poster="/images/hero-poster.jpg"
              className="object-cover"
              buttonClassName="bottom-4 right-4"
              mobileStill={{
                src: "/images/auto-corvette-red-exterior.jpg",
                alt: "Red Corvette with tinted windows parked outside the All Out shop beside an All Out van",
                position: "50% 78%",
              }}
            />
          </div>
        </div>
      </section>
      <div className={styles.strip} role="group" aria-label="Shop locations">
        <p className={styles.shop}><strong>Gonzales</strong><span>43469 Cannon Road</span></p>
        <p className={styles.shop}><strong>Baton Rouge</strong><span>7987 Pecue Lane, Suite 7G</span></p>
      </div>
    </>
  );
}
