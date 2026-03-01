export const projects = [
  {
    title: "Whispers of the Djinn",
    slug: "whispers-of-the-djinn",
    hero: "/images/djin.png",
    description:
      "A Moroccan folklore-inspired stealth experience developed in Unreal Engine focusing on lighting, shaders, and atmosphere.",
    role: "Technical Artist / Gameplay Developer",
    tools: ["Unreal Engine 5", "Blueprints", "Shaders", "Lighting", "VFX"],
    overview:
      "This project explores environmental storytelling and stealth mechanics inspired by Little Nightmares, emphasizing mood, readability, and technical art workflows.",
    
    highlights: [
      "Built mood-driven lighting setups and exposure tuning for stealth readability.",
      "Created reusable shader/material workflows for atmosphere and surface variation.",
      "Implemented VFX and post-processing passes to support storytelling beats.",
      "Designed interactive stealth moments and environmental cues to guide the player.",
    ],
    
      video: "https://www.youtube.com/embed/QOEeg82KuAs",
    gallery: [
      "/images/djinn_01.png",
      "/images/djinn_02.png",
      "/images/djinn_03.png",
    ],

    tags: ["Technical Art", "Lighting", "Shaders", "Design"],
    featured: true,

    engine: "Unreal Engine 5",
    teamSize: "Solo",
    duration: "4 months",
    platform: "PC",
  },

  {
    title: "2D Metroidvania Prototype",
    slug: "metroidvania",
    hero: "/images/vania.png",
    description:
      "Advanced character controller featuring combat and traversal systems.",
    role: "Gameplay Programmer",
    tools: ["Unity", "C#", "Animation State Machines", "AI Systems"],
    overview:
      "Designed and implemented advanced movement including dash, parry, grappling hook, and enemy AI behaviors.",
    
    highlights: [
      "Implemented advanced movement (dash, wallslide, grappling) with animator-friendly state flow.",
      "Built combat interactions (attack/parry) with clear timing windows and feedback.",
      "Developed enemy AI behaviors and encounter pacing for prototype levels.",
      "Designed level routes to teach mechanics gradually through layout.",
    ],

      video: "https://www.youtube.com/embed/rBkB3EJfsyw",
    gallery: [
      "/images/vania_01.png",
      "/images/vania_02.png",
    ],
    tags: ["Gameplay", "Systems", "Design"],
    featured: true,

    engine: "Unity",
    teamSize: "Team of 2",
    duration: "Prototype",
    platform: "PC",
  },
];