export function HumanAvatar() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 border rounded-full"
    >
      <g clipPath="url(#clip0_1001_2)">
        <circle cx="16" cy="16" r="15" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <circle cx="16" cy="12" r="4" fill="hsl(var(--primary))">
          <animate
            attributeName="cy"
            values="12;11.5;12"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M10 22C10 18.6863 12.6863 16 16 16C19.3137 16 22 18.6863 22 22"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        >
           <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1; 1 1.05; 1 1"
            keyTimes="0;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
            additive="sum"
            transformOrigin="16 22"
            />
        </path>
      </g>
      <defs>
        <clipPath id="clip0_1001_2">
          <rect width="32" height="32" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
