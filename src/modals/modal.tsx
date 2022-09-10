import { type } from 'os';
import * as react from 'react';
import PhotoViewer, { IPhotoViewerProps } from './photo-viewer';
import './modal.scss';

export enum Modals {
  PHOTO_VIEWER='photo-viewer'
}

export interface IModalProps {
  type: Modals;
  props?: IPhotoViewerProps;
  onClose?: () => void;
}

const Modal = (props: IModalProps) => {
  let content;

  switch(props.type) {
    case Modals.PHOTO_VIEWER:
      content = <PhotoViewer src={props.props!['src']}/>
  }

  return (
    <div className='modal-overlay' onClick={props.onClose}>
      <div className='close' onClick={props.onClose}>X</div>
      {content}
    </div>
  )
}

export default Modal;