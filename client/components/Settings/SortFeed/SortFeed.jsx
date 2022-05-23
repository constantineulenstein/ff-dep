import React, { useState } from "react";
import SettingsClosingSection from "../SubComponents/ClosingSection/SettingsClosingSection";
import Heading from "../SubComponents/Heading/Heading";
import "../Settings.css";
import "./SortFeed.css";

function SortFeed() {
  changeBackColorBy = (event) => {
    if (event.target.id == "distance") {
      event.target.style.backgroundColor = "green";
      document.getElementById("AI").style.backgroundColor = "#E4E4E4";
      document.getElementById("recency").style.backgroundColor = "#E4E4E4";
      document.getElementById("popularity").style.backgroundColor = "#E4E4E4";
    } else if (event.target.id == "AI") {
      event.target.style.backgroundColor = "green";
      document.getElementById("distance").style.backgroundColor = "#E4E4E4";
      document.getElementById("recency").style.backgroundColor = "#E4E4E4";
      document.getElementById("popularity").style.backgroundColor = "#E4E4E4";
    } else if (event.target.id == "recency") {
      event.target.style.backgroundColor = "green";
      document.getElementById("distance").style.backgroundColor = "#E4E4E4";
      document.getElementById("AI").style.backgroundColor = "#E4E4E4";
      document.getElementById("popularity").style.backgroundColor = "#E4E4E4";
    } else if (event.target.id == "popularity") {
      event.target.style.backgroundColor = "green";
      document.getElementById("distance").style.backgroundColor = "#E4E4E4";
      document.getElementById("recency").style.backgroundColor = "#E4E4E4";
      document.getElementById("AI").style.backgroundColor = "#E4E4E4";
    }
  };

  changeBackColorOrder = (event) => {
    if (event.target.id == "button-asc") {
      if (event.target.style.backgroundColor == "green") {
        event.target.style.backgroundColor = "#E4E4E4";
        document.getElementById("button-desc").style.backgroundColor = "green";
      } else {
        event.target.style.backgroundColor = "green";
        document.getElementById("button-desc").style.backgroundColor =
          "#E4E4E4";
      }
    } else {
      if (event.target.style.backgroundColor == "green") {
        event.target.style.backgroundColor = "#E4E4E4";
        document.getElementById("button-asc").style.backgroundColor = "green";
      } else {
        event.target.style.backgroundColor = "green";
        document.getElementById("button-asc").style.backgroundColor = "#E4E4E4";
      }
    }
  };

  return (
    <div className="settingsScreen">
      <SettingsClosingSection />
      <div className="order-area settingsSectionBox">
        <Heading text="ORDER" />
        <div className="asc-desc">
          <div
            id="button-asc"
            className="button-asc settings-text"
            onClick={this.changeBackColorOrder}
          >
            Ascending
          </div>
          <div
            id="button-desc"
            className="button-desc settings-text"
            onClick={this.changeBackColorOrder}
          >
            Descending
          </div>
        </div>
      </div>
      <div className="by-area">
        <Heading text="BY" />
        <div className="by-row settings-text">
          <div
            id="distance"
            className="button-large settings-text"
            onClick={this.changeBackColorBy}
          >
            Distance
          </div>
          <div
            id="AI"
            className="button-large settings-text"
            onClick={this.changeBackColorBy}
          >
            AI
          </div>
        </div>
        <div className="by-row settings-text">
          <div
            id="recency"
            className="button-large settings-text"
            onClick={this.changeBackColorBy}
          >
            Recency
          </div>
          <div
            id="popularity"
            className="button-large settings-text"
            onClick={this.changeBackColorBy}
          >
            Popularity
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortFeed;
