/* eslint-disable import/prefer-default-export */
// Grid

import Col from './components/atoms/Col';
import Row from './components/atoms/Row';
import Container from './components/atoms/Container';

// Typography
import Heading from './components/atoms/Typography/Heading';
import Subtitle from './components/atoms/Typography/Subtitle';
import Body from './components/atoms/Typography/Body';
import Overline from './components/atoms/Typography/Overline';
import Caption from './components/atoms/Typography/Caption';

// Atoms
export { default as Avatar } from './components/atoms/Avatar';
export { default as Icon } from './components/atoms/Icon';
export { default as BoxIcon } from './components/atoms/BoxIcon';
export { default as Checkbox } from './components/atoms/Checkbox';
export { default as Space } from './components/atoms/Space';
export { default as Chip } from './components/atoms/Chip';
export { default as Label } from './components/atoms/Label';
export { default as Divider } from './components/atoms/Divider';
export { default as Card } from './components/atoms/Card';
export { default as Loader } from './components/atoms/Loader';
export { default as Button } from './components/atoms/Button';
export { default as Select } from './components/atoms/Select/StaticSelect';
export { default as AsyncSelect } from './components/atoms/Select/AsyncSelect';
export { default as AsyncPaginateSelect } from './components/atoms/Select/AsyncPaginateSelect';
export { default as Form } from './components/atoms/Form';
export { default as Input } from './components/atoms/Input';
export { default as Skeleton } from './components/atoms/Skeleton';

export const Typography = {
    Heading,
    Subtitle,
    Body,
    Overline,
    Caption,
};

export const Grid = {
    Col,
    Row,
    Container,
};

// Molecules
export { default as Accordion } from './components/molecules/Accordion';
export { default as Timeline } from './components/molecules/Timeline';
export { default as Alert } from './components/molecules/Alert';
export { default as Carousel } from './components/molecules/Carousel';
export { default as Message } from './components/molecules/Message';
export { default as Calendar } from './components/molecules/Calendar';
export { default as Dropdown } from './components/molecules/Dropdown';
export { default as Menu } from './components/molecules/Menu';
export { default as Tabs } from './components/molecules/Tabs';
export { default as Board } from './components/molecules/Board';
export { default as Upload } from './components/molecules/Upload';
export { default as Drawer } from './components/molecules/Drawer';

// Hooks
export { default as useToast } from './components/molecules/Toast/useToast';

// Providers
export { FowThemeProvider } from './theme';
