import { useState } from 'react'

import img01 from './images/1.jpg'
import img02 from './images/2.jpg'
import img03 from './images/3.jpg'
import img04 from './images/4.jpg'
import img05 from './images/5.jpg'

function App() {

  const images = [
    img01,
    img02,
    img03,
    img04,
    img05
  ]

  const [imageIndex, setImageIndex] = useState(0);

  const prev = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const next = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <>
    <div>
      <img src={images[imageIndex]} alt='slide img' style={{width: "800px"}}/>
    </div>

    <button onClick={prev}>&lt;</button>
    <button onClick={next}>&gt;</button>
    </>
  );
}

export default App;
