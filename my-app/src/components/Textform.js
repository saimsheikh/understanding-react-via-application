import React, {useState} from 'react'



export default function Textform(props) {
    const handleupclick = () => {
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
    }
    const handlelowclick = () => {
        console.log("Uppercase was clicked" + text);
        setText(text.toLowerCase());
    }
    const handler = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
  const [text,setText] = useState('Enter text here');
 // text="new state"; //wrong way;
  //setText("new state"); //correct way
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor='mytext' className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handler} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lower case</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}
