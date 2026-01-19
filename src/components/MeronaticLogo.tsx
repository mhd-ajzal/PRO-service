import React from "react";

export function MeronaticLogo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <image
                href="/logo-icon.png"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid meet"
            />
        </svg>
    );
}
