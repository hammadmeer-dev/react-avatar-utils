import React from 'react';
import { stringToColor, getContrastColor, getInitials } from './utils';

export interface LetterAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    size?: number;
    radius?: number;
}

export const LetterAvatar: React.FC<LetterAvatarProps> = ({
    name,
    size = 40,
    radius,
    style,
    ...props
}) => {
    const backgroundColor = stringToColor(name);
    const color = getContrastColor(backgroundColor);
    const initials = getInitials(name);

    const baseStyle: React.CSSProperties = {
        backgroundColor,
        color,
        width: size,
        height: size,
        borderRadius: radius ?? size / 2, // Default to circle
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        fontSize: size * 0.4,
        fontWeight: 'bold',
        userSelect: 'none',
        ...style,
    };

    return (
        <div style={baseStyle} {...props} aria-label={name}>
            {initials}
        </div>
    );
};
