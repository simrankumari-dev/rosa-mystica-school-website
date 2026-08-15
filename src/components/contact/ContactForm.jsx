import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

import styles from "./ContactForm.module.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend / email integration can be added later.
    console.log("Contact form:", formData);

    setSubmitted(true);
    setFormData(INITIAL_FORM);
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="contact-form-heading"
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Content */}
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              SEND A MESSAGE
            </p>

            <h2
              id="contact-form-heading"
              className={styles.title}
            >
              Have a question?
              <span> Let's talk.</span>
            </h2>

            <p className={styles.description}>
              Whether you are a parent, student or visitor,
              send us your question and our team will be happy
              to assist you.
            </p>

            <div className={styles.note}>
              <span className={styles.noteLine} />
              <p>
                We value every conversation and every member
                of our school community.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCard}>
            {submitted && (
              <div className={styles.successMessage}>
                <CheckCircle2
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <strong>Message received</strong>
                  <p>
                    Thank you for contacting Rosa Mystica School.
                  </p>
                </div>
              </div>
            )}

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div className={styles.formFooter}>
                <p className={styles.requiredNote}>
                  * Required fields
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Send Message

                  <Send
                    size={17}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;