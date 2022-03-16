/* eslint-disable import/prefer-default-export */
// Vendors
import Form, { useForm, List } from 'rc-field-form';

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
import Link from './components/atoms/Typography/Link';

// Form
import FormField from './components/atoms/Form/FormField';
import FormBuilder from './components/atoms/Form/FormBuilder';
import { FormConfig } from './components/atoms/Form/FormBuilderConfig';

// Atoms
export { default as Avatar } from './components/atoms/Avatar';
export { default as Badge } from './components/atoms/Badge';
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
export { default as Input } from './components/atoms/Input';
export { default as Skeleton } from './components/atoms/Skeleton';
export { default as Tooltip } from './components/atoms/Tooltip';
export { default as PulseDot } from './components/atoms/PulseDot';
export { default as Switch } from './components/atoms/Switch';
export { default as Popover } from './components/atoms/Popover';
export { default as Radio } from './components/atoms/Radio';
export { default as InputNumber } from './components/atoms/InputNumber';
export { default as ProgressBar } from './components/atoms/ProgressBar';
export { default as Select } from './components/atoms/Select';
export { default as DiscountInput } from './components/atoms/DiscountInput';
export { default as PriceInput } from './components/atoms/PriceInput';
export { default as Textarea } from './components/atoms/TextArea';
export { default as URLInput } from './components/atoms/URLInput';
export { default as EmailInput } from './components/atoms/EmailInput';
export { default as PhoneInput } from './components/atoms/PhoneInput';

export const Typography = {
    Heading,
    Subtitle,
    Body,
    Overline,
    Caption,
    Link,
};

export const Grid = {
    Col,
    Row,
    Container,
};

export const FormSystem = {
    Form,
    Field: FormField,
    useForm,
    Builder: FormBuilder,
    BuilderConfig: FormConfig,
    List,
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
export { default as Table } from './components/molecules/Table';
export { default as LabelInput } from './components/molecules/LabelInput';
export { default as Summary } from './components/molecules/Summary';
export { default as DatePicker } from './components/molecules/DatePicker';
export { default as DateRangePicker } from './components/molecules/DateRangePicker';
export { default as OverviewCard } from './components/molecules/OverviewCard';
export { default as Editor } from './components/molecules/Editor';
export { default as Section } from './components/molecules/Section';
export { default as SelectV2 } from './components/molecules/SelectV2';

// Extras
export { default as Navigation } from './components/molecules/Navigation';
export { default as Sidebar } from './components/molecules/Sidebar';
export { default as GridLayout } from './components/molecules/GridLayout';

// Hooks
export { default as useToast } from './components/molecules/Toast/useToast';
export { default as useDisclosure } from './hooks/useDisclosure';
export { default as useForm } from './hooks/useForm';
export { default as useDrawer } from './hooks/useDrawer';
export { default as useDrawerForm } from './hooks/useDrawerForm';
export { default as useConfirm } from './hooks/useConfirm';

// Providers
export { FowThemeProvider } from './theme';
