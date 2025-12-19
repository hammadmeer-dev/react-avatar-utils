import React from 'react';

export interface DefaultAvatarProps extends React.SVGProps<SVGSVGElement> {
    gender?: 'male' | 'female' | 'neutral';
    size?: number;
}

export const DefaultAvatar: React.FC<DefaultAvatarProps> = ({
    gender = 'neutral',
    size = 40,
    style,
    ...props
}) => {
    const renderIcon = () => {
        switch (gender) {
            case 'male':
                return (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor" />
                );
            case 'female':
                return (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor" />
                );
            case 'neutral':
            default:
                return (
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                );
        }
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ display: 'inline-block', flexShrink: 0, borderRadius: '50%', background: '#ccc', ...style }}
            {...props}
            aria-label={`${gender} avatar`}
        >
            {renderIcon()}
        </svg>
    );
};
