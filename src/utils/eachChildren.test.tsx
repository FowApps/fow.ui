import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';

import { map } from './eachChildren';

Enzyme.configure({ adapter: new Adapter() });

describe('eachChildren util', () => {
    test('should prop add', () => {
        const addRequiredToChildrenProp = (el: any) => {
            let cloneEl = el;
            if (el?.props?.['aria-required']) {
                cloneEl = React.cloneElement(el, {
                    ...el.props,
                    required: true,
                });
            }
            return cloneEl;
        };

        const Wrapper = ({ children }) => (
            <div>{map(children, addRequiredToChildrenProp)}</div>
        );
        const SubComponent = () => (
            <Wrapper>
                <div>
                    <div aria-required>Required</div>
                </div>
                <div aria-required={false}>Not Required</div>
            </Wrapper>
        );

        const subComponentWrapper = mount(<SubComponent />);
        const childrenComponentWithTestProp = subComponentWrapper.find(
            'div[aria-required=true]',
        );
        expect(childrenComponentWithTestProp.text()).toEqual('Required');
    });
});
