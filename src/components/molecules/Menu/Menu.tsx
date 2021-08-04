import React, { useState } from 'react';

export interface MenuProps {
    children?: React.ReactNode;
    map(param: (child, i) => JSX.Element): JSX.Element;
}

const Menu = (children: MenuProps): JSX.Element => {
    const [state, setState] = useState({});

    const handleClick = (e, item) => {
        e.stopPropagation();
        // eslint-disable-next-line @typescript-eslint/no-shadow
        setState((state) => ({
            ...state,
            [item]: !state[item],
        }));
    };

    // if (React.Children.count(children)) {
    // return React.Children.map(children, (child?: any, i) => {
    return children.map((child, i) => {
        const category = !child?.category ? null : (
            <div className="nav-item category">{child?.category}</div>
        );
        if (!child?.children) {
            return (
                <>
                    {category}
                    <li onClick={(e) => handleClick(e, child?.name)} key={i}>
                        <a className="nav-link" href={child?.url}>
                            <div className="icon">
                                {child?.icon ? child?.icon : '-'}
                            </div>
                            <span>{child?.name}</span>
                        </a>
                    </li>
                </>
            );
        }
        return (
            <>
                {category}
                <li onClick={(e) => handleClick(e, child?.name)} key={i}>
                    <div className="nav-link">
                        <div className="icon">icon</div>
                        <span>{child?.name}</span>
                    </div>
                    <ul
                        className={`nav-submenu ${
                            state[child?.name] ? 'open' : ''
                        }`}>
                        {Menu(child?.children)}
                    </ul>
                </li>
            </>
        );
    });
    // }
};

export default Menu;
