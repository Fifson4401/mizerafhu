import React, { FC } from 'react';
import Image from 'next/image';

interface RockProps {
  imageUrl: string;
  style?: React.CSSProperties;
  isRight?: boolean;
}

const Rock: FC<RockProps> = ({ imageUrl, style, isRight }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${isRight ? 'translate-x-full' : '-translate-x-full'} hidden lg:flex`}
      style={style}
    >
      <div className="relative">
        {/* Gradient poziomy */}
        <div
          className="absolute inset-0"
          style={{
            background: isRight
              ? 'linear-gradient(to left, white 0%, transparent 10%, transparent 95%, white 100%)'
              : 'linear-gradient(to right, white 0%, transparent 10%, transparent 95%, white 100%)'
          }}
        />
        {/* Gradient pionowy */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, white 0%, transparent 10%, transparent 95%, white 100%)'
          }}
        />
        <Image
          src={`/images/materials/${imageUrl}`}
          alt={''}
          width={140}
          height={140}
          className="select-none pointer-events-none relative z-[-1]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Rock;