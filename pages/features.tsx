import styled from 'styled-components';

import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import BasicCard2 from 'components/BasicCard2';
import BasicSection from 'components/BasicSection';
import BasicSection2 from 'components/BasicSection2';
import CtaFeatures from 'components/CtaFeatures';
import OverTitle from '../components/OverTitle';
import Page from 'components/Page';

import ProductMilestones from 'components/ProductMilestones'; 

import SectionTitle from 'components/SectionTitle'; 

// Import of `views/HomePage/Partners` can stay here or be adjusted based on your project's conventions.
import Partners from 'views/HomePage/Partners';
import { media } from 'utils/media';

// If you decide to uncomment the YoutubeVideo import, you can place it in the appropriate position within the group.
// import YoutubeVideo from 'components/YoutubeVideo';


const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Dhruv Sahu',
    description:
      'The Software Developer, the wizard of digital solutions.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Sahil Sunilkumar',
    description:
      'Our Biotech R&D Lead, the brilliance driving breakthroughs.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Kritika Malhotra',
    description:
      'The Social Media Lead, the voice of our revolution.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Kirtivas',
    description:
      'The Electronics Lead, the conductor of technological excellence.',
  }
];

const IMG1 = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
  },
  
];



export default function FeaturesPage() {
  return (
    <Page title="About Us" description="We are the Avant-Garde. We are the models for the Future.">
      <Wrapper>
        <SectionTitle>Our Vision</SectionTitle>
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        <BasicSection imageUrl="/demo-illustration-1.svg" title="To reverse the effects of global warming and climate change." overTitle="Inspired Direction">
            <p>
            At Climec Labs, we&aposve harnessed the power of innovation to create cutting-edge direct air carbon capture solutions. With uniquely designed biotech filters, we offer you and your loved ones a remarkable 30% edge over other products, cleansing the air and nourishing the planet.
            </p>
          </BasicSection> 
          <SectionTitle>Is air quality a matter of choice, or are we simply at the mercy of our location?</SectionTitle>
          <CustomAutofitGrid>
          {IMG1.map((singleFeature, idx) => (
            <BasicCard2 key={singleFeature.imageUrl} {...singleFeature} />
            ))}
        </CustomAutofitGrid>
          <CPara>It all started with wanting to do something for our planet and help humans move towards a brighter and healthier future. We knew we were made to serve the greater purpose of safeguarding humankind, and we are determined to shield this planet from disasters like global warming and climate change.</CPara>
        <SectionTitle>Our mission is to sequester 1 billion metric tons of CO2 by 2030.</SectionTitle>
        <CPara>*impressive visual with a countdown to 2030*</CPara>
        {/* <SectionTitle>Crafted with Excellence!<br/>The Masterminds behind Climec Labs</SectionTitle>  */}
        <CtaFeatures></CtaFeatures>
        <BasicSection2 imageUrl="/demo-illustration-1.svg" title="Co-founder and CEO" overTitle='A force to be reckoned with.'></BasicSection2> 
        <BasicSection2 imageUrl="/demo-illustration-1.svg" title="Co-founder and CTO" overTitle='The architect of innovation.' reversed></BasicSection2> 
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
        <SectionTitle>Empowered by a Collective Force</SectionTitle>
        <CPara>United we stand, a passionate alliance turning dreams into reality</CPara>
        <Partners/>
        <SectionTitle>Proud Milestones</SectionTitle>
        <CPara>Milestones that inspire,accomplishments that fuel our drive for even greater success</CPara>
        <ProductMilestones/>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CPara= styled(OverTitle)`
  margin-bottom: 2rem;
  line-height: 1.4;
`;


const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;