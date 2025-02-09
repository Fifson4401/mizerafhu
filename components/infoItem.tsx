// components/InfoItem.tsx
import { FC, ReactNode, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import PhoneNumber from './phoneReveal';

interface InfoItemProps {
  label: string;
  value?: string | string[];
  icon?: ReactNode;
  isLink?: boolean;
}

const InfoItem: FC<InfoItemProps> = ({ label, value, icon, isLink = false }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Błąd kopiowania: ', err);
      });
  };

  const getHref = (label: string, value: string) => {
    if (label === 'Email') return `mailto:${value}`;
    if (label === 'Adres') {
      const query = encodeURIComponent(value);
      return `https://www.google.com/maps/search/?api=1&query=${query}`;
    }
    return '#';
  };

  const displayValue = value || 'Brak danych';
  const href = typeof value === 'string' ? getHref(label, value) : '#';

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
            <PhoneNumber phoneNumbers={Array.isArray(value) ? value : [value as string]} variant='column' />
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
                onClick={() => copyToClipboard(value as string)}
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

export default InfoItem;