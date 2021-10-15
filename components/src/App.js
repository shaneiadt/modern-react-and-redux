import { Comment } from './Comment';

export const App = () => {
  return (
    <div className="ui container comments">
      <Comment author="Shane" timeAgo="Today at 4:45pm" comment="This is my fav blogging platform." />
      <Comment comment="O hells yeah!"/>
      <Comment timeAgo="Yesterday at 5:00pm"/>
    </div>
  );
}