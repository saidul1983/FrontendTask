"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import footerData from "@/data/footer.json";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {
              footerData.sections.map((section, index) => (
                <div key={index} className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4">
                  <div className="mb-12 lg:mb-16">
                    <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                      {section.title}
                    </h2>
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            }

            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src={footerData.logo.src}
                    alt={footerData.logo.alt}
                    className="w-full dark:hidden"
                    width={footerData.logo.width}
                    height={footerData.logo.height}
                  />
                  <Image
                    src={footerData.logo.src}
                    alt={footerData.logo.alt}
                    className="hidden w-full dark:block"
                    width={footerData.logo.width}
                    height={footerData.logo.height}
                  />
                </Link>

                <div className="mb-9 flex items-center">
                  {footerData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${index < footerData.socialLinks.length - 1 ? 'mr-6' : ''} text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary`}
                    >
                      <svg 
                        width={social.svg.width} 
                        height={social.svg.height} 
                        viewBox={social.svg.viewBox}
                        fill={social.icon === 'youtube' || social.icon === 'linkedin' ? 'currentColor' : 'none'}
                        className={social.icon === 'youtube' || social.icon === 'linkedin' ? 'fill-current' : ''}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d={social.svg.path}
                          fill={social.icon === 'facebook' || social.icon === 'twitter' ? 'currentColor' : undefined}
                          fillRule={social.icon === 'twitter' ? 'evenodd' : undefined}
                          clipRule={social.icon === 'twitter' ? 'evenodd' : undefined}
                        />
                      </svg>
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {footerData.newsletter.title}
                  </h3>
                  <form onSubmit={handleSubscribe} className="w-full">
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={footerData.newsletter.placeholder}
                        required
                        className="w-full rounded-md border border-stroke bg-white px-3 py-2.5 text-sm text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark sm:flex-1"
                      />
                      <button
                        type="submit"
                        className="whitespace-nowrap rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
                      >
                        {footerData.newsletter.buttonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              {footerData.copyright.text}{" "}
              <a
                href={footerData.copyright.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {footerData.copyright.company}
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
