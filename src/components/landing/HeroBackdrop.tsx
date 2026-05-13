const HeroBackdrop = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Breathing ring — desktop right side, behind photo */}
      <svg
        className="hidden md:block absolute top-1/2 right-[18%] -translate-y-1/2 backdrop-breathe"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
      >
        <circle cx="280" cy="280" r="240" stroke="#B8CFBA" strokeOpacity="0.26" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="280" cy="280" r="180" stroke="#5A8B6E" strokeOpacity="0.20" strokeWidth="1" />
      </svg>

      {/* Mobile breathing ring (smaller, top-center) */}
      <svg
        className="md:hidden absolute top-[16%] left-1/2 -translate-x-1/2 backdrop-breathe"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" stroke="#B8CFBA" strokeOpacity="0.30" strokeWidth="1.3" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="120" stroke="#5A8B6E" strokeOpacity="0.22" strokeWidth="1.1" strokeDasharray="2 7" />
      </svg>

      {/* Drifting dotted lines + harmonic arc (desktop e mobile) */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <line className="backdrop-drift-down" x1="180" y1="-40" x2="180" y2="940" stroke="#B8CFBA" strokeOpacity="0.34" strokeWidth="1.2" strokeDasharray="3 8" />
        <line className="backdrop-drift-up" x1="320" y1="940" x2="320" y2="-40" stroke="#5A8B6E" strokeOpacity="0.32" strokeWidth="1.2" strokeDasharray="3 8" />
        <line className="backdrop-drift-slow" x1="-40" y1="640" x2="1480" y2="640" stroke="#B8CFBA" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="3 5" />

        {/* Harmonic arc echoing the arch frame above the photo */}
        <path className="backdrop-arc-drift" d="M 820 380 Q 1080 240 1340 380" stroke="#5A8B6E" strokeOpacity="0.30" strokeWidth="1.2" fill="none" strokeDasharray="4 7" />
      </svg>
    </div>
  );
};

export default HeroBackdrop;
