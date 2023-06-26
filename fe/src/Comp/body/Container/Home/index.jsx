import React, { Component } from 'react'
import './index.css'

export default class Home extends Component {
    render() {
        const { host } = this.props.data;
        const { vu } = this.props.data;
        const { spawnRate } = this.props.data;
        const { runTime } = this.props.data;
        const { status } = this.props.data;
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
