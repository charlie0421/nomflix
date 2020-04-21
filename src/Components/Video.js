import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const VideoContainer = styled.div`
  margin-top: 15px;
`;

const Video = ({ videos: { results: videos } }) =>
  videos && (
    <VideoContainer>
      {videos.map((video) => (
        <YouTube videoId={video.key} opts={{ width: "100%", height: "100%" }} />
      ))}
    </VideoContainer>
  );
export default Video;
