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
     * border radius of lines
     */
    radius?: number;
    /**
     * circle border radius of lines
     */
    circleRadius?: boolean;
}

const Skeleton = ({
    width,
    height,
    lines,
    radius,
    circleRadius,
}: SkeletonProps): JSX.Element =>
    lines ? (
        <Space direction="vertical" inline={false} align="start">
            {[...Array(lines)].map((_line, idx) => (
                <Line
                    width={width}
                    height={height}
                    radius={radius}
                    circleRadius={circleRadius}
                    key={idx}
                />
            ))}
        </Space>
    ) : (
        <Line width={width} height={height} />
    );

export default Skeleton;
