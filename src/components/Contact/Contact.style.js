import styled from "styled-components";
import {
    DARK_GREEN,
    LIGHT_GREEN,
} from "../../constants/color";

export const ContactContainer = styled.div``;

export const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: 10vh;
    object-fit: cover;
object-position: 50%;
  display: flex;
    margin-bottom: 50px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    margin-left: 250px;
    font-size: 30px;
    text-align: left;
    align-content: center;
    color:  ${DARK_GREEN};
`;

export const TextContainer = styled.div`
  padding-right: 250px;
  font-size: 15px;
    color:  ${DARK_GREEN};
`;

export const TextGreyContainer = styled.div`

    margin-top: 20px;
  padding-right: 250px;
  font-size: 15px;
    color: gray;
`;
export const HomeImageBackground = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 50%;
`;

export const ImageContainer =  styled.img`
    border-radius: 50%;
    z-index: 100;
    width: 100%;
    height: 100%;
    //margin-left: 150px;
`;

export const ImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    object-fit: cover;
    display: flex;
    justify-content: center;    
    align-items: center;
`;

export const MemberWrapper = styled.div`
    width: 250px;
    height: 250px;
`;

export const ImagesContainer = styled.div`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 200px;
    box-sizing: border-box;
`;

export const TeamMemberDescription = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

export const TeamMemberName = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
    color:  ${DARK_GREEN};
`;

