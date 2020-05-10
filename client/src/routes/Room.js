import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
`;

const LeftRow = styled.div`
    width: 40%;
    height: 100%;
`;

const RightRow = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Video = styled.video`
    height: 50%;
    width: 100%;
    border: 1px solid black;
`;

const Room = (props) => {
    const socketRef = useRef();
    const userVideoRef = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const youtubePlayer = useRef();
    const [videoID, setVideoID] = useState("");

   
    return (
        <Container>
          <h1>I will be the video chat screen</h1>
        </Container>
    );
};

export default Room;