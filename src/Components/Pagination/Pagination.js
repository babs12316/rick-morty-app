import React, { useState } from "react";
import Character from "../Character/Character";
const Pagination = (props) => {
  //Get currentPage number
  const [currentItem, setCurrentItem] = useState(1);
  //set Number of items per page   slice(currentItem,currentItem+numberofItemsPerPage)
  const [numberofItemsPerPage] = useState(5);
  //Initally set Next button active
  const [nextPageDisabled, setNextPageDisabled] = useState(false);
  //Initally set previous button disabled
  const [previousPageDisabled, setPreviousPageDisabled] = useState(true);


  const handleNext = () => {
    let nextItem = currentItem + numberofItemsPerPage;
    setCurrentItem(nextItem);
    //When we reach at the end of number items, disabled next button
    if (props.characters.length < nextItem + numberofItemsPerPage) {
      setNextPageDisabled(true);
    }
    setPreviousPageDisabled(false);
  };
  let handlePrevious = () => {
    let previousItem = currentItem - numberofItemsPerPage;
    setCurrentItem(previousItem);
    // if we are on first page disable previous button
    if (previousItem === 1) {
      setPreviousPageDisabled(true);
      setNextPageDisabled(false);
    } else {
      // if we are not on first page, mean user can come back to enable previous button
      setPreviousPageDisabled(false);
    }
  };

  return (
    <div>
      <button disabled={nextPageDisabled} onClick={handleNext}>
        Next
      </button>
      <button disabled={previousPageDisabled} onClick={handlePrevious}>
        Previous
      </button>
      {props.characters &&
        props.characters
          .slice(currentItem, currentItem + numberofItemsPerPage)
          .map((character) => (
            <Character key={character.id} {...character}></Character>
          ))}
    </div>
  );
};

export default Pagination;
