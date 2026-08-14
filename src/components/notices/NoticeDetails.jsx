import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import NOTICES from "../../data/notices";
import styles from "./NoticeDetails.module.css";

function NoticeDetails() {
  const { id } = useParams();

  const notice = NOTICES.find(
    (item) => String(item.id) === String(id)
  );

  if (!notice) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Notice not found
          </h1>

          <Link
            to="/notices"
            className={styles.backLink}
          >
            <ArrowLeft size={17} />
            Back to Notices
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <Link
          to="/notices"
          className={styles.backLink}
        >
          <ArrowLeft size={17} />
          Back to Notices
        </Link>

        <article className={styles.card}>

          <div className={styles.meta}>
            <span className={styles.date}>
              {notice.date}
            </span>

            <span className={styles.category}>
              {notice.category}
            </span>
          </div>

          <h1 className={styles.title}>
            {notice.title}
          </h1>

          <p className={styles.description}>
            {notice.description}
          </p>

          <div className={styles.divider} />

          <p className={styles.content}>
            {notice.content}
          </p>

        </article>

      </div>
    </section>
  );
}

export default NoticeDetails;