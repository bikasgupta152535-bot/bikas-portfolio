import { GitHubIcon, LinkedInIcon, LeetCodeIcon, MailIcon } from "./Icons.jsx";
import { socialLinks } from "../data/social.js";
import "./Footer.css";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__brand-mark mono">&lt;BKG/&gt;</span>
          <p>Bikas Kumar Gupta — B.Tech CSE Student &amp; Java Developer.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__socials">
          <h4>Elsewhere</h4>
          <div className="footer__social-icons">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <LeetCodeIcon />
            </a>
            <a href={socialLinks.email} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} Bikas Kumar Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}
