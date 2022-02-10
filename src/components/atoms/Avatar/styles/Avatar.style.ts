import styled from 'styled-components';
import setColor from './color';
import setSize from './size';
import setShape from './shape';

type AvatarProps = {
    color: 'primary' | 'secondary';
    src?: string;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded' | 'circle' | 'flat';
};

export const StyledAvatar = styled.div<AvatarProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 200ms ease;

    ${(props) => setColor(props.color)}
    ${(props) => setSize(props.size)}
    ${(props) => setShape(props.shape)}


    ${(props) =>
        props.src &&
        `background-size: cover;
        background-image: url('${props.src}');
    `}

    h3 {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0.2px;
        ${(props) => props.src && `display:none;`}
    }
`;
