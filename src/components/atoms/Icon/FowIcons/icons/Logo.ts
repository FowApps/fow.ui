import {
    IconDefinition,
    IconName,
    IconPrefix,
} from '@fortawesome/fontawesome-common-types';

const fowLogo: IconDefinition = {
    prefix: 'fas' as IconPrefix,
    iconName: 'fow-logo' as IconName,
    icon: [
        6, // viewbox width
        15, // viewbox height
        [],
        'f0001', // increase one for other icons
        'M1.63468 14.9899V9.17236H0V7.12034H1.63468V3.27303C1.63468 1.10818 2.81429 0 4.51388 0C5.02368 0.00387811 5.5281 0.11535 6 0.328416L5.72138 2.27743C5.38116 2.1433 5.02361 2.07051 4.66245 2.06185C4.05882 2.06185 3.58453 2.36956 3.58453 3.36491V7.13043H3.59391V9.18245H3.58524V15H1.63468V14.9899Z', // single line svg path
    ],
};

export default fowLogo;
