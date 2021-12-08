import './Intro.css';
import IntroItem from './IntroItem';

function Intro() {
  return (
    <div id="intro-wrap">
      <div
        id="intro"
        className="preload darken"
        data-autoplay="5000"
        data-navigation="true"
        data-pagination="true"
        data-transition="fadeUp"
      >
        <IntroItem title='Test Title 1' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae?' author='Author1' bgImage='https://i.pinimg.com/550x/01/d1/31/01d131db9350156ba2ef8c8770998e7d.jpg'/>
        <IntroItem title='Test Title 2' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae?' author='Author2' bgImage='https://i.pinimg.com/550x/01/d1/31/01d131db9350156ba2ef8c8770998e7d.jpg'/>

      </div>
    </div>
  );
}

export default Intro;