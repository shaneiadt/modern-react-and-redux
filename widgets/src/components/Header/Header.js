import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../Link/Link";

export const Header = ({ activeItem = '/', onItemClicked }) => {
    return (
        <Menu pointing secondary>
            <Menu.Item>
                <Link href='/' className=''>Accordion</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/list' className=''>Search</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/dropdown' className=''>Dropdown</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/translate' className=''>Translate</Link>
            </Menu.Item>
        </Menu>
    );
}