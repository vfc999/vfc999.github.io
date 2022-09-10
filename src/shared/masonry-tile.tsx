import * as React from 'react';
import { Url } from 'url';
import { Modals } from '../modals/modal';

export interface IMasonryTileProps {
  src: string;
  openModal?: (type: Modals, props?: any) => void
}

const MasonryTile = (props: IMasonryTileProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const setVisibleToTrueOnly = (isVisible: boolean) => {
    if(isVisible) {
      setVisible(isVisible);
    }
  }
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisibleToTrueOnly(entry.isIntersecting ));
    });
    if(domRef.current)
    observer.observe(domRef.current);

    return () => {
      if(domRef.current) observer.unobserve(domRef.current)
    };
  }, [domRef]);

  return <img ref={domRef} className={`photo ${isVisible ? 'visible' : ''}`} src={props.src} onClick={() => {
    props.openModal && props.openModal(Modals.PHOTO_VIEWER, {
      src: props.src
    });
  }}/>
}

export default MasonryTile;