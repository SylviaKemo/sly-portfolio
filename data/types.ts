/** A technology logo from the Simple Icons CDN. */
export type Tech = {
  name: string;
  slug: string;
  color: string;
  /** Local logo in /public, for brands not on Simple Icons */
  src?: string;
  /** Overrides the icon size, e.g. for wide logos */
  iconSize?: string;
};
