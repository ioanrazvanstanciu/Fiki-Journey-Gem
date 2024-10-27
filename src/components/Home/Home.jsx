import {
  HomeContainer,
  HomeImageBackground,
  HomeText,
  HomeButtonsContainer,
} from "./Home.style";

import HomeButtons from "./HomeButtons";

function Home() {
  return (
    <HomeContainer>
      <HomeImageBackground
        src={
          "https://raw.githubusercontent.com/ioanrazvanstanciu/Fiki-Journey-Gem/refs/heads/main/images/home_photo.png"
        }
      />
      <HomeText>Explore The Beauty Of Our World</HomeText>
      <HomeButtonsContainer>
        <HomeButtons />
      </HomeButtonsContainer>
    </HomeContainer>
  );
}

export default Home;
