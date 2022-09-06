import * as react from 'react';
import Carousel from './carousel';

const urls = [
  "/photos/Chicago21.jpg",
  "/photos/DSC_7966.JPG",
  "/photos/Chicago191.jpg",
  "/photos/Japan-130.jpg",
  "/photos/Japan-71.jpg",
  "/photos/DSC_4585.JPG",
  "/photos/PostBaccBreaks-202.jpg",
  "/photos/Japan-178.jpg",
  "/photos/Chicago151.jpg",
  "/photos/DSC_9449.jpg",
  "/photos/NatParks_Kelly-42.jpg",
  "/photos/Chicago148.jpg",
  "/photos/Golden-Gate-Park-Alone-Day-23.jpg",
  "/photos/Golden-Gate-Park-Alone-Day-24.jpg",
  "/photos/Alcatraz_Carmen3.jpg",
  "/photos/Japan-282.jpg",
  "/photos/London_Belgium-45.jpg",
  "/photos/NY+Alone-47.jpg",
  "/photos/TFTI-Christmas9.jpg",
  "/photos/PuertoRico_Angel-51.jpg",
  "/photos/PalmSprings_Alex64.jpg",
  "/photos/Alcatraz_Carmen11.jpg",
  "/photos/VancouverRoadtrip-219.jpg",
  "/photos/MontereyBday7.jpg",
  "/photos/PuertoRico_Angel-43.jpg",
  "/photos/St.Louis19.jpg",
  "/photos/PuertoRico_Angel-56.jpg",
  "/photos/Superbloom_Minh-2.jpg",
  "/photos/VancouverRoadtrip-26.jpg",
  "/photos/Startrails+Bridge+5+2.jpg",
  "/photos/MtBaldy_AlexRyan-29.jpg",
  "/photos/Japan-36.jpg",
  "/photos/Artechouse_Anna16.jpg"
]

export default () => {
  return <div className='overview'>
    <Carousel urls={urls}/>
  </div>
}