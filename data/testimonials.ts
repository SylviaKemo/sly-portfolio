export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: replace with real client quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Sylvia took our booking flow from a tangle of spreadsheets to a fast, reliable app. She thinks about the database and the button with the same care.",
    name: "Client name",
    role: "Founder, placeholder co.",
  },
  {
    quote:
      "Rare to find someone who ships clean APIs and polished UI. Our release cadence doubled once she joined the team.",
    name: "Client name",
    role: "Engineering lead",
  },
  {
    quote:
      "Clear communication, honest estimates, and the final product exceeded the brief. We'd hire her again tomorrow.",
    name: "Client name",
    role: "Product manager",
  },
];
