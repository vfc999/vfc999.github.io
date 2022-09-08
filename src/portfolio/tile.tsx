import * as react from 'react';
import { prefixPathWithPublicHomeUrl } from '../shared/utils';

export interface ITileProps {
  id: string;
  title: string;
  cover: string;
}

const Tile = (props: ITileProps) => {
  return (<div className='tile' id={props.id}>
    <div className='cover' style={{
      backgroundImage: `url(${prefixPathWithPublicHomeUrl(props.cover)})`
    }}></div>
    <div className='title'>{props.title}</div>
  </div>)
}

export default Tile