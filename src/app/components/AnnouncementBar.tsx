"use client";

import Image from "next/image";

const logos = [
  "logos/ELLE_Magazine_Logo.svg.png",
  "logos/image-removebg-preview (1).png", 
  "logos/lefigaro.png",
  "logos/Logo_BFM_Business.svg"
];

export default function AnnouncementBar() {
  return (

<div className="bg-[#f5f5dc] py-4 w-full overflow-hidden">
      <div className="flex animate-scroll gap-12 items-center whitespace-nowrap">
        {/* Multiple sets for seamless infinite loop */}
        {[...Array(4)].map((_, setIndex) => 
          logos.map((logo, i) => (
            <div key={`set-${setIndex}-${i}`} className="flex-shrink-0 h-8 w-auto opacity-100 hover:opacity-80 transition-opacity">
              <Image
                src={`/${logo}`}
                alt="Partner logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
