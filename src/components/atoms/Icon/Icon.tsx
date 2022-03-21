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

type FowIconsType =
    | 'fow-logo'
    | 'fow-order-dots'
    | 'fow-pipeline'
    | 'fow-person-star'
    | 'fow-qoute'
    | 'fow-person-plus'
    | 'fow-activity-list'
    | 'fow-lock'
    | 'fow-academy'
    | 'fow-book'
    | 'fow-info'
    | 'fow-cog'
    | 'fow-office'
    | 'fow-google';
// @ts-ignore
export interface IconProps extends FontAwesomeIconProps {
    icon: FontAwesomeIconProps['icon'] | FowIconsType;
}

const Icon = ({ icon, ...rest }: IconProps): JSX.Element => (
    // @ts-ignore
    <FontAwesomeIcon icon={icon} {...rest} />
);

export default Icon;
