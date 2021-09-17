import React from 'react';
import type { PlacementTypes, PushState, DrawerProps } from '../Drawer';

interface IGetDrawerStyles {
    zIndex?: number;
    internalPush: boolean;
    placement: PlacementTypes;
    style?: React.CSSProperties;
    push: boolean | PushState;
    defaultPushState: PushState;
}

const getPushTransform = (
    _placement: PlacementTypes,
    push: DrawerProps['push'],
    defaultPushState: PushState,
) => {
    let distance: number | string;
    if (typeof push === 'boolean') {
        distance = push ? defaultPushState.distance : 0;
    } else {
        distance = push!.distance;
    }
    distance = parseFloat(String(distance || 0));

    if (_placement === 'left' || _placement === 'right') {
        return `translateX(${_placement === 'left' ? distance : -distance}px)`;
    }
    if (_placement === 'top' || _placement === 'bottom') {
        return `translateY(${_placement === 'top' ? distance : -distance}px)`;
    }
    return '';
};

const getDrawerStyles = ({
    zIndex,
    internalPush,
    placement,
    style,
    push,
    defaultPushState,
}: IGetDrawerStyles) => ({
    zIndex,
    transform: internalPush
        ? getPushTransform(placement, push, defaultPushState)
        : undefined,
    ...style,
});

export default getDrawerStyles;
