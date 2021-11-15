import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


const Header = () => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState('');

    const onClick = (path) => {
        setActiveItem(path);
        history.push(path);
    }

    return (
        <Menu style={{ marginTop: '20px' }}>
            <Menu.Item
                name='/'
                active={activeItem === '/'}
                onClick={() => onClick('/')}
            >
                Streamer
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='/streams/show'
                    active={activeItem === '/streams/show'}
                    onClick={() => onClick('/streams/show')}
                >
                    Streams
                </Menu.Item>
                <Menu.Item
                    name='/'
                    active={activeItem === '/login'}
                    onClick={() => onClick('/')}
                >
                    Login
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;