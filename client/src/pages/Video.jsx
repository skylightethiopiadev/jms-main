import React, { useEffect, useState } from "react";

const Video = () => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  const successCallback = (stream) => {
    const video = document.getElementById("video");
    console.log(video, "video");
    window.stream = stream; // stream available to console
    if (window.URL && video) {
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    } else {
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }
  };

  const errorCallback = (error) => {
    console.log("navigator.getUserMedia error: ", error);
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: false, video: true },
      successCallback,
      errorCallback
    );
  }, []);

  return (
    <div>
      <video
        style={{ width: "300px", height: "200px", margin: "100px" }}
        id="video"
        autoPlay
        controls
        className="w-52 h-52"
      ></video>
    </div>
  );
};

export default Video;
