import React from "react";
import { Menu } from 'semantic-ui-react';

const activeItem = 'browse';
const click = () => alert('click');

const Header = () => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
                active={activeItem === 'browse'}
                onClick={click}
            >
                Browse
            </Menu.Item>

            <Menu.Item
                name='submit'
                active={activeItem === 'submit'}
                onClick={click}
            >
                Submit
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    active={activeItem === 'signup'}
                    onClick={click}
                >
                    Sign Up
                </Menu.Item>

                <Menu.Item
                    name='help'
                    active={activeItem === 'help'}
                    onClick={click}
                >
                    Help
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;