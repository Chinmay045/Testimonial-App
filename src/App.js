import React from "react";
import Testimonial from './components/Testimonial.jsx';
import reviews from './data.js';

const App = () => {
  return <div>
    <div>
      <h1>Our Testimonials</h1>
      <div></div>
      <Testimonial reviews={reviews} />
    </div>
  </div>;
};

export default App;
