import React from 'react';
import { name, image } from 'faker';

export const Comment = ({ author = name.firstName(), avatar = image.avatar(), timeAgo = "Today at 12:00pm", comment = "Nice blog post!" }) => {
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
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">
                    {comment}
                </div>
            </div>
        </div>
    );
}
