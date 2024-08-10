import React from 'react';
import teamImage from '../../assets/team.png';
import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionText from './SectionText';

export default function About() {
  return (
    <div className="container mx-auto py-6">
      <div className="border backdrop-blur-sm p-4 rounded-xl shadow-xl">
        <div className="mb-6 overflow-hidden">
          <img 
            src={teamImage} 
            alt="Team" 
            className="w-full max-w-4xl mx-auto rounded-2xl" 
          />
        </div>
        <Section>
          <SectionHeader>Who We Are</SectionHeader>
          <SectionText>
            We are a group of dedicated students from Ort Braude College, collaborating on an exciting project as part of our bachelor's degree course. Our team is passionate about harnessing the power of technology to make financial information more accessible and transparent.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Our Mission</SectionHeader>
          <SectionText>
            Our mission is to provide a comprehensive and user-friendly platform for retrieving detailed information about money transfers, blockchain transactions, and other related financial data. We believe that transparency in financial transactions is crucial for fostering trust and innovation in the digital economy.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Our Team</SectionHeader>
          <SectionText>
            We are a diverse team of software engineering students. Our combined skills enable us to develop a robust and reliable platform that meets the needs of our users. Each member of our team brings a unique perspective and a shared commitment to excellence.
          </SectionText>
        </Section>
      </div>
    </div>
  );
}
