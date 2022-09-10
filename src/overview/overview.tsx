import * as react from 'react';
import Carousel from '../shared/masonry';
import urls from '../data/overview.json'
import { Modals } from '../modals/modal';

interface IOverviewProps {
  openModal: (type: Modals, props?: any) => void
}

export default (props: IOverviewProps) => {
  return <div className='overview'>
    <Carousel urls={urls} openModal={props.openModal}/>
  </div>
}