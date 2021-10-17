import React from 'react';
import Step from './Step';
import { Wrapper } from './styles';

export type StepperProps = {
    current?: number;
    initial?: number;
    onChange?: (current: number) => void;
    children: React.ReactNode;
};

export enum Status {
    PROCESS = 'process',
    WAIT = 'wait',
    FINISH = 'finish',
}

const Stepper = ({
    onChange,
    current = 0,
    initial = 0,
    children,
}: StepperProps): JSX.Element => {
    const onStepClick = (next: number) => {
        if (onChange && current !== next) {
            onChange(next);
        }
    };

    const steps = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'Step' ? child : null,
    );

    return (
        <Wrapper>
            {steps.map((step, idx) => {
                const stepNumber = initial + idx;
                const childProps = {
                    stepNumber: `${stepNumber + 1}`,
                    stepIndex: stepNumber,
                    key: stepNumber,
                    onStepClick: onChange && onStepClick,
                    ...step.props,
                };
                childProps.active = stepNumber === current;
                if (stepNumber === current) {
                    childProps.status = Status.PROCESS;
                } else if (stepNumber < current) {
                    childProps.status = Status.FINISH;
                } else {
                    childProps.status = Status.WAIT;
                }
                return React.cloneElement(step, childProps);
            })}
        </Wrapper>
    );
};

Stepper.Step = Step;

export default Stepper;
