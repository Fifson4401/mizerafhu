// components/phoneReveal.tsx
'use client';

import { useState } from 'react';
import { Button } from "@heroui/button";
import { Eye, EyeOff } from "lucide-react";

interface PhoneNumberProps {
  phoneNumbers: string[];
  onReveal?: (phoneNumbers: string[], isRevealed: boolean) => void;
  variant?: 'row' | 'column' | 'split';
}

const PhoneNumber = ({ phoneNumbers, onReveal, variant = 'row' }: PhoneNumberProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const formatPhoneNumber = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    const hasCountryCode = cleanNumber.startsWith('48');
    const phoneDigits = hasCountryCode ? cleanNumber.slice(2) : cleanNumber;
    const formattedNumber = phoneDigits.replace(/(\d{3})(?=\d)/g, '$1 ');
    return hasCountryCode ? `+48 ${formattedNumber}` : formattedNumber;
  };

  const handleToggle = () => {
    const newState = !isRevealed;
    setIsRevealed(newState);
    if (onReveal) {
      onReveal(phoneNumbers, newState);
    }
  };

  const variants = {
    row: "flex items-center gap-4",
    column: "flex flex-col gap-2",
    split: "flex items-center gap-4"
  };

  const numbersContainerVariants = {
    row: "flex items-center gap-4",
    column: "flex flex-col gap-2",
    split: "space-y-2"
  };

  const buttonVariants = {
    row: "whitespace-nowrap",
    column: "whitespace-nowrap w-fit",
    split: "whitespace-nowrap self-center"
  };

  return (
    <div className={variants[variant]}>
      <div className={numbersContainerVariants[variant]}>
        {phoneNumbers.map((phone, index) => (
          <div key={phone}>
            {isRevealed ? (
              <a
                href={`tel:${phone}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {formatPhoneNumber(phone)}
              </a>
            ) : (
              <span className="font-medium">
                {formatPhoneNumber(phone.slice(0, 3))}
                <span className="opacity-50"> XXX XXX XXX</span>
              </span>
            )}
          </div>
        ))}
      </div>
      <Button
        size="sm"
        color="primary"
        onClick={handleToggle}
        className={buttonVariants[variant]}
        endContent={isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
      >
        {isRevealed ? 'Ukryj numery' : 'Pokaż numery'}
      </Button>
    </div>
  );
};

export default PhoneNumber;