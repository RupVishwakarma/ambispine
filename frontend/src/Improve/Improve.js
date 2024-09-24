// import React, { useEffect, useRef, useState } from 'react';

// export default function Improve() {
//           const [inputValue, setInputValue] = useState('')
//           const count = useRef(0);
//           useEffect(()=>{
//                  count.current = count.current+1;   
//           })
//   return (
//     <div>
//        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       <h1>Render Count: {count.current}</h1>
//     </div>
//   )
// }


const initialState = {
  count: 0
};

function reducer(state, action) {
  switch(action.type){
    case "increment":
      return { count: state.count +1 };
  },
  
}