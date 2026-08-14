import { ArrowRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";

import NOTICES from "../../data/notices";
import styles from "./NoticeList.module.css";

function NoticeList() {
  return (
    <section
      className={styles.section}
      aria-labelledby="notice-list-heading"
    >
      <div className={styles.container}>

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              Announcements
            </p>

            <h2
              id="notice-list-heading"
              className={styles.title}
            >
              Stay up to date
            </h2>
          </div>
        </div>

        <div className={styles.list}>
          {NOTICES.map((notice) => (
            <article
              key={notice.id}
              className={styles.noticeCard}
            >
              <div className={styles.dateBlock}>
                <span className={styles.date}>
                  {notice.date}
                </span>

                <span className={styles.category}>
                  {notice.category}
                </span>
              </div>

              <div className={styles.iconWrapper}>
                <Bell
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.noticeTitle}>
                  {notice.title}
                </h3>

                <p className={styles.description}>
                  {notice.description}
                </p>
              </div>

              <Link
                to={`/notices/${notice.id}`}
                className={styles.arrowButton}
                aria-label={`View ${notice.title}`}
              >
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NoticeList;