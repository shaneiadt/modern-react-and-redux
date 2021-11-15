import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

const activeItem = 'browse';

const Header = () => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
                active={activeItem === 'browse'}
            >
                <Link to="/">Browse</Link>
            </Menu.Item>
            <Menu.Item
                name='submit'
                active={activeItem === 'submit'}
            >
                <Link to="/2">Submit</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    active={activeItem === 'signup'}
                >
                    Sign Up
                </Menu.Item>
                <Menu.Item
                    name='help'
                    active={activeItem === 'help'}
                >
                    Help
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;