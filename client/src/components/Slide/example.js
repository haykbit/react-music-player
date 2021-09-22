import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const slides = [
  {
    key: 0,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/1.png"
        alt="card"
      />
    ),
  },
  {
    key: 1,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/2.png"
        alt="card"
      />
    ),
  },
  {
    key: 2,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/3.png"
        alt="card"
      />
    ),
  },
  {
    key: 3,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
        alt="card"
      />
    ),
  },
  {
    key: 4,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/5.png"
        alt="card"
      />
    ),
  },
  {
    key: 5,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/6.png"
        alt="card"
      />
    ),
  },
  {
    key: 6,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/7.png"
        alt="card"
      />
    ),
  },
  {
    key: 7,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/1.png"
        alt="card"
      />
    ),
  },
  {
    key: 8,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
        alt="card"
      />
    ),
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: false,
    config: config.gentle,
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
