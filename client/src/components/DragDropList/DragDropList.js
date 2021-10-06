import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import imageSong from "../../assets/images/albums/arctic-album-3.jpeg";
import imageSong1 from "../../assets/images/albums/arctic-album-2.jpeg";
import imageSong2 from "../../assets/images/albums/arctic-album-1.jpeg";
import "./style/dragdrop.scss";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: imageSong,
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: imageSong1,
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: imageSong2,
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: imageSong,
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: imageSong1,
  },
];

function DragDropList() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="DragDropList">
      <header className="DragDropList-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default DragDropList;
