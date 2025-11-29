import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  const [imageError, setImageError] = useState(false);

  // If the image fails to load (404), we render this text/icon fallback
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="h-full aspect-square bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white">
          <Globe className="h-[60%] w-[60%]" />
        </div>
        <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
          EverBright
        </span>
      </div>
    );
  }

  return (
    <img 
      src="https://res.cloudinary.com/dn93gd6yw/image/upload/v1764420447/Blue_and_Green_Business_Technology_Globe_Logo_1_cbmajj.png" 
      alt="EverBright Logo" 
      className={`${className} object-contain`}
      onError={() => setImageError(true)}
    />
  );
};

export default Logo;