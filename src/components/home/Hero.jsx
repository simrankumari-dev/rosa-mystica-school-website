import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Reveal from "../common/Reveal";
import ArchMotif from "../common/ArchMotif";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-blob hero-blob-left" />
      <div className="hero-blob hero-blob-right" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={13} />
            ESTABLISHED 2000 · DIOCESE OF ASANSOL
          </div>

          <h1 className="hero-title">
            Illuminating Minds,
            <br />
            <span>Nurturing Souls.</span>
          </h1>

          <p className="hero-description">
            A Catholic, co-educational institution in Jamuria
            where faith, values and academics grow together —
            building confident, compassionate futures for every
            child.
          </p>

          <div className="hero-actions">
            <a
              href="#about"
              className="hero-primary-button"
            >
              Discover Our Story
              <ArrowRight size={16} />
            </a>

            <a
              href="/contact"
              className="hero-secondary-button"
            >
              Plan a Visit
            </a>
          </div>
        </div>

        <Reveal className="hero-card-wrapper">
          <div className="hero-card">
            <div className="hero-card-pattern" />

            <div className="hero-card-content">
              <ArchMotif size={84} />

              <h2 className="hero-card-title">
                Rosa Mystica School
              </h2>

              <p className="hero-card-location">
                Bottola By Pass Road, Jamuria, West Bengal
              </p>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-number">25+</div>
                  <div className="hero-stat-label">Years</div>
                </div>

                <div>
                  <div className="hero-stat-number">1000+</div>
                  <div className="hero-stat-label">
                    Students
                  </div>
                </div>

                <div>
                  <div className="hero-stat-number">50+</div>
                  <div className="hero-stat-label">
                    Faculty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <svg
        viewBox="0 0 1440 60"
        className="hero-wave"
        aria-hidden="true"
      >
        <path
          d="M0 60 L0 24 Q720 60 1440 24 L1440 60 Z"
          fill="#FFFFFF"
        />
      </svg>
    </section>
  );
}