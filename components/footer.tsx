import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import PhoneNumber from "./phoneReveal";

const Footer: FC = () => {
  return (
    <footer className="bg-[#211A1E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src={siteConfig.logoWhitePath}
                alt={siteConfig.name}
                width={150}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p>{siteConfig.contact.address.street}</p>
              <p>{siteConfig.contact.address.postcode} {siteConfig.contact.address.city}</p>
              <PhoneNumber
                phoneNumbers={siteConfig.contact.phones}
                variant="column"
              />
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex flex-col space-y-2">
              {Object.entries(siteConfig.contact.socialMedia).map(([platform, url]) => (
                <Link
                  key={platform}
                  href={url}
                  className="hover:text-gray-300 transition-colors capitalize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;