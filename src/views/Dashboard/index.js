import React, { Component } from 'react';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"hu"
         };
    }
    render() {
        const {name} = this.state;
        return (
            <div>
                Dashboard --{name}
            </div>
        );
    }
}

export default Dashboard;