export function RobotAvatar() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 border rounded-full"
    >
      <g clipPath="url(#clip0_1001_1)">
        <circle cx="16" cy="16" r="15" fill="hsl(var(--primary))" stroke="hsl(var(--border))" strokeWidth="2" />
        <rect x="9" y="10" width="14" height="10" rx="2" fill="hsl(var(--primary-foreground))">
             <animateTransform
                attributeName="transform"
                type="scale"
                values="1 1; 1.05 1.05; 1 1"
                keyTimes="0;0.5;1"
                dur="2s"
                repeatCount="indefinite"
                additive="sum"
                transform-origin="16 15"
            />
        </rect>
        <circle cx="16" cy="15" r="2" fill="hsl(var(--primary))">
            <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
        </circle>
        <line x1="12" y1="23" x2="10" y2="26" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round">
            <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 12 23; -5 12 23; 0 12 23"
                dur="1s"
                repeatCount="indefinite"
            />
        </line>
        <line x1="20" y1="23" x2="22" y2="26" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round">
             <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 20 23; 5 20 23; 0 20 23"
                dur="1s"
                repeatCount="indefinite"
            />
        </line>
         <rect x="15" y="7" width="2" height="3" rx="1" fill="hsl(var(--primary-foreground))">
             <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -1; 0 0"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </rect>
      </g>
      <defs>
        <clipPath id="clip0_1001_1">
          <rect width="32" height="32" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
