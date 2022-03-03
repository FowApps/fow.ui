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
import Select from '../Select';

import Editor from '../../molecules/Editor';
import DatePicker from '../../molecules/DatePicker';
import DateRangePicker from '../../molecules/DateRangePicker';

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
                    type: 'url',
                    message: localization[lang].invalidUrl,
                },
            ],
        },
        {
            type: 'email',
            field: EmailInput,
            predefineRules: [
                {
                    type: 'email',
                    message: localization[lang].invalidEmail,
                },
            ],
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
            field: Select,
        },
        {
            type: 'multiple-select',
            field: Select,
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
