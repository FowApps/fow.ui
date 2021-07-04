import styled, { css } from 'styled-components';
import { setAlign } from './align';
import { setSpaceAndDirection } from './space';

type SpaceProps = {
    size:
        | 'xxsmall'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'xxlarge'
        | 'xxxlarge';
    align: 'start' | 'end' | 'center' | 'baseline';
    direction: 'horizontal' | 'vertical';
    wrap: number;
};

export const StyledSpace = styled.div<SpaceProps>`
    display: inline-flex;
    ${(props) => setAlign(props.align)}
    ${(props) => setSpaceAndDirection(props.direction, props.size)}

    ${(props) =>
        props.wrap &&
        props.direction === 'horizontal' &&
        css`
            flex-wrap: wrap;
            margin-bottom: -${props.theme.spacing.medium};

            > * {
                margin-bottom: ${props.theme.spacing.medium};
            }
        `}
`;
