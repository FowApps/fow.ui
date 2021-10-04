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
    reverse: boolean;
    inline: boolean;
    justify?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'space-around'
        | 'space-between';
};

export const StyledSpace = styled.div<SpaceProps>`
    display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
    justify-content: ${(props) => props.justify};
    overflow: hidden;
    width: ${(props) => (props.inline ? 'auto' : '100%')};
    ${(props) => setAlign(props.align)}
    ${(props) =>
        setSpaceAndDirection(props.direction, props.size, props.reverse)}

    ${(props) =>
        props.wrap &&
        props.direction === 'horizontal' &&
        css`
            flex-wrap: wrap;
            margin-bottom: -${props.theme.fow.spacing.medium};

            > * {
                margin-bottom: ${props.theme.fow.spacing.medium};
            }
        `}
`;
