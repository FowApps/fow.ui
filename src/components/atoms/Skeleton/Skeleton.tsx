import React from 'react';
import Space from '../Space';
import { Line } from './styles';

export interface SkeletonProps {
    /**
     * width of line (default value 100%)
     */
    width?: number;
    /**
     * height of line
     */
    height: number;
    /**
     * count of lines
     */
    lines?: number;
    /**
     * variant of lines
     */
    variant: 'flat' | 'pill' | 'circle';
}

const Skeleton = ({
    width,
    height,
    lines,
    variant,
}: SkeletonProps): JSX.Element =>
    lines ? (
        <Space direction="vertical" inline={false} align="start">
            {[...Array(lines)].map((_line, idx) => (
                <Line
                    width={width}
                    height={height}
                    variant={variant}
                    key={idx}
                />
            ))}
        </Space>
    ) : (
        <Line width={width} height={height} variant={variant} />
    );

export default Skeleton;
