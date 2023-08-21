import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Climec Labs</title>
        <meta
          name="description"
          content="A Bio-tech startup focused on imporving air quality by carbon capturing methods."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-2.svg" title="AEREM Go" overTitle="Refresh, Recharge, and Repeat in style." reversed>
            <p>
            Immerse yourself in unrivalled air purity, boasting a lavish 16 sq. ft. of protection in your car, office, cubicle, or room.
            The future of air purification is here. 
            {' '}With{' '}<strong>Aerem Go</strong>, take fresh air wherever you go.
            </p>
            
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="360° Air Filtration that surrounds you with pure air." overTitle="Revel in the embrace of pure, pristine air that surrounds you like a harmonious hug." >
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p> */}
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Delight in your lung's vibrant well-being with air-quality lights." overTitle="AQI-based lights double as a mood ring for your lungs. " reversed>
           
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Say farewell to lurking pollutants as these filters bring down the curtain on their wicked acts." overTitle="HEPA & Activated Carbon Filters eradicate contaminants that stalk you." >
          
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          {/* <Features /> */}
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
