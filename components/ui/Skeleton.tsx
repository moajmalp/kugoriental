
import React from 'react';

interface SkeletonProps {
    className?: string;
    variant?: 'rectangular' | 'circular' | 'text';
    width?: string | number;
    height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    variant = 'rectangular',
    width,
    height,
}) => {
    const baseStyles = 'bg-gray-200 dark:bg-gray-700 animate-pulse';

    const variantStyles = {
        rectangular: 'rounded-md',
        circular: 'rounded-full',
        text: 'rounded h-4 w-full',
    };

    const style: React.CSSProperties = {};
    if (width) style.width = width;
    if (height) style.height = height;

    return (
        <div
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            style={style}
            aria-hidden="true"
        />
    );
};

export default Skeleton;
