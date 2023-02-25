import React, {useState} from 'react'



export default function Textform(props) {
    const handleupclick = () => {
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }
    const handlelowclick = () => {
        console.log("lowercase was clicked" + text);
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success");
    }
    const handleclear = () => {
        console.log("clear was clicked" + text);
        let test="";
        setText(test);
    }
    const handler = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const  handlecopy = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlespaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


  const [text,setText] = useState('Enter text here');
 // text="new state"; //wrong way;
  //setText("new state"); //correct way
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor='mytext' className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handler}
        style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
         id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>clear</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handlespaces}>remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"enter some text to preview here."}</p>
    </div>
    </>
    
  )
}
