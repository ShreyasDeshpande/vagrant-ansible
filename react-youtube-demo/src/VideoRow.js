import React from "react";
import "./VideoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt=""></img>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>
          {channel} . {subs} Subscribers {views} . {timestamp}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
