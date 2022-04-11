import React from 'react';
import Icon from '../../../atoms/Icon';
import Space from '../../../atoms/Space';
import Subtitle from '../../../atoms/Typography/Subtitle';

const NotFoundContent = ({ title }) => (
    <Space
        direction="vertical"
        align="center"
        justify="center"
        inline={false}
        style={{ padding: 24 }}>
        <Icon color="#919EAB" size="2x" icon={['far', 'folder-open']} />
        <Subtitle color="disabled">{title}</Subtitle>
    </Space>
);

export default NotFoundContent;
