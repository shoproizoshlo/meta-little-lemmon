import React from "react";
import LinksList from "../PageComponents/LinksList";

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "/",
      id: 1,
    },
    {
      name: "Facebook",
      url: "/",
      id: 2,
    },
    {
      name: "TikTok",
      url: "/",
      id: 3,
    },
    {
      name: "X",
      url: "/",
      id: 4,
    },
  ];
  return (
    <div className="social-links mt-3">
      <p className="titel">Socials</p>
      <LinksList data={socialLinks} />
    </div>
  );
}
