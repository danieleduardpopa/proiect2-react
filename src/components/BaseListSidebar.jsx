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
    <div className=''>
                
      <h4>Pret</h4>
      <div className='d-flex'>
        <label htmlFor="range1"className='w-50 mr-4'>
          {props.range1[0]}...{props.range1[1]} {props.currency}
        </label>
        
        <input 
          type="radio" 
          name="pricing" 
          value="1" 
          id="range1"
          onChange={handleRangeChange}
          checked={selectedRange === "1"}
        />
      </div>

      <div>
        <label htmlFor="range2" className='w-50 mr-4'>
          {props.range2[0]}...{props.range2[1]} {props.currency}
        </label>
        <input 
          type="radio" 
          name="pricing" 
          value="2" 
          id="range2"
          onChange={handleRangeChange}
          checked={selectedRange === "2"}
                  />
      </div>

      <div>
        <label htmlFor="range3" className='w-50 mr-4'>
          {props.range3[0]}...{props.range3[1]} {props.currency}
        </label>
        <input 
          type="radio" 
          name="pricing" 
          value="3" 
          id="range3"
          onChange={handleRangeChange}
          checked={selectedRange === "3"}
        />
        
      </div>
      <button onClick={resetFilter} className='btn btn-outline-dark'>
        RESET FILTER
      </button>
    </div>           
  )
}

export  default BaseListSidebar;
