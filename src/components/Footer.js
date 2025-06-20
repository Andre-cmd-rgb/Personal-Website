import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const Footer = () => {
  return (
    <footer>
        <Analytics />
      <p>© 2025 andre-cmd-rgb</p>
        <SpeedInsights />
    </footer>
  );
};

export default Footer;