"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  hero: string;
  tags?: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  slug,
  hero,
  tags = [],
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.99 }}
        className="
          group
          rounded-xl
          overflow-hidden
          border border-white/10
          bg-[#111]
          hover:border-blue-400
          transition-all
          duration-300
          hover:shadow-[0_0_22px_rgba(59,130,246,0.18)]
        "
      >
        {/* Image */}
        <div className="relative h-44 w-full">
          {featured && (
            <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs rounded-md bg-blue-500 text-white font-medium">
              Featured
            </div>
          )}
          <Image
            src={hero}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Text */}
        <div className="p-6">
          {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md border border-white/10 text-gray-300 bg-black/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-5 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">
            View case study →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}