import React from 'react';
import { name, image } from 'faker';

export const Comment = ({ author = name.firstName(), avatar = image.avatar() }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 pm</span>
                </div>
                <div className="text">
                    Nice blog post!
                </div>
            </div>
        </div>
    );
}
