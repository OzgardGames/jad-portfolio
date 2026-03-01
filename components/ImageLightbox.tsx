"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative w-full h-48 cursor-pointer rounded-lg overflow-hidden border border-gray-800 hover:border-blue-400 transition"
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-10"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-[80vh]">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}