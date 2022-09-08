import * as react from 'react';
import portfolioData from '../data/portfolio.json'
import Tile from './tile';
import './portfolio.scss';
import { useParams } from 'react-router-dom';
import Carousel from '../shared/carousel';

const PortfolioSection = () => {
  const params = useParams();
  const sectionId = params.sectionId;
  const section = portfolioData[sectionId as keyof typeof portfolioData];
  return (
    <div className='portfolio-section'>
      <div className='title'>{section.fullTitle}</div>
      <Carousel urls={section.photos}/>
    </div>
  )
}

export default PortfolioSection;