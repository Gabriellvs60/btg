import { colors } from "@/styles/colors";
import styled from "@emotion/styled";

export const HeroWrapper = styled.div`
  width: 100vw;
  background-color: red;
  position: relative;
  @media (max-width: 600px) {
    height: 500px;
  }
  @media (min-width: 600px) {
    height: 780px;
  }
  @media (min-width: 1200px) {
    height: 700px;
  }
`;

export const HeroUnit = styled.div<{ $imageUrl?: string, $imageMobile?: string }>`
  background-image: url("/wm-banner.png");
  background-image: ${(imageUrl) => `url(${imageUrl})`};
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-repeat: round;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 600px) {
    background-image: ${({ $imageUrl, $imageMobile }) => `url(${$imageMobile || $imageUrl})`};
    justify-content: center;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;   
  padding: ${({ theme }) => theme.spacing(2)};
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    text-align: start;
    align-items: center;
    justify-content: center;
 
  }
  @media (min-width: 600px) {
    height: 780px;
  }
  @media (min-width: 1200px) {
    height: 700px;
    width: 40%;
  }

  height: 100%;
  padding: ${({ theme }) => theme.spacing(8, 0, 6)};
`;
