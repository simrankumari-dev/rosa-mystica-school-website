import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import { heroSlides } from "../../data/heroSlides";
import styles from "./Hero.module.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      {/* Background Slides */}
      <div
        className={styles.slides}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        aria-hidden="true"
      >
        {heroSlides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={slide.src}
              alt=""
              className={styles.slideImage}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            Welcome to Rosa Mystica School
          </p>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className={styles.title}
          >
            Inspiring Young Minds, Shaping Bright Futures
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Where learning meets joy, and every child discovers
            their potential.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>

            <a
              href="#about"
              className={styles.primaryButton}
            >
              Explore Our School

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

            <a
              href="#admissions"
              className={styles.secondaryButton}
            >
              Admissions
            </a>

          </div>
        </div>

        {/* Bottom Controls */}
        <div className={styles.bottomControls}>

          {/* Slider Dots */}
          <div
            className={styles.dots}
            role="tablist"
            aria-label="Hero slides"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={current === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`${styles.dot} ${
                  current === index
                    ? styles.activeDot
                    : ""
                }`}
              />
            ))}
          </div>

          {/* Scroll Cue */}
          <a
            href="#about"
            className={styles.scrollCue}
            aria-label="Scroll to About section"
          >
            <ChevronDown
              size={18}
              aria-hidden="true"
            />

            <span>Scroll</span>
          </a>

        </div>
      </div>
    </section>
  );
}