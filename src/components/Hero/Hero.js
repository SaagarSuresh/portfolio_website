import React from 'react';
import Link from 'next/link';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi, I'm Sagar Suresh Raj. As a web developer with a background in mechanical engineering and expertise in operations, I offer a unique blend of technical skills, problem-solving abilities, and project management experience to create efficient and innovative web solutions.
      </SectionText>
      {/* <Button onClick={() => window.open = 'https://www.linkedin.com/in/sagar-suresh-raj/', '_blank'}>Learn More</Button> */}
      <Button>
        <a href="https://www.linkedin.com/in/sagar-suresh-raj/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          Learn More
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;