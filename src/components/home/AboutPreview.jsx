import { ArrowRight } from "lucide-react";
import aboutImage from "../../assets/images/about/about-classroom.webp";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={aboutImage}
            alt="Students learning together in a classroom at Rosa Mystica School"
            className={styles.image}
          />

          {/* Established Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeYear}>2000</span>
            <span className={styles.badgeText}>
              A tradition of care
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>

          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            About Our School
          </p>

          <h2
            id="about-heading"
            className={styles.title}
          >
            Nurturing Young Minds Through Knowledge, Values and Faith
          </h2>

          <p className={styles.description}>
            Rosa Mystica School (RMS) is a Christian institution
            established by the Catholic Diocese of Asansol in 2000.
            As a missionary institution, we place strong emphasis on
            value-based education and the holistic upbringing of our
            students from a very young age.
          </p>

          <p className={styles.description}>
            Our Priests, Sisters, teachers and support staff work
            together to nurture human, moral and spiritual values.
            With a broad-based curriculum and a variety of
            co-curricular activities, students are encouraged to grow
            academically while learning to respect every religion,
            caste and creed.
          </p>

          <a
            href="/about"
            className={styles.button}
          >
            Learn More

            <ArrowRight
              size={18}
              aria-hidden="true"
              className={styles.buttonIcon}
            />
          </a>

        </div>
      </div>
    </section>
  );
}