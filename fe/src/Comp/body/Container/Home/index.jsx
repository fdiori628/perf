import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        this.pubsubToken = PubSub.subscribe('mockData', (topic, data) => {
            this.setState({ data });
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.pubsubToken);
    }

    render() {
        const { host, vu, spawnRate, runTime, status } = this.state.data;
        return (
            <div className='Home-container'>
                <h1>Perf Info</h1>

                <p>This is a tool to help you to get the performance information of your current testing.</p>
                <div className='home-info'>
                    <div>Host: <a href= {host} target="_blank">{host}</a></div>
                    <div>Visual User: {vu}</div>
                    <div>Spawn-Rate: {spawnRate}</div>
                    <div>Run-Time: {runTime}</div>
                    <div className='status'>Running Status: {status}</div>
                </div>
            </div>
        )
    }
}
