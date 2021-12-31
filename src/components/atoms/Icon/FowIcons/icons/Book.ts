import {
    IconDefinition,
    IconName,
    IconPrefix,
} from '@fortawesome/fontawesome-common-types';

const fowBook: IconDefinition = {
    prefix: 'fas' as IconPrefix,
    iconName: 'fow-book' as IconName,
    icon: [
        16, // viewbox width
        16, // viewbox height
        [],
        'f0010', // increase one for other icons
        'M13.704 0H3.11144C2.12877 0 0.666992 0.6392 0.666992 2.4V13.6C0.666992 15.3608 2.12877 16 3.11144 16H15.3337V14.4H3.12121C2.74477 14.3904 2.29662 14.244 2.29662 13.6C2.29662 13.5192 2.30396 13.4472 2.31618 13.3816C2.40744 12.9216 2.79121 12.808 3.1204 12.8H14.5188C14.5335 12.8 14.5441 12.7928 14.5588 12.792H15.3337V1.6C15.3337 0.7176 14.6028 0 13.704 0ZM13.704 11.2H2.29662V2.4C2.29662 1.7552 2.74477 1.6096 3.11144 1.6H8.81514V7.2L10.4448 6.4L12.0744 7.2V1.6H13.704V11.2Z',
        // single line svg path
    ],
};

export default fowBook;
