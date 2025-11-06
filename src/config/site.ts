export const siteConfig = {
  name: "Charm Fluent",
  url: "https://charmfluent.com",
  getStartedUrl: "/app",
  ogImage: "/og.jpg",
  description:
    "让AI帮你表达心动的话。浪漫、温柔、幽默，多种风格让你的话语更有魅力。",
  links: {
    twitter: "https://twitter.com/charmfluent",
    github: "https://github.com/charm-fluence",
    email: "mailto:contact@charmfluent.com",
  },
  pricing: {
    pro: "/",
    team: "/",
  },
  stats: {
    users: 12500,
    messages: 125000,
    styles: 6,
    satisfaction: "98%",
    updated: "最新版本",
    sections: 6,
    illustrations: 0,
    animations: 0,
    appTemplates: 0,
    websiteTemplates: 0,
    figma: 5000,
    github: 1000,
    cli: 3000,
  },
};

export type SiteConfig = typeof siteConfig;
