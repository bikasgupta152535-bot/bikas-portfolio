import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, MailIcon, CheckCircleIcon, AlertCircleIcon } from "./Icons.jsx";
import { socialLinks } from "../data/social.js";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Bikas Kumar GUpta";
  if (!form.email.trim()) {
    errors.email = "bikasgupta152535@gmail.com";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "bikasgupta152535@gmail.com";
  }
  if (!form.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

   
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact section-bg-glow">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project, an opportunity, or just want to say hi? Send a message below."
        />

        <div ref={ref} className="reveal contact__grid">
          <form className="contact__form glass" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Bikas Kumar Gupta"
              />
              {errors.name && (
                <span id="name-error" className="form-error">
                  <AlertCircleIcon width={14} height={14} /> {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
              />
              {errors.email && (
                <span id="email-error" className="form-error">
                  <AlertCircleIcon width={14} height={14} /> {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Tell me a bit about what you have in mind..."
              />
              {errors.message && (
                <span id="message-error" className="form-error">
                  <AlertCircleIcon width={14} height={14} /> {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              Send Message
            </button>

            {status === "success" && (
              <p className="form-success" role="status">
                <CheckCircleIcon width={16} height={16} /> Thanks! Your message has been captured locally — connect a backend to deliver it to your inbox.
              </p>
            )}
          </form>

          <div className="contact__side">
            <div className="contact__side-card glass">
              <h3>Reach me directly</h3>
              <a href={socialLinks.email} className="contact__side-link">
                <MailIcon /> bikasgupta152535@gmail.com
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="contact__side-link">
                <GitHubIcon /> https://github.com/bikasgupta152535-bot
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="contact__side-link">
                <LinkedInIcon /> https://www.linkedin.com/in/bikas-kumar-gupta-32794135a?utm_source=share_via&utm_content=profile&utm_medium=member_ios
              </a>
              <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="contact__side-link">
                <LeetCodeIcon /> https://leetcode.com/u/Bikas16/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
