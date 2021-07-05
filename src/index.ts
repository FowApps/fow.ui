/* eslint-disable import/prefer-default-export */
// Grid

import Col from './components/atoms/Col';
import Row from './components/atoms/Row';
import Container from './components/atoms/Container';

// Typography
import Heading from './components/atoms/Heading';
import SubTitle from './components/atoms/Subtitle';
import Body from './components/atoms/Body';

export { default as Avatar } from './components/atoms/Avatar';
export { default as Icon } from './components/atoms/Icon';
export { default as Checkbox } from './components/atoms/Checkbox';
export { default as Space } from './components/atoms/Space';
export { default as Chip } from './components/atoms/Chip';
export { default as Divider } from './components/atoms/Divider';

export const Typography = {
    Heading,
    SubTitle,
    Body,
};

export const Grid = {
    Col,
    Row,
    Container,
};

export { FowThemeProvider } from './theme';
