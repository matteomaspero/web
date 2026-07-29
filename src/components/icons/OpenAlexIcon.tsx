// OpenAlex tricon — three connected dots (A for Alex / network graph / open door).
// Inline SVG facsimile of the official mark from https://openalex.org/brand
// (Cloudflare blocked direct download of the brand PNG from the build sandbox).
// Uses currentColor so it can be tinted per surface (dark on light, white on dark).
import { SVGProps } from 'react';

const OpenAlexIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* connecting strokes forming the "A" / network */}
    <line x1="20" y1="10" x2="9" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="10" x2="31" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="13" y1="22" x2="27" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* three connected dots */}
    <circle cx="20" cy="10" r="5" />
    <circle cx="9" cy="30" r="5" />
    <circle cx="31" cy="30" r="5" />
  </svg>
);

export default OpenAlexIcon;
