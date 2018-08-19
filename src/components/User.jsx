import React from 'react';

const User = (props) => {
    let classes = ['person'];
    if (props.superUser) classes.push('super-user');
    return (
        <div class={classes.join(' ')}>
            Hello {props.superUser ? 'Super User' : ''} {props.name}
        </div>
    );
};

export default User;