import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';
import PricingCard2 from 'components/PricingCard2';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Our Products.</SectionTitle>
      <AutofitGrid>
        <PricingCard2
          title="free"
          description="Give us a try for free"
          imageUrl='/example-image-1.jpeg'
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard2>
        <PricingCard
          title="Starter"
          description="Best for individual desginers"
          imageUrl='/example-image-1.jpeg'
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard2
          title="Premium"
          description="Get your team together"
          imageUrl='/example-image-1.jpeg'
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard2>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;