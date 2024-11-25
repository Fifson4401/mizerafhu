// components/phoneReveal.tsx
'use client';

import { useState } from 'react';
import { Button } from "@nextui-org/button";
import { Eye, EyeOff } from "lucide-react";
import { FaPhone } from 'react-icons/fa';

interface PhoneNumberProps {
  phoneNumber: string;
  onReveal?: (phoneNumber: string, isRevealed: boolean) => void;
}

const PhoneNumber = ({ phoneNumber, onReveal }: PhoneNumberProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const formatPhoneNumber = (number: string) => {
    // Usuwa wszystkie niepotrzebne znaki (spacje, myślniki itp.)
    const cleanNumber = number.replace(/\D/g, '');

    // Sprawdza czy numer zaczyna się od 48 (kod kraju)
    const hasCountryCode = cleanNumber.startsWith('48');

    // Wyodrębnia właściwy numer telefonu (bez kodu kraju)
    const phoneDigits = hasCountryCode ? cleanNumber.slice(2) : cleanNumber;

    // Formatuje numer w grupy po 3 cyfry
    const formattedNumber = phoneDigits.replace(/(\d{3})(?=\d)/g, '$1 ');

    // Dodaje prefix +48 jeśli był obecny
    return hasCountryCode ? `+48 ${formattedNumber}` : formattedNumber;
  };

  const handleToggle = () => {
    const newState = !isRevealed;
    setIsRevealed(newState);
    if (onReveal) {
      onReveal(phoneNumber, newState);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isRevealed ? (
        <a
          href={`tel:${phoneNumber}`}
          className="font-medium text-blue-600 hover:underline"
        >
          {formatPhoneNumber(phoneNumber)}
        </a>
      ) : (
        <span className="font-medium">
          {formatPhoneNumber(phoneNumber.slice(0, 3))}
          <span className="opacity-50"> XXX XXX XXX</span>
        </span>
      )}
      <Button
        size="sm"
        color="primary"
        onClick={handleToggle}
        className="whitespace-nowrap"
        endContent={isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
      >
        {isRevealed ? 'Ukryj numer' : 'Pokaż numer'}
      </Button>
    </div>
  );
};

export default PhoneNumber;
