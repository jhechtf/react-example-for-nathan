import React from 'react';
import axios from 'axios';

import User from 'Components/User';

export default class Main extends React.Component {
    state = {
        hasLoaded: false,
        items: []
    }
    constructor(props) {
        super(props);
        setTimeout(() => {
            axios.get('../data.json').then((data) => {
                console.log(data);
                this.setState({
                    items: data.data,
                    hasLoaded: true
                });
            }).catch(err => {
                console.error('we fucked up!', err);
            });
        }, 1000);
    }
    render() {
        return (
            <div>
                Has the "data" been loaded? {this.state.hasLoaded ? 'Yes' : 'No'} (please wait 1 second)
                {this.state.hasLoaded ?
                    this.state.items.map((item, index) => {
                        return <User key={index} superUser={item.superUser} name={item.name} />
                    }) : null}
            </div>
        );
    }
}