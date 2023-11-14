import styled from 'styled-components';

export const Wrapper = styled.div`
    .ck-toolbar {
        border-radius: 4px 4px 0 0 !important;
        border: 1px solid rgba(145, 158, 171, 0.32) !important;
        border-bottom: none !important;
    }

    .ck-editor__editable {
        border-radius: 0 0 4px 4px !important;
        border: 1px solid rgba(145, 158, 171, 0.32) !important;
        height: 135px !important;
        padding: 10px !important;

        p {
            margin: 0 0 5px !important;
        }
    }

    &:hover {
        .ck-toolbar {
            border-color: #fd725f !important;
        }

        .ck-editor__editable {
            border-color: #fd725f !important;
            border-top-color: rgba(145, 158, 171, 0.32) !important;
        }
    }

    .ck-button {
        color: #6a6f7b !important;
        cursor: pointer !important;
    }

    .ck-button.ck-on {
        color: #fd725f !important;
        background: #ffe3df !important;
    }

    .ck-button:active,
    .ck-button:focus {
        border-color: #fd725f !important;
        box-shadow: 0 0 3px #fd725f !important;
    }

    .ck-button.ck-on:not(.ck-disabled):hover {
        background: #f8d3ce !important;
    }
`;
