import React from "react";
import { useState, useEffect } from 'react';

const MortgageCalculator = () => {
    const [value, setValue] = useState(100);

    const calculate = (a,b,c) => {return (a+b+c)}

    return (
        <div className="container">
          <div className="MortgageCalculator">
            <form action="">
              <div className="display">
                <input type="text" value={value} />
              </div>
              <div>
                <input type="text" onClick={e => setValue(value + e.target.value)} />
                <input type="text" onClick={e => setValue(value + e.target.value)} />
                <input type="text" onClick={e => setValue(value + e.target.value)} />
              </div>
              <div>
                <input type="button" value="=" className="calculate" onClick={e => setValue(calculate())} />
              </div>
            </form>
          </div>
        </div>
    )
}


// { 
//   <div className='d-flex justify-content-center'>
//     <button className='btn btn-primary' onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
//     <div className='d-flex mx-5'>Count {counter} </div>
//     <button className='btn btn-primary' onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
//   </div>
// }

export default MortgageCalculator