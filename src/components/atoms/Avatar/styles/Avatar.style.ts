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

  h3 {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-style: normal;
        font-size: ${(props) => {
            switch (props.size) {
                case 'xsmall':
                    return '0.9rem';
                case 'small':
                    return '1rem';
                case 'medium':
                    return '1.3rem';
                case 'large':
                    return '1.6rem';
                default:
                    return '';
            }
        }};
        line-height: 16px;
        letter-spacing: 0.2px;
        ${(props) => props.src && `display:none;`}
    }
`;
