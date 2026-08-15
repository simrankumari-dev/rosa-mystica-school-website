import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

import CONTACT_DATA from "../../data/contact";
import styles from "./ContactInfo.module.css";

const ICONS = {
  phone: Phone,
  email: Mail,
  location: MapPin,
};

function ContactInfo() {
  return (
    <section
      id="contact-details"
      className={styles.section}
      aria-labelledby="contact-info-heading"
    >
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div>
            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              CONTACT DETAILS
            </p>

            <h2
              id="contact-info-heading"
              className={styles.title}
            >
              Reach us, your way.
            </h2>
          </div>

          <p className={styles.headingText}>
            Whether you prefer a call, an email or a visit,
            we are always happy to connect with our school
            community.
          </p>
        </div>

        <div className={styles.cards}>
          {CONTACT_DATA.contactCards.map((item) => {
            const Icon = ICONS[item.type];

            return (
              <a
                key={item.type}
                href={item.href}
                className={styles.card}
                target={
                  item.type === "location"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.type === "location"
                    ? "noreferrer"
                    : undefined
                }
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconWrapper}>
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <ArrowUpRight
                    size={18}
                    className={styles.arrow}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.label}>
                    {item.label}
                  </p>

                  <p className={styles.value}>
                    {item.value}
                  </p>
                </div>

                <span
                  className={styles.bottomLine}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;