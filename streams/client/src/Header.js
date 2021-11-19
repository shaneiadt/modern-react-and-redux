import React from "react";
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Auth from "./components/Auth/Auth";


const Header = () => {
    const history = useHistory();

    const onClick = (path) => {
        history.push(path);
    }

    return (
        <Menu style={{ marginTop: '20px' }}>
            <Menu.Item
                onClick={() => onClick('/')}
            >
                Streamer
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    onClick={() => onClick('/streams/show')}
                >
                    Streams
                </Menu.Item>
                <Menu.Item>
                    <Auth />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;