/** Personal details reused across sections. */
export const profile = {
  name: "Sylvia Kemo",
  role: "Fullstack Developer",
  location: "Nairobi, Kenya",
  email: "sylviakemo@gmail.com",
  phone: "(+254) 707 375 739",
  phoneHref: "tel:+254707375739",
  github: "https://github.com/SylviaKemo",
  linkedin: "https://www.linkedin.com/in/sylvia-kemo/",
  cvUrl: "#", // TODO: replace with the real CV PDF link
};

export const socials = [
  { short: "Gh", name: "GitHub", href: profile.github },
  { short: "In", name: "LinkedIn", href: profile.linkedin },
  { short: "✉", name: "Email", href: `mailto:${profile.email}` },
];

/** Rows of the About section's details list. Rows without `href` are plain text. */
export const details: { label: string; value: string; href?: string }[] = [
  { label: "Name", value: profile.name },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/SylviaKemo", href: profile.github },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin },
];
