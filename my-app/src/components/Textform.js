import React, {useState} from 'react'



export default function Textform(props) {
    const handleupclick = () => {
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
    }
    const handler = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
  const [text,setText] = useState('Enter text here');
 // text="new state"; //wrong way;
  //setText("new state"); //correct way
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor='mytext' className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handler} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>Convert to UpperCase</button>
    </div>
  )
}
