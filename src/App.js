import React, { useState } from "react";
import initialSheklha from "./initialSheklha";
import { Layer, Stage } from "react-konva";
import Rectangle from "./Rectangle";

function App() {
  const [sheklha, setSheklha] = useState(initialSheklha);
  const [selectShape, setSelectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectShape(null);
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      style={{
        backgroundColor: "pink",
      }}
    >
      <Layer>
        {sheklha.map((item, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={item}
              isSelected={item.id === selectShape}
              onSelect={() => {
                setSelectShape(item.id);
              }}
              onChange={(newAttrs) => {
                const copyOfSheklha = sheklha.slice();
                copyOfSheklha[i] = newAttrs;
                console.log(newAttrs);
                setSheklha(copyOfSheklha);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

export default App;
