/** Personal details reused across sections. */
export const profile = {
  name: "Sylvia Kemo",
  role: "Fullstack Developer",
  location: "Nairobi, Kenya",
  email: "Sylviakemo@gmail.com",
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

/** Rows of the About section's details list. */
export const details = [
  { label: "Name", value: profile.name, href: profile.linkedin },
  { label: "Address", value: profile.location, href: "https://maps.google.com/?q=Nairobi,Kenya" },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "SylviaKemo", href: profile.github },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin },
];
