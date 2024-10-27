import {
    ContactContainer,
    DescriptionContainer,
    HomeImageBackground, ImageContainer,
    ImagesContainer, ImageWrapper, MemberWrapper, TeamMemberDescription, TeamMemberName,
    TextContainer,
    TextGreyContainer,
    TitleContainer,
} from "./Contact.style.js";
import ContactImage from "./ContactImage.jsx";

function Contact() {
  return (
    <ContactContainer>
        <HomeImageBackground
        src={
            "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/home_photo.png"
        }
    />
        <DescriptionContainer>
            <TitleContainer>
                TEAM
            </TitleContainer>
            <div>
                <TextContainer>
                    We are a team of six master’s students, passionate about travel and innovation, aiming to change the way vacations are booked. Our goal is to create an intuitive and personalized platform that simplifies selection and booking, offering a seamless travel experience tailored to each user’s preferences.
                </TextContainer>
                <TextGreyContainer>
                    Our project is a comprehensive and customizable booking platform that streamlines vacation planning, offering accommodations, various transportation options, and features tailored to every need, from pet-friendly trips to insurance and transparent cost breakdowns.
                </TextGreyContainer>
            </div>
        </DescriptionContainer>
        <ImagesContainer>
            <MemberWrapper >
                <ImageWrapper>
                <ImageContainer src={
                    "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact1.jpeg"
                }/>
                </ImageWrapper>
                <TeamMemberName>Maria Lipan</TeamMemberName>
                <TeamMemberDescription>Product Owner</TeamMemberDescription>
            </MemberWrapper>
            <MemberWrapper >
                <ImageWrapper>
                    <ImageContainer src={
                        "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact2.jpeg"
                    }/>
                </ImageWrapper>
                <TeamMemberName>Mihnea Vrabie</TeamMemberName>
                <TeamMemberDescription>Backend Developer</TeamMemberDescription>
            </MemberWrapper>
            <MemberWrapper >
                <ImageWrapper>
                    <ImageContainer src={
                        "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact3.jpeg"
                    }/>
                </ImageWrapper>
                <TeamMemberName>Ioan Stanciu</TeamMemberName>
                <TeamMemberDescription>Frontend Developer</TeamMemberDescription>
            </MemberWrapper>
        </ImagesContainer>
        <ImagesContainer>
            <MemberWrapper >
                <ImageWrapper>
                    <ImageContainer src={
                        "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact4.jpeg"
                    }/>
                </ImageWrapper>
                <TeamMemberName>Alexandra Petre</TeamMemberName>
                <TeamMemberDescription> Frontend Developer</TeamMemberDescription>
            </MemberWrapper>
            <MemberWrapper >
                <ImageWrapper>
                    <ImageContainer src={
                        "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact5.jpeg"
                    }/>
                </ImageWrapper>
                <TeamMemberName> Crenguta Voinila</TeamMemberName>
                <TeamMemberDescription> Project Manager & UI/UX Designer</TeamMemberDescription>
            </MemberWrapper>
            <MemberWrapper >
                <ImageWrapper>
                    <ImageContainer src={
                        "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/contact6.jpeg"
                    }/>
                </ImageWrapper>
                <TeamMemberName> Eduard Tudor </TeamMemberName>
                <TeamMemberDescription> Backend Developer</TeamMemberDescription>
            </MemberWrapper>
        </ImagesContainer>
    </ContactContainer>
  );
}

export default Contact;
