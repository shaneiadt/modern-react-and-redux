import { Comment } from './Comment';

export const App = () => {
  return (
    <div className="ui container comments">
      <Comment author="Shane" />
      <Comment />
      <Comment />
    </div>
  );
}