import React from "react";
import '../styleSheet/Counter.css'

function Counter({ numClicks }) {
    return (
      <div className='counter'>
          {numClicks}
      </div>
    );
}

export default Counter