import styled from "styled-components";
import { DARK_GREEN, LIGHT_GREEN } from "../../constants/color";

export const ContactContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 150px;
    margin-bottom: 50px;
  }
`;

export const TitleContainer = styled.div`
  font-size: 24px;
  color: ${DARK_GREEN};
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-left: 250px;
    text-align: left;
    font-weight: 700;
    margin-right: 50px;
    margin-top: 50px;
  }
`;

export const TextContainer = styled.div`
  font-size: 14px;
  color: ${DARK_GREEN};
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding-right: 250px;
  }
`;

export const TextGreyContainer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: gray;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding-right: 250px;
  }
`;

export const HomeImageBackground = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 50%;
`;

export const ImageContainer = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const MemberWrapper = styled.div`
  width: 200px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 280px;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0 200px;
  }
`;

export const TeamMemberName = styled.div`
  font-size: 16px;
  color: ${DARK_GREEN};
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TeamMemberDescription = styled.div`
  font-size: 13px;
  color: ${DARK_GREEN};
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const TeamMemberEmail = styled.div`
  font-size: 13px;
  color: ${LIGHT_GREEN};
  margin-top: 5px;
  font-style: italic;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;
