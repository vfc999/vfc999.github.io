import * as react from 'react';
import portfolioData from '../data/portfolio.json'
import Tile from './tile';
import './portfolio.scss';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const tiles = [];
  for(let sectionId of Object.keys(portfolioData)) {
    const section = portfolioData[sectionId as keyof typeof portfolioData];
    tiles.push(
      <Link to={`/portfolio/${sectionId}`}>
        <Tile id={sectionId} title={section.title} cover={section.cover} key={sectionId}/>
      </Link>
    )
  }
  return (
    <div className='portfolio'>
      {tiles}
    </div>
  )
}

export default Portfolio;