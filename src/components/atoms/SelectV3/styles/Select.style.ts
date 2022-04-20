import styled from 'styled-components';
import Card from '../../Card';
import Space from '../../Space';

type OptionsWrapperProps = {
    allowSearch?: boolean;
};

export const InputWrapper = styled.div`
    position: relative;
`;

export const BadgeHolder = styled(Space)`
    position: absolute;
    right: 32px;
    top: 8px;
    user-select: none;
`;

export const Surface = styled(Card)`
    padding-top: 0;
    position: relative;
    max-height: 280px;
    min-height: 280px;
    overflow-y: auto;
    box-shadow: ${(props) => props.theme.fow.shadows.z12};
    border: 1px solid
        ${(props) => props.theme.fow.colors.greyDark.transparent32};

    label {
        transition: background-color 0.3s ease;
    }

    label:hover {
        background-color: #fafafa;
    }
`;

export const SearchWrapper = styled.div`
    position: fixed;
    width: calc(100% - 5rem);
    background-color: #fff;
    z-index: 12;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
`;

export const EmptyWrapper = styled.div``;

export const OptionsWrapper = styled.div<OptionsWrapperProps>`
    padding-top: ${(props) => (props.allowSearch ? 56 : 12)}px;
`;
