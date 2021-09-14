import React from 'react';
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far, fas);

const Icon = ({ icon, ...rest }: FontAwesomeIconProps): JSX.Element => (
    <FontAwesomeIcon icon={icon} {...rest} />
);

export default Icon;
