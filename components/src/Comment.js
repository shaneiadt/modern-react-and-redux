import faker from 'faker';

export const Comment = () => (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {faker.name.firstName()}
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