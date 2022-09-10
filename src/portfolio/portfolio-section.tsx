import * as react from 'react';
import portfolioData from '../data/portfolio.json'
import Tile from './tile';
import './portfolio.scss';
import { useParams } from 'react-router-dom';
import Carousel from '../shared/masonry';
import { Modals } from '../modals/modal';

interface IPortfolioSectionProps {
  openModal: (type: Modals, props?: any) => void
}

const PortfolioSection = (props: IPortfolioSectionProps) => {
  const params = useParams();
  const sectionId = params.sectionId;
  const section = portfolioData[sectionId as keyof typeof portfolioData];
  return (
    <div className='portfolio-section'>
      <div className='title animate__animated animate__fadeIn'>{section.fullTitle}</div>
      <Carousel urls={section.photos} openModal={props.openModal}/>
    </div>
  )
}

export default PortfolioSection;