import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Wrapper } from './styles';

export interface EditorProps {
    /**
     * default value of editor
     */
    value?: string;
    /**
     * handle change editor data
     */
    onChange?: (value: string) => void;
    /**
     * default toolbar items
     */
    toolbarItems?: [];
}

const getBase64 = async (file: Blob) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function uploadPlugin(editor: {
    plugins: {
        get: (arg0: string) => {
            (): any;
            new (): any;
            createUploadAdapter: (loader: any) => {
                upload: () => Promise<{ default: unknown }>;
            };
        };
    };
}) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => ({
        upload: async () => {
            const file = await loader.file;
            const base64 = await getBase64(file);

            return {
                default: base64,
            };
        },
    });
}

export const defaultToolbarItems = [
    'undo',
    'redo',
    '|',
    'heading',
    '|',
    'bold',
    'italic',
    'blockquote',
    '|',
    'link',
    'uploadImage',
    'mediaembed',
    'inserttable',
    '|',
    'bulletedList',
    'numberedList',
    'outdent',
    'indent',
];

const EditorV2 = ({ value, onChange, toolbarItems }: EditorProps) => {
    return (
        <Wrapper>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: {
                        items: toolbarItems || defaultToolbarItems,
                        shouldNotGroupWhenFull: true,
                    },
                    extraPlugins: [uploadPlugin],
                }}
                data={value}
                onChange={(_event, editor: any) => {
                    const data = editor?.getData();

                    onChange?.(data);
                }}
            />
        </Wrapper>
    );
};

export default EditorV2;
