// Lightweight inline SVG icons — kept in one file so we don't need an icon library.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.1c-3.17.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.57.23 2.73.12 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.61.41.36.77 1.06.77 2.14v3.17c0 .31.21.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5Z"
    />
  </svg>
);

export const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"
    />
  </svg>
);

export const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
    <path
      fill="currentColor"
      d="M13.98 22.16c-1.1 0-2.15-.43-2.98-1.24l-3.7-3.6a4.24 4.24 0 0 1-1.24-2.99c0-1.13.44-2.19 1.24-2.99l6.35-6.35a1.1 1.1 0 0 1 1.56 1.56l-6.35 6.34a2.05 2.05 0 0 0 0 2.88l3.7 3.6a2.05 2.05 0 0 0 2.87.02l3.65-3.5a1.1 1.1 0 0 1 1.53 1.59l-3.65 3.5a4.22 4.22 0 0 1-2.98 1.18ZM9.4 14.9a1.1 1.1 0 0 1 0-2.2h9.4a1.1 1.1 0 0 1 0 2.2H9.4Z"
    />
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

export const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} {...props}>
    <path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3M14 4h6v6M20 4l-9.5 9.5" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <path d="M12 3v12M7 10l5 5 5-5M4.5 19.5h15" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const CodeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="m9 8-5 4 5 4M15 8l5 4-5 4M13.5 5l-3 14" />
  </svg>
);

export const CoffeeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
    <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17M7 3.5c-.6.6-.6 1.4 0 2M11 3.5c-.6.6-.6 1.4 0 2" />
  </svg>
);

export const ServerIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
    <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

export const DatabaseIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5V18c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5.5" />
    <path d="M4.5 11.75c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
  </svg>
);

export const PlugIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="M9 3v5M15 3v5M6 8h12l-1 4.5a5 5 0 0 1-5 3.9 5 5 0 0 1-5-3.9L6 8ZM12 16.4V21" />
  </svg>
);

export const TrophyIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4ZM4.5 5.5H7v3a3 3 0 0 1-3-3ZM19.5 5.5H17v3a3 3 0 0 0 3-3ZM12 13v3M9 20h6M10 16.5h4v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" />
  </svg>
);

export const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <path d="m12 3 2.7 5.9 6.3.6-4.8 4.2 1.4 6.3L12 16.9 6.4 20l1.4-6.3-4.8-4.2 6.3-.6L12 3Z" />
  </svg>
);

export const AwardIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="m8.2 13.3-1.7 7 5.5-2.8 5.5 2.8-1.7-7" />
  </svg>
);

export const TargetIcon = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.4 2.4 4.6-5.4" />
  </svg>
);

export const AlertCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
);

export const LoaderIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
    <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const iconMap = {
  code: CodeIcon,
  coffee: CoffeeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  plug: PlugIcon,
  trophy: TrophyIcon,
  star: StarIcon,
  award: AwardIcon,
  target: TargetIcon,
};
