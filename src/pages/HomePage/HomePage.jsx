import Button from '../../components/Button';
import { Section } from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <h1>
        You travel the world. <br /> WorldWise keeps track of your adventures.
      </h1>
      <p>
        A world map that tracks your footsteps into every city you can think of. Never forget your
        wonderful experiences, and show your friends how you have wandered the world.
      </p>
      <Button to="/login" type="button">
        Start tracking now
      </Button>
    </Section>
  );
};
export default HomePage;
