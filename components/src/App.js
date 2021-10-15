import { Comment } from './Comment';
import { ApprovalCard } from './ApprovalCard';

export const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Shane" timeAgo="Today at 4:45pm" comment="This is my fav blogging platform." />
      </ApprovalCard>
      <ApprovalCard>
        <Comment comment="O hells yeah!" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment timeAgo="Yesterday at 5:00pm" />
      </ApprovalCard>
    </div>
  );
}