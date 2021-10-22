import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <div onClick={() => openUrlInNewTab(cardInfo.url, cardInfo.title)}>
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
          {/* <embed src={cardInfo.url} alt="PWA" className="card-embed" /> */}
        </div>
      </div>
      <div className="certificate-detail-div">
        <div onClick={() => openUrlInNewTab(cardInfo.url, cardInfo.title)}>
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {cardInfo.title}
          </h5>
        </div>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.techs.map((name, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
            >
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
