import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiGlobeAlt, HiChevronDown } from "react-icons/hi";

export default function Footer() {
  const columns = [
    {
      heading: "Support",
      links: ["FAQ", "Help Center", "Account", "Contact Us"],
    },
    {
      heading: "Legal",
      links: ["Jobs", "Terms of Use", "Privacy", "Cookie Preferences"],
    },
    {
      heading: "More",
      links: [
        "Service Status",
        "Manage Subscription",
        "Demo Link",
        "Divya Gaurav",
      ],
    },
  ];

  const socials = [
    { Icon: FaFacebook, label: "Facebook" },
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaTwitter, label: "Twitter" },
    { Icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <footer className="gptflix-footer relative overflow-hidden text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 py-6 xl:px-0">
        {/* Wordmark + social row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <img
              src="/logo.png"
              alt="GPTFlix Logo"
              className="h-16 md:h-24 cursor-pointer p-0"
            />
            <p className="text-xs text-neutral-600 mt-1">
              Stop scrolling. Start watching.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="social-btn h-9 w-9 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* film-strip sprocket divider */}
        <div
          className="sprocket-row h-3 w-full mb-10 rounded-sm"
          aria-hidden="true"
        />

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 text-sm mb-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                className="text-neutral-100 text-xs uppercase tracking-wider mb-4"
                style={{ letterSpacing: "0.08em" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="link-item text-neutral-500 hover:text-neutral-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-neutral-900">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} GPTFlix, Inc. All rights reserved.
          </p>

          <div className="relative w-fit">
            <button className="flex items-center gap-2 border border-neutral-700 text-neutral-400 text-xs px-3 py-2 rounded-sm">
              <HiGlobeAlt className="h-3.5 w-3.5" />
              <select className="bg-transparent outline-none cursor-pointer appearance-none pr-1">
                <option>English</option>
                <option>हिन्दी</option>
              </select>
              <HiChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
