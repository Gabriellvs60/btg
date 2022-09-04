import styled from "@emotion/styled";

export const HeroWrapper = styled.div`
  width: 100vw;

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

export const HeroUnit = styled.div`
  background-image: url("/wm-banner.png");
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
    background-image: url("/wm-banner_mobile.png");
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    display: flex;
    text-align: start;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 600px) {
    height: 780px;
    width: 100%;
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: 1200px) {
    height: 700px;
    padding: ${({ theme }) => theme.spacing(4)};
    width: 30%;
  }

  height: 100%;
`;
