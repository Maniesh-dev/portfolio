"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GibberishTextProps {
  text: string;
  className?: string;
}

const Letter = ({ letter, className }: { letter: string; className?: string }) => {
  const [code, setCode] = useState(letter.toUpperCase().charCodeAt(0));

  const animate = () => {
    let count = 0;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 65);
      count++;
      if (count > 20) {
        setCode(letter.toUpperCase().charCodeAt(0));
        clearInterval(interval);
      }
    }, 100);
  }

  useEffect(() => {
    const interval = setInterval(animate, 5000);
    return () => clearInterval(interval);
  }, [letter]);

  return (
    <span className={cn("whitespace-pre text-foreground", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};

export default function GibberishText({ text, className }: GibberishTextProps) {
  return (
    <>
      {text.split("").map((letter, index) => {
        return <Letter className={className} letter={letter} key={`${index}-${letter}`} />;
      })}
    </>
  );
}