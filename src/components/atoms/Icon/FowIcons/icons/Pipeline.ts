import {
    IconDefinition,
    IconName,
    IconPrefix,
} from '@fortawesome/fontawesome-common-types';

const fowLogo: IconDefinition = {
    prefix: 'fas' as IconPrefix,
    iconName: 'fow-pipeline' as IconName,
    icon: [
        13, // viewbox width
        12, // viewbox height
        [],
        'f0003', // increase one for other icons
        'M1.16667 6.66667H5.16667C5.53333 6.66667 5.83333 6.36667 5.83333 6V0.666667C5.83333 0.3 5.53333 0 5.16667 0H1.16667C0.8 0 0.5 0.3 0.5 0.666667V6C0.5 6.36667 0.8 6.66667 1.16667 6.66667ZM1.16667 12H5.16667C5.53333 12 5.83333 11.7 5.83333 11.3333V8.66667C5.83333 8.3 5.53333 8 5.16667 8H1.16667C0.8 8 0.5 8.3 0.5 8.66667V11.3333C0.5 11.7 0.8 12 1.16667 12ZM7.83333 12H11.8333C12.2 12 12.5 11.7 12.5 11.3333V6C12.5 5.63333 12.2 5.33333 11.8333 5.33333H7.83333C7.46667 5.33333 7.16667 5.63333 7.16667 6V11.3333C7.16667 11.7 7.46667 12 7.83333 12ZM7.16667 0.666667V3.33333C7.16667 3.7 7.46667 4 7.83333 4H11.8333C12.2 4 12.5 3.7 12.5 3.33333V0.666667C12.5 0.3 12.2 0 11.8333 0H7.83333C7.46667 0 7.16667 0.3 7.16667 0.666667Z', // single line svg path
    ],
};

export default fowLogo;
