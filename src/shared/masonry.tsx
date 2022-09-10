import * as react from 'react'
import './masonry.scss';
import { prefixPathWithPublicHomeUrl } from './utils';
import { Plock, Breakpoint } from 'react-plock';
import { Modals } from '../modals/modal';
import MasonryTile from './masonry-tile';

export interface CarouselProps {
  urls: string[];
  openModal?: (type: Modals, props?: any) => void
}

export default (props: CarouselProps) => {
  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 768, columns: 2 }
    ]

  return <div className='carousel'>
    <Plock breakpoints={breakpoints} gap="1vw">
      {
        props.urls.map((url, index) => {
          const src = prefixPathWithPublicHomeUrl(url);
          return (
            <div key={url}>
              <MasonryTile src={src} openModal={props.openModal}/>
            </div>
          )
        })
      }
    </Plock>
  </div>
}