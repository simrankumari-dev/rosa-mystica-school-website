import { ArrowUpRight, MapPin } from "lucide-react";

import CONTACT_DATA from "../../data/contact";
import styles from "./ContactLocation.module.css";

function ContactLocation() {
  const { title, address, description, mapUrl, directionsUrl } =
    CONTACT_DATA.location;

  return (
    <section
      className={styles.section}
      aria-labelledby="location-heading"
    >
      <div className={styles.container}>
        <div className={styles.panel}>
          {/* Left content */}
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <MapPin size={22} aria-hidden="true" />
            </div>

            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              OUR LOCATION
            </p>

            <h2
              id="location-heading"
              className={styles.title}
            >
              {title}
            </h2>

            <p className={styles.description}>
              {description}
            </p>

            <div className={styles.addressBlock}>
              <span className={styles.addressLabel}>
                CAMPUS ADDRESS
              </span>

              <p className={styles.address}>
                {address}
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.directionsButton}
            >
              Get Directions
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Right map */}
          <div className={styles.mapWrapper}>
            <iframe
              src={mapUrl}
              title="Rosa Mystica School location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />

            <div
              className={styles.mapBadge}
              aria-hidden="true"
            >
              <MapPin size={15} />
              Rosa Mystica School
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLocation;