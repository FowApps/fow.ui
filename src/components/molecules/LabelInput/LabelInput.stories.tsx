import { Meta, Story } from "@storybook/react";
import { LabelInputProps } from ".";
import LabelInput from "./LabelInput";

export default {
    title: 'Molecules/LabelInput',
    component: LabelInput
} as Meta;

  const Template: Story<LabelInputProps>  = (args) =>  <LabelInput {...args} />

  export const Default = Template.bind({});
  Default.args = {
    variant: 'filled',
    size: 'medium',
    shape: 'rounded',
    color: 'pink',
    text: 'Label',
};