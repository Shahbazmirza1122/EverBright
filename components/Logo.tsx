import React, { useState, useEffect, useRef } from 'react';
import { Upload } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
  allowUpload?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", allowUpload = true }) => {
  // Default to the file path, but allow overriding via state
  const [logoSrc, setLogoSrc] = useState<string>("/logo.png");
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check local storage on mount
    const savedLogo = localStorage.getItem('custom_logo');
    if (savedLogo) {
      setLogoSrc(savedLogo);
      setHasError(false); 
    }

    // 2. Listen for custom events to sync across components (e.g. updating navbar updates footer)
    const handleLogoUpdate = () => {
      const newLogo = localStorage.getItem('custom_logo');
      if (newLogo && newLogo !== logoSrc) {
        setLogoSrc(newLogo);
        setHasError(false); // Reset error state to try rendering the new image
      }
    };

    window.addEventListener('logo-updated', handleLogoUpdate);
    return () => window.removeEventListener('logo-updated', handleLogoUpdate);
  }, [logoSrc]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to ~2MB to be safe for localStorage)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size is too large. Please select an image under 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        try {
          localStorage.setItem('custom_logo', result);
          setLogoSrc(result);
          setHasError(false); // Reset error state so the new image renders
          // Dispatch event to notify other Logo components
          window.dispatchEvent(new Event('logo-updated'));
        } catch (err) {
          alert("Storage limit exceeded. Please try a smaller image.");
          console.error("Error saving logo to local storage:", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (allowUpload) {
      // Prevent parent click handlers (like scroll to top in Navbar)
      e.stopPropagation();
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  return (
    <div className={`relative group inline-flex items-center ${className}`}>
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/png, image/jpeg, image/svg+xml, image/webp" 
        onChange={handleFileChange}
      />

      {/* Render Image or Fallback based on State */}
      {!hasError ? (
        <img 
          src={logoSrc} 
          alt="EverBright" 
          className="h-full w-auto object-contain transition-all duration-300"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight whitespace-nowrap">
          EverBright
        </span>
      )}

      {/* Upload Overlay - Visible on Hover */}
      {allowUpload && (
        <div 
          onClick={handleClick}
          className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer backdrop-blur-[2px] z-10"
          title="Click to upload logo"
        >
          <Upload className="w-5 h-5 text-white animate-bounce" />
          <span className="sr-only">Upload Logo</span>
        </div>
      )}
    </div>
  );
};

export default Logo;