import Avatar from "@material-ui/core/Avatar";
import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timeStamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info"></div>
      <Avatar
        className="videoCard__avatar"
        alt={channel}
        src={channelImage}
      ></Avatar>
      <div className="videoCard__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} . {timeStamp}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
