import React, { useEffect, useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <section className="hero">
        <video autoPlay muted loop id="bg-video">
          <source
            src="https://video-previews.elements.envatousercontent.com/21fb7350-a4a4-4e76-90a6-a68810b7d3e2/watermarked_preview/watermarked_preview.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <span className="main-head">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <br />
          <br />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            enim sit explicabo praesentium neque, asperiores maxime officiis
            atque rem fugit optio ipsa sint aliquam ea? Est nulla dolorem, animi
            excepturi optio nemo? Quasi, deserunt. Officia alias nobis delectus
            accusantium non?
          </span>
          <div className="buttons">
            <button>Vulnerable Transactions</button>
            <button>Suspected Profiles</button>
            <button>Vulnerable Platforms</button>
          </div>
        </div>
      </section>
      <div></div>

      <div className="suspect-section">
        <h1 className="section-heading">Suspect Profile Activity</h1>
        <div className="suspect-grid">
          <div className="suspect-card">
            <h2 className="card-title">Get the Heat map</h2>
            <img src="/heatmap.png" alt="" className="card-image" />
          </div>
          <div className="suspect-card">
            <h2 className="card-title">Get the footprint</h2>
            <img src="/profile.png" alt="" className="card-image" />
          </div>
          <div className="suspect-card">
            <h2 className="card-title">Suspected profile list</h2>
            <img
              src="/suspected.png"
              alt=""
              className="card-image"
            />
          </div>
          <div className="suspect-card">
            <h2 className="card-title">Report a profile</h2>
            <img src="/report.png" alt="" className="card-image" />
          </div>
        </div>
      </div>

      <div className="crypto-section">
        <div className="text-column">
          <h2 className="title">Crypto Transaction Insights</h2>
          <p className="description">
            Get in-depth analysis of blockchain transactions, offering real-time
            tracking, pattern recognition, and anomaly detection. 
          </p>
          <button className="crypto-button">Get Insights</button>
        </div>
        <div className="image-column">
          <div className="image-wrapper">
            <img
              src="/token.png"
              alt="Placeholder 1"
              className="image"
            />
            <p className="image-description">Get Token and Asset Details</p>
          </div>
          <div className="image-wrapper">
            <img
              src="/verify.png"
              alt="Placeholder 2"
              className="image"
            />
            <p className="image-description">Verify a Transaction Id</p>
          </div>
          <div className="image-wrapper">
            <img
              src="/tracking.png"
              alt="Placeholder 3"
              className="image"
            />
            <p className="image-description">Track a Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
