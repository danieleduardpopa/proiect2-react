import React, {useState} from 'react';

function BaseListSidebar(props) {
  const [selectedRange, setSelectedRange ] = useState(null);
  

  function handleRangeChange(event) {
    setSelectedRange(event.target.value);
    props.onRangeChange(event.target.value)
  };

  function resetFilter() {
    if (selectedRange !==0) {
      setSelectedRange(0);
      props.onRangeChange(0);
    } 
  }
  
    
  return (
    <div className='container'>
      <div className='row justify-content-start'>
        <h4>Pret:</h4>
      </div>          
      <div className='row justify-content-between align-items-center border rounded mb-2'>
        <p className='col-md-10 col-8 my-auto'>
          {props.range1[0]}...{props.range1[1]} {props.currency}
        </p>
        
        <input 
          type="radio" 
          name="pricing" 
          value="1" 
          id="range1"
          onChange={handleRangeChange}
          checked={selectedRange === "1"}
          className='col-md-2 col-4 '
        />
      </div>

      <div className='row justify-content-between align-items-center border rounded mb-2'>
        <p className='col-md-10 col-8 my-auto'>
          {props.range2[0]}...{props.range2[1]} {props.currency}
        </p>
        <input 
          type="radio" 
          name="pricing" 
          value="2" 
          id="range2"
          onChange={handleRangeChange}
          checked={selectedRange === "2"}
          className='col-md-2 col-4 '
        />
      </div>

      <div  className='row justify-content-between align-items-center border rounded mb-2'>
        <p className='col-md-10 col-8 my-auto'>
          {props.range3[0]}...{props.range3[1]} {props.currency}
        </p>
        <input 
          type="radio" 
          name="pricing" 
          value="3" 
          id="range3"
          onChange={handleRangeChange}
          checked={selectedRange === "3"}
          className='col-md-2 col-4 '
        />
        
      </div>
      <button onClick={resetFilter} className='btn btn-outline-dark mt-2'>
        RESET FILTER
      </button>
    </div>           
  )
}

export  default BaseListSidebar;
