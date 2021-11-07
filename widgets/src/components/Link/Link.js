import React from "react";

export const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        e.preventDefault();

        window.history.pushState({}, '', href);
    }

    return <a onClick={onClick} href={href} className={className}>{children}</a>;
};