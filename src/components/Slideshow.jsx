"use client";
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import award1 from "../assets/unisip_xaviers/Untitled.png";
import award2 from "../assets/AwardPics/Untitled (1).png";
import award3 from "../assets/unisip_xaviers/Untitled_whitened.png";
import award4 from "../assets/unisip_xaviers/IMG_7324.jpg";
import NextImage from "next/image"; // Use an alias like NextImage

const Slideshow = () => {
  const [isPaused, setIsPaused] = useState(false);
  const row1 = [award1, award2, award3, award4];

  return (
    <AppContainer>
      <Marquee
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        isPaused={isPaused}
      >
        <MarqueeGroup>
          {row1.map((el, index) => (
            <NextImage
              key={index}
              src={el}
              alt={`Image ${index}`}
              width={400}
              height={300}
              priority
            />
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el, index) => (
            <NextImage
              key={index}
              src={el}
              alt={`Image ${index}`}
              width={400}
              height={300}
              priority
            />
          ))}
        </MarqueeGroup>
      </Marquee>
    </AppContainer>
  );
};
export default Slideshow;

const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; // Set the width to 100% to fill the entire available space
  height: 100vh; // Set the height to 100vh to make it full height of the viewport
`;

const Marquee = styled.div`
  display: flex;
  width: 600px;
  overflow: hidden;
  user-select: none;
  height: 100vh;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  ${'' /* width: 100%; */}
  animation: ${scrollX} 30s linear infinite;
  animation-play-state: inherit;
`;

const MarqueeGroup = styled.div`
  ${common}
`;