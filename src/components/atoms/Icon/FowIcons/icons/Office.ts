import {
    IconDefinition,
    IconName,
    IconPrefix,
} from '@fortawesome/fontawesome-common-types';

const fowOffice: IconDefinition = {
    prefix: 'fas' as IconPrefix,
    iconName: 'fow-office' as IconName,
    icon: [
        30, // viewbox width
        30, // viewbox height
        [],
        'f00013', // increase one for other icons
        'M 17.941406 4 L 5 8.4003906 L 5 21.599609 L 10 19.949219 L 10 8.9492188 L 18 7.3007812 L 18 23.25 L 5 21.599609 L 17.941406 26 L 25 24.349609 L 25 5.6503906 L 17.941406 4 z', // single line svg path
    ],
};

export default fowOffice;
