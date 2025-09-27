// src/components/shell/logo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  src: string;
  darkSrc?: string;
  size?: number;                // visible diameter
  alt?: string;
  showWordmark?: boolean;
  wordmark?: string;
  className?: string;
};

export function Logo({
  src,
  darkSrc,
  size = 32,
  alt = "Dami Shabi",
  showWordmark = true,
  wordmark = "Dami Shabi",
  className = "",
}: LogoProps) {
  return (
    <Link href="/" aria-label="Home" className={`flex items-center gap-2 ${className} ml-[30px]`}>
      {/* Fixed square hitbox keeps both themes perfectly aligned */}
      <span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
      >
        {darkSrc ? (
          <>
            {/* Light */}
            <Image
              src={darkSrc}
              alt={alt}
              fill
              sizes={`${size}px`}
              priority
              className="block rounded-full object-cover dark:hidden"
            />
            {/* Dark */}
            <Image
              src={darkSrc}
              alt={alt}
              fill
              sizes={`${size}px`}
              priority
              className="hidden rounded-full object-cover dark:block"
            />
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${size}px`}
            priority
            className="rounded-full object-cover"
          />
        )}
      </span>

      {showWordmark && (
        <span className="hidden md:inline text-base font-semibold leading-none tracking-tight">
          {wordmark}
        </span>
      )}
    </Link>
  );
}
