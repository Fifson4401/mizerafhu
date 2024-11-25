'use client';

import { siteConfig } from '@/config/site';
import { FC, useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaIdCard,
  FaCopy, // Import ikony kopiowania
} from 'react-icons/fa';
import PhoneNumber from "./phoneReveal"; // Import komponentu PhoneNumber

const ContactMap: FC = () => {
  const { contact } = siteConfig;
  const [copied, setCopied] = useState<boolean>(false); // Stan do śledzenia kopiowania

  // Funkcja kopiująca tekst do schowka
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset po 2 sekundach
      })
      .catch(err => {
        console.error('Błąd kopiowania: ', err);
      });
  };

  // Funkcja do wyświetlania danych lub placeholdera z linkami
  const renderInfo = (
    label: string,
    value?: string,
    icon?: React.ReactNode,
    isLink: boolean = false
  ) => {
    let displayValue = value || 'Brak danych';
    let href = '#';

    if (label === 'Telefon' && value) {
      href = `tel:${value}`;
    } else if (label === 'Email' && value) {
      href = `mailto:${value}`;
    } else if (label === 'Adres' && value) {
      const query = encodeURIComponent(`${contact.address.street}, ${contact.address.postcode} ${contact.address.city}`);
      href = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }

    return (
      <div className="mb-6 flex items-start relative">
        {icon && (
          <span className="mr-4 text-xl text-[#DD2A1F] mt-1">
            {icon}
          </span>
        )}
        <div>
          <p className="font-semibold text-lg">{label}:</p>
          {isLink ? (
            label === 'Telefon' ? (
              <PhoneNumber phoneNumber={value!} /> // Użycie operatora !
            ) : label === 'Adres' ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {displayValue}
              </a>
            ) : label === 'Email' && value ? (
              <div className="flex items-center">
                <a href={href} className="text-blue-600 hover:underline mr-2">
                  {displayValue}
                </a>
                <button
                  onClick={() => copyToClipboard(value)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Kopiuj email"
                >
                  <FaCopy />
                </button>
                {copied && (
                  <span className="ml-2 text-green-600 text-sm">
                    Skopiowano!
                  </span>
                )}
              </div>
            ) : (
              <a href={href} className="text-blue-600 hover:underline">
                {displayValue}
              </a>
            )
          ) : (
            <p className="text-gray-700">{displayValue}</p>
          )}
        </div>
      </div>
    );
  };


  return (
    <div className="p-16 flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
      {/* Mapa */}
      <div className="md:w-1/2 w-full">
        <iframe
          className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-l-lg iframe-hover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.7160632752143!2d18.849238078387557!3d49.67848691243109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714197302727905%3A0x1245f22825c88a2f!2zRMSZYm93YSA5LCA0My00NjAgV2lzxYJh!5e0!3m2!1spl!2spl!4v1732151279458!5m2!1spl!2spl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa firmy F.h.u. mizera"
        ></iframe>
      </div>

      {/* Informacje kontaktowe */}
      <div className="md:w-1/2 w-full p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Kontakt</h2>
          <hr className="mb-8 border-gray-300" />
          <div>
            {renderInfo('Firma', contact.company, <FaBuilding />)}
            {renderInfo(
              'Adres',
              `${contact.address.street}, ${contact.address.postcode} ${contact.address.city}`,
              <FaMapMarkerAlt />,
              true
            )}
            {contact.additionalAddress &&
              renderInfo(
                'Adres dodatkowy',
                contact.additionalAddress,
                <FaMapMarkerAlt />,
                false
              )}
            {renderInfo('NIP', contact.nip, <FaIdCard />)}
            {renderInfo(
              'Telefon',
              contact.phone,
              <FaPhone />,
              !!contact.phone
            )}
            {renderInfo(
              'Email',
              contact.email,
              <FaEnvelope />,
              !!contact.email
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
