import * as react from 'react';
import Carousel from '../shared/carousel';
import urls from '../data/overview.json'

export default () => {
  return <div className='overview'>
    <Carousel urls={urls}/>
  </div>
}