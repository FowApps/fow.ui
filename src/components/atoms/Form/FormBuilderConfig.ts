import { lazy } from 'react';

const fieldTypeMap: any = {};
type Field = {
    field: React.ReactElement;
    type: string;
};

(() => {
    const builtInFields = [
        {
            type: 'text',
            field: lazy(() => import(`../Input`)),
        },
        {
            type: 'url',
            field: lazy(() => import(`../URLInput`)),
        },
    ];
    builtInFields.forEach((field) => {
        fieldTypeMap[field.type] = field.field;
    });
})();

const addField = (fields: Field[]) => {
    if (fields.length > 0) {
        fields.forEach((field) => {
            fieldTypeMap[field.type] = field.field;
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
