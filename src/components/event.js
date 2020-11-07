import React, { Component } from 'react'
import '../css/event.css';
import { Container, Row, Col } from 'reactstrap';

export default class event extends Component {
    state = {
        toggled: false,
    }
    dropDown = () => {
        this.setState({toggled: !this.state.toggled})
        console.log("IM HIT")
    }
    render() {
        return (
            <div onClick = {this.dropDown}>
                <div className = "event">
                    <h1>{this.props.author}</h1>
                    <h1 className = "event-row-title">{this.props.title}</h1>
                    <h1>{this.props.date}</h1>
                </div>
                {this.state.toggled ? (
                    <div className = "info">
                        <div className = "info-container">
                            <img className = "info-image" src = {this.props.event.urlToImage}/>
                            <div className = "info-description">
                                <h1 className = "info-h1">{this.props.event.description}</h1>
                                <a target="_blank" href = {this.props.event.url}>Read more!</a>
                            </div>
                            
                        </div>
                    </div>
                ) : null}
            </div>
            
        )
    }
}
