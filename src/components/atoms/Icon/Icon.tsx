import React from 'react';
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import FowIcons from './FowIcons';

library.add(far, fas);
library.add(FowIcons);

type FowIconsType = 'fow-logo';
// @ts-ignore
export interface IconProps extends FontAwesomeIconProps {
    icon: FontAwesomeIconProps['icon'] | FowIconsType;
}

const Icon = ({ icon, ...rest }: IconProps): JSX.Element => (
    // @ts-ignore
    <FontAwesomeIcon icon={icon} fixedWidth {...rest} />
);

export default Icon;
