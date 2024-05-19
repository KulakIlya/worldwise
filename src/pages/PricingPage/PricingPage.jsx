import pricingImg from '../../assets/img-2.jpg';
import { Section } from './PricingPage.styled';

const PricingPage = () => {
  return (
    <Section>
      <div>
        <h2>Simple pricing. Just $9/month.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto.
          Recusandae quos provident, laboriosam fugit voluptatem iste.
        </p>
      </div>
      <img src={pricingImg} alt="Overview of a large city with skyscrapers" width="512" />
    </Section>
  );
};
export default PricingPage;
