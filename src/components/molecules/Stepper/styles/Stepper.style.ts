import styled from 'styled-components';

type StatusProps = {
    isFinish?: boolean;
    isActive?: boolean;
};

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const ItemWrapper = styled.div<StatusProps>`
    position: relative;
    display: flex;

    &:not(:last-child) {
        flex: 1;

        &:after {
            content: ' ';
            position: absolute;
            top: 12px;
            flex: 1;
            width: calc(100% - 40px);
            height: 2px;
            margin-left: 60px;
            background-color: ${(props) =>
                props.isFinish
                    ? props.theme.fow.colors.primary.main
                    : props.theme.fow.colors.divider};
            transition: all 0.3s ease;
        }
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    cursor: pointer;
`;

export const StepNumber = styled.div<StatusProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.isActive || props.isFinish
            ? props.theme.fow.colors.primary.main
            : props.theme.fow.colors.grey.main};
    color: ${(props) => props.theme.fow.colors.common.white};
    transition: all 0.3s ease;
`;
