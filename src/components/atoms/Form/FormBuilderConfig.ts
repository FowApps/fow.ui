/* eslint-disable global-require */
import { Rule } from 'rc-field-form/lib/interface';

import { tr } from './locales/tr';
import { en } from './locales/en';

import Input from '../Input';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import URLInput from '../URLInput';
import EmailInput from '../EmailInput';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

import Editor from '../../molecules/Editor';
import DatePicker from '../../molecules/DatePicker';
import DateRangePicker from '../../molecules/DateRangePicker';
import PhoneInput from '../PhoneInput';
import PriceInput from '../PriceInput';
import SelectV2 from '../../molecules/SelectV2';

type Field = {
    field: any;
    type: string;
    predefineRules?: Rule[];
};

const fieldTypeMap: any = {};
const localization = { tr, en };

(() => {
    const lang = localStorage.getItem('language') || 'en';
    const builtInFields: Field[] = [
        {
            type: 'text',
            field: Input,
            predefineRules: [
                {
                    max: 255,
                    message: localization[lang].max255,
                },
                {
                    type: 'string',
                    message: localization[lang].string,
                },
            ],
        },
        {
            type: 'textarea',
            field: TextArea,
            predefineRules: [
                {
                    type: 'string',
                    message: localization[lang].string,
                },
            ],
        },
        {
            type: 'number',
            field: InputNumber,
            predefineRules: [
                {
                    type: 'number',
                    message: localization[lang].number,
                },
            ],
        },
        {
            type: 'url',
            field: URLInput,
            predefineRules: [
                {
                    pattern: new RegExp(
                        /[(http(s)?)://(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g,
                    ),
                    message: localization[lang].invalidUrl,
                },
            ],
        },
        {
            type: 'email',
            field: EmailInput,
            predefineRules: [
                {
                    pattern: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                    message: localization[lang].invalidEmail,
                },
            ],
        },
        {
            type: 'phone',
            field: PhoneInput,
        },
        {
            type: 'rich-textarea',
            field: Editor,
        },
        {
            type: 'checkbox',
            field: Checkbox,
        },
        {
            type: 'checkbox-group',
            field: Checkbox.Group,
        },
        {
            type: 'radio-group',
            field: Radio.Group,
        },
        {
            type: 'single-select',
            field: SelectV2,
        },
        {
            type: 'multiple-select',
            field: SelectV2,
        },
        {
            type: 'date',
            field: DatePicker,
        },
        {
            type: 'date-range',
            field: DateRangePicker,
        },
        {
            type: 'date-time',
            field: DatePicker,
        },
        {
            type: 'date-time-range',
            field: DateRangePicker,
        },
        {
            type: 'price',
            field: PriceInput,
        },
    ];

    builtInFields.forEach((field) => {
        fieldTypeMap[field.type] = {
            component: field.field,
            rules: field.predefineRules || [],
        };
    });
})();

const addField = (fields: Field[]) => {
    if (fields.length > 0) {
        fields.forEach((field) => {
            fieldTypeMap[field.type] = {
                component: field.field,
                rules: field.predefineRules || [],
            };
        });
    } else {
        console.error(`you must add at least one field`);
    }
};

const getFields = () => fieldTypeMap;

export const FormConfig = {
    fields: {
        addField,
        getFields,
    },
};
