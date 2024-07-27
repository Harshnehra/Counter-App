import React, { useState } from 'react';
import Styles from "./Counter.module.css"

function Counterfunction() {
 
  const [count, setCount] = useState(0);

  return (    

      <div className={`${Styles["container"]}`}>

      <button className={`${Styles["plus-btn"]}`} onClick={() => setCount(count + 1)}>
      PLUS 
      </button>

      <div className={`${Styles["display-box"]}`} >
      Count = {count}
      </div>

      <button className={`${Styles["minus-btn"]}`} onClick={() => setCount(count - 1)}>
      MINUS 
      </button>

      </div>

  );
}

export default Counterfunction;