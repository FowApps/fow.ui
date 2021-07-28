import styled from 'styled-components';
import setColor from './color';
import setSize from './size';

type AvatarProps = {
    color: 'primary' | 'grey';
    src?: string;
    size: 'xsmall' | 'small' | 'medium' | 'large';
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

    ${(props) =>
        props.src &&
        `background-size: cover;
      background-image: url('${props.src}');
    `}

  p {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 13px;
        font-style: normal;
        line-height: 16px;
        letter-spacing: 0.2px;
        ${(props) => props.src && `display:none;`}
    }
`;
