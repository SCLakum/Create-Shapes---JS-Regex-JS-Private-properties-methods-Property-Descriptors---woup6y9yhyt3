import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [id, setId] = useState(1);
  const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (e) => {
    setSelectedShape(e.target.value);
  };

  const addShape = () => {
    const newShape = {
      id: id,
      type: selectedShape,
    };
    setShapes([...shapes, newShape]);
    setId(id + 1);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type}>{shape.id}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
