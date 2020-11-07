import React, { Component } from 'react'
import Navbar from "../components/navbar.js";
import { Container, Button } from "reactstrap";
import "../css/home.css";
import technology from "../images/technology.jpg";
import sports from "../images/sports.jpeg";
import entertainment from "../images/entertainment.png";

export default class home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container className="home-first" fluid={true}>
                    <div className="home-first-div">
                        <h1>FETCH</h1>
                        <p>One convenient place for fetching you the latest news in </p>
                        <p>technology, entertainment, and sports!</p> 
                    </div>
                </Container>


                <Container className="home-second" fluid={true}>
                    <div className="home-second-div">
                        <h1>Technology</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="home-second-div-img">
                        <img src = {technology}></img>
                    </div>
                </Container>


                <Container className="home-third" fluid={true}>
                    <div className="home-third-div-img">
                        <img src = {entertainment}></img>
                    </div>
                    <div className="home-third-div">
                        <h1>Entertainment</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </Container>


                <Container className="home-fourth" fluid={true}>
                    <div className="home-second-div">
                        <h1>Sports</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        </div>
                    <div className="home-second-div-img">
                        <img src = {sports}></img>
                    </div>
                </Container>
            </div>
        )
    }
}
