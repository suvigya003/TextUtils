import React, { useState } from 'react'

export default function Form(props) {
  
//   const [myStyle, setMyStyle] = useState({
//     backgroundColor: 'white',
//     color:'black'
//   });
//   const [btnText, setBtnText] = useState('Enable dark mode');
//   const toggleStyle = () => {
//     if (myStyle.backgroundColor === 'white') {
//       setMyStyle({
// backgroundColor: 'black',
//         color: 'white',
//         // border: '2px white solid',
//         borderRadius: '5px'
    
//       }        
//       )
//       setBtnText('Enable light mode')
//     }
//     else {
//       setMyStyle({
// backgroundColor: 'white',
//     color:'black'
//       }        
//       )
//       setBtnText('Enable dark mode')
//     }
//   }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (e) => {         //e is an event object
    setText(e.target.value);        //e.target.value is used to fetch latest value from textarea and update it using setText
  }
  const copyText = () => {
    var copyText = document.getElementById("myid");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  }
  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState("");
  return (
    <>
      <div >          
        <div className="container mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              <h2>{ props.heading}</h2>
              <textarea className="form-control my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743',color: props.mode === 'light' ? 'black' : 'white' }}id="myid"value={text} onChange={handleOnChange} rows="8"></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>
          
          </div>
      </div>
      <div className="container mb-3 my-2"style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{ text.length>0?text:'Enter something in textarea to preview'}</p>
      </div>
      
      {/* <div className="container my-3">
        <button className="btn btn-primary " onClick={toggleStyle}>{btnText}</button>
      </div> */}
      </>
  )
}
