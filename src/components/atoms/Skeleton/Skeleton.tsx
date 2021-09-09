import React from 'react';
import Space from '../Space';
import { Line } from './styles';

export interface SkeletonProps {
    width?: number;
    height: number;
    lines?: number;
}

const Skeleton = ({ width, height, lines }: SkeletonProps): JSX.Element =>
    lines ? (
        <Space direction="vertical" inline={false} align="start">
            {[...Array(lines)].map((_line, idx) => (
                <Line width={width} height={height} key={idx} />
            ))}
        </Space>
    ) : (
        <Line width={width} height={height} />
    );

export default Skeleton;
