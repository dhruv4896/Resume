type ContinuityFieldProps = {
  className?: string;
};

const nodes = [
  { x: 238, y: 340, size: 8 },
  { x: 302, y: 252, size: 10 },
  { x: 398, y: 408, size: 11 },
  { x: 516, y: 286, size: 9 },
  { x: 598, y: 448, size: 12 },
  { x: 676, y: 338, size: 8 },
];

export function ContinuityField({ className = "" }: ContinuityFieldProps) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <svg
        aria-hidden="true"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 900 900"
      >
        <defs>
          <radialGradient id="heroGlow" cx="0" cy="0" r="1">
            <stop offset="0%" stopColor="rgba(209, 180, 151, 0.72)" />
            <stop offset="26%" stopColor="rgba(209, 180, 151, 0.2)" />
            <stop offset="100%" stopColor="rgba(209, 180, 151, 0)" />
          </radialGradient>
          <linearGradient id="signalStroke" x1="143" x2="733" y1="226" y2="632">
            <stop offset="0%" stopColor="#bec7b7" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#6b7a65" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#9a7b5a" stopOpacity="0.3" />
          </linearGradient>
          <filter id="signalBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur result="blur" stdDeviation="9" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="480" cy="420" fill="url(#heroGlow)" r="262" />
        <g className="field-drift-slow">
          <circle className="continuity-ring" cx="480" cy="420" r="306" />
          <circle className="continuity-ring" cx="480" cy="420" r="236" />
          <circle className="continuity-ring" cx="480" cy="420" r="164" />
        </g>

        <g className="field-drift-fast opacity-80">
          <path
            className="contour-line"
            d="M150 430C180 293 286 198 444 184C621 168 746 239 768 378C789 502 708 644 560 685C411 726 215 658 162 528C150 499 146 465 150 430Z"
          />
          <path
            className="contour-line"
            d="M190 492C189 348 284 260 418 247C552 234 665 305 691 413C715 510 658 598 541 635C419 674 276 623 219 542C203 519 193 503 190 492Z"
          />
          <path
            className="contour-line"
            d="M277 520C262 437 304 356 376 323C470 280 595 305 637 398C671 478 622 553 540 592C446 636 301 612 277 520Z"
          />
        </g>

        <g className="field-drift-medium">
          <path
            d="M165 497C249 471 304 410 350 318C388 241 476 213 553 252C630 290 663 377 634 468C608 545 549 616 627 692"
            stroke="url(#signalStroke)"
            strokeLinecap="round"
            strokeWidth="3.4"
          />
          <path
            className="signal-thread"
            d="M211 565C308 617 432 634 534 579C620 532 673 458 703 373"
          />
          <path
            className="signal-thread"
            d="M262 247C333 198 422 177 509 193C583 206 641 242 688 300"
          />
          <path
            className="signal-thread"
            d="M252 322L300 254L397 409L515 286L598 447L676 337"
            filter="url(#signalBlur)"
          />
        </g>

        <g className="field-drift-fast">
          {nodes.map((node) => (
            <g
              className="signal-node"
              key={`${node.x}-${node.y}`}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                fill="rgba(107, 122, 101, 0.14)"
                r={node.size * 2}
              />
              <circle cx={node.x} cy={node.y} fill="#6b7a65" r={node.size} />
              <circle cx={node.x} cy={node.y} fill="#fffdf9" r={node.size / 2.5} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
