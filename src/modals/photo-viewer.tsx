import * as react from 'react';
import './photo-viewer.scss';

export interface IPhotoViewerProps {
  src: string;
}

const PhotoViewer = (props: IPhotoViewerProps) => {
  return <div className='content photo-viewer'>
    <img src={props.src} onClick={(e) => {e.stopPropagation()}}></img>
  </div>
}

export default PhotoViewer;