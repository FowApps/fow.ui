/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Icon } from '../../..';
import Subtitle from '../../atoms/Typography/Subtitle';
import { ItemWrapper, Item, StepNumber } from './styles';

export type StepProps = {
    stepIndex?: number;
    stepNumber?: number;
    disabled?: boolean;
    active?: boolean;
    style?: React.CSSProperties;
    title?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onStepClick?: (index?: number) => void;
    status?: Status.PROCESS | Status.WAIT | Status.FINISH;
};

export enum Status {
    PROCESS = 'process',
    WAIT = 'wait',
    FINISH = 'finish',
}
export const accessibilityProps: {
    role?: string;
    tabIndex?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
} = {};
const Step = ({
    onClick,
    onStepClick,
    stepIndex,
    disabled,
    title,
    stepNumber,
    active,
    status = Status.PROCESS,
    ...rest
}: StepProps): JSX.Element => {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        onStepClick?.(stepIndex);
    };

    if (!disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabIndex = 0;
        accessibilityProps.onClick = handleClick;
    } else {
        accessibilityProps.role = 'div';
    }

    return (
        <ItemWrapper isFinish={status === Status.FINISH} {...rest}>
            <Item onClick={handleClick} {...accessibilityProps}>
                <StepNumber
                    isActive={active}
                    isFinish={status === Status.FINISH}>
                    {status === Status.FINISH ? (
                        <Icon icon="check" size="sm" />
                    ) : (
                        stepNumber
                    )}
                </StepNumber>
                <Subtitle
                    color={
                        active || status === Status.FINISH
                            ? 'primary'
                            : 'disabled'
                    }
                    level={2}>
                    {title}
                </Subtitle>
            </Item>
        </ItemWrapper>
    );
};

Step.displayName = 'Step';

export default Step;
