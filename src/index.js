import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container commnents">
            <ApprovalCard>
                <h2>Warning!</h2>
                <p>Are you sure?</p>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:45pm" content="Pretty Cool Post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Today at 2:30am" content="Awesome Post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Mike" timeAgo="Yesterday at 1:30pm" content="Nice Post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render (<App />, document.querySelector('#root'));
