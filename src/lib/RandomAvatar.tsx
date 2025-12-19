import React, { useMemo } from 'react';
import { stringToColor } from './utils';

export interface RandomAvatarProps extends React.SVGProps<SVGSVGElement> {
    seed?: string;
    size?: number;
}

export const RandomAvatar: React.FC<RandomAvatarProps> = ({
    seed,
    size = 40,
    style,
    ...props
}) => {
    const actualSeed = seed || Math.random().toString(36).substring(7);

    // Use the seed to generate a deterministic visual
    // We can generate a pattern or a random face
    // For MVP, simple geometric pattern:
    // Random color background + Random shape in center

    const generateParams = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = stringToColor(str);
        const shapeTypes = ['circle', 'rect', 'triangle'];
        const shapeIndex = Math.abs(hash) % shapeTypes.length;
        return { color, shape: shapeTypes[shapeIndex] };
    };

    const { color, shape } = useMemo(() => generateParams(actualSeed), [actualSeed]);

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            style={{ borderRadius: '50%', ...style }} // Circular avatar
            {...props}
            aria-label="Random avatar"
        >
            <rect width="100" height="100" fill={color} />

            <g transform="translate(25, 25)" fill="white" opacity="0.8">
                {shape === 'circle' && <circle cx="25" cy="25" r="20" />}
                {shape === 'rect' && <rect x="5" y="5" width="40" height="40" rx="5" />}
                {shape === 'triangle' && <polygon points="25,5 45,45 5,45" />}
            </g>
        </svg>
    );
};
