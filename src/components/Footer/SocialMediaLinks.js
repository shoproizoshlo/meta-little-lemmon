import React from "react";
import LinksList from "../PageComponents/LinksList";

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "/",
      id: 1,
      socialMedia: "instagram",
    },
    {
      name: "Facebook",
      url: "/",
      id: 2,
      socialMedia: "facebook",
    },
    {
      name: "TikTok",
      url: "/",
      id: 3,
      socialMedia: "tiktok",
    },
    {
      name: "X",
      url: "/",
      id: 4,
      socialMedia: "x-twitter",
    },
  ];
  return (
    <div className="social-links d-flex flex-column align-items-center">
      <p className="titel">Socials</p>
      <LinksList data={socialLinks} />
    </div>
  );
}
