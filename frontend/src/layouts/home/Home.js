import Header from './../ambiheader/Header';
import Hero_Section from './../../components/hero_section/Hero_Section';

import NextVision from '../../components/hero_section/NextVision';
import VideoSection from '../../components/cards/VideoSection';
import React from 'react'
import Spread from './../../components/cards/Spread';
import Footer from './../footer/Footer'

import Hero_Image from './../../components/cards/Hero_Image'
export default function Home() {
  return (
    <React.Fragment>
      {/* <Hero_Image /> */}
      <Hero_Section />
      <Spread />
      <VideoSection />

      <NextVision />
      {/* <NewsCard /> */}
      <Footer />
    </React.Fragment>
  )
}
