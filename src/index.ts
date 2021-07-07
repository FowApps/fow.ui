/* eslint-disable import/prefer-default-export */
// Grid

import Col from './components/atoms/Col';
import Row from './components/atoms/Row';
import Container from './components/atoms/Container';

// Typography
import Heading from './components/atoms/Typography/Heading';
import SubTitle from './components/atoms/Typography/Subtitle';
import Body from './components/atoms/Typography/Body';
import Overline from './components/atoms/Typography/Overline';
import Caption from './components/atoms/Typography/Caption';

export { default as Avatar } from './components/atoms/Avatar';
export { default as Icon } from './components/atoms/Icon';
export { default as BoxIcon } from './components/atoms/BoxIcon';
export { default as Checkbox } from './components/atoms/Checkbox';
export { default as Space } from './components/atoms/Space';
export { default as Chip } from './components/atoms/Chip';
export { default as Divider } from './components/atoms/Divider';
export { default as Card } from './components/atoms/Card';

export const Typography = {
    Heading,
    SubTitle,
    Body,
    Overline,
    Caption,
};

export const Grid = {
    Col,
    Row,
    Container,
};

export { FowThemeProvider } from './theme';
