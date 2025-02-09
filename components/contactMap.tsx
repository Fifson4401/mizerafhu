'use client';

import { siteConfig } from '@/config/site';
import { FC } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaIdCard,
} from 'react-icons/fa';
import InfoItem from './infoItem';

const ContactMap: FC = () => {
  const { contact } = siteConfig;

  return (
    <div className="p-4 sm:p-8 lg:p-16 flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
      <div
        className="md:w-1/2 w-full"
        role="complementary"
        aria-label="Lokalizacja firmy na mapie"
      >
        <iframe
          className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.7160632752143!2d18.849238078387557!3d49.67848691243109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714197302727905%3A0x1245f22825c88a2f!2zRMSZYm93YSA5LCA0My00NjAgV2lzxYJh!5e0!3m2!1spl!2spl!4v1732151279458!5m2!1spl!2spl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa lokalizacji firmy"
        />
      </div>

      <div className="md:w-1/2 w-full pt-10 md:p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Kontakt</h2>
          <hr className="mb-8 border-gray-300" />
          <div>
            <InfoItem label="Firma" value={contact.company} icon={<FaBuilding />} />
            <InfoItem
              label="Adres"
              value={`${contact.address.street}, ${contact.address.postcode} ${contact.address.city}`}
              icon={<FaMapMarkerAlt />}
              isLink
            />
            {contact.additionalAddress && (
              <InfoItem
                label="Adres dodatkowy"
                value={contact.additionalAddress}
                icon={<FaMapMarkerAlt />}
              />
            )}
            <InfoItem label="NIP" value={contact.nip} icon={<FaIdCard />} />
            <InfoItem
              label="Telefon"
              value={contact.phones}
              icon={<FaPhone />}
              isLink
            />
            <InfoItem
              label="Email"
              value={contact.email}
              icon={<FaEnvelope />}
              isLink
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;