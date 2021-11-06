import React from "react";
import { Menu } from "semantic-ui-react";

export const Header = ({ activeItem = '/', onItemClicked }) => {
    return (
        <Menu pointing secondary>
            <Menu.Item
                name="accordian"
                active={activeItem === '/'}
                onClick={onItemClicked}
            />
            <Menu.Item
                name="search"
                active={activeItem === '/search'}
                onClick={onItemClicked}
            />
            <Menu.Item
                name="dropdown"
                active={activeItem === '/dropdown'}
                onClick={onItemClicked}
            />
            <Menu.Item
                name="translate"
                active={activeItem === '/translate'}
                onClick={onItemClicked}
            />
        </Menu>
    );
}