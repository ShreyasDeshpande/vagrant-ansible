import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow.js";
import "./ChannelRow.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars3.githubusercontent.com/u/31839853?s=460&u=fe13b7acef9deccb10c2a56bcf792f5ffdc10ce7&v=4"
        channel="Learn to Grow"
        verified
        subs="625K"
        noOfVideos={101}
        description="You can find some awesome tutorial
        here which are pretty useful for react js.
        As a practice I am putting some dummy data here
        but you are free
        to think whatever you would like to.
        By the way happy new year and keep wearing
        mask and keep washing hands"
      ></ChannelRow>
      <hr></hr>
      <VideoRow
        views="442K"
        subs="jddsfjsdnfkldjsfkldjsfl"
        description="dfdsfdskfhdjshfdkjshfkj"
        timestamp=" 52 seconds ago"
        channel="Kuch is tarah"
        title="Learn and grow"
        image="https://avatars3.githubusercontent.com/u/31839853?s=460&u=fe13b7acef9deccb10c2a56bcf792f5ffdc10ce7&v=4"
      ></VideoRow>
    </div>
  );
}

export default SearchPage;
