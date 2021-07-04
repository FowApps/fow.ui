import styled from 'styled-components';
import setColor from './color';

type AvatarProps = {
    use: 'primary' | 'grey';
    src?: string;
};

export const StyledAvatar = styled.div<AvatarProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background-color 200ms ease;
    cursor: pointer;

    ${(props) => setColor(props.use)}

    ${(props) =>
        props.src &&
        `background-size: cover;
      background-image: url('${props.src}');
    `}

  p {
        margin: 0;
        padding: 0;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.2px;
        ${(props) => props.src && `display:none;`}
    }
`;
