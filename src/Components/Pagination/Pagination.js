import React, { useState, useEffect } from "react";
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

  //set filtered array
  const [characterList, setCharacterList] = useState();

  console.log(`end date is ${props.startDate}`);

  useEffect(() => {
      //check if species filter is changed
    if (props.selectedSpecies) {
        //filter species and assign to characterList
      let filteredList = props.characters.filter(
        (character) => character.species === props.selectedSpecies
      );
      setCharacterList(filteredList);
       //if number of record found are less tha number of items per page then disable next page button
      if (filteredList.length <= numberofItemsPerPage) {
        setNextPageDisabled(true);
      } else {
        setNextPageDisabled(false);
      }
      // Check if start and end date is changed
    } else if (props.startDate && props.endDate) {
        //filter records according to date and assign to charcterList
      let filteredList = props.characters.filter(
        (character) =>
          character.created.substring(0, 10) >= props.startDate &&
          character.created.substring(0, 10) <= props.endDate
      );
      setCharacterList(filteredList);
     //if number of record found are less tha number of items per page then disable next page button
      if (filteredList.length <= numberofItemsPerPage) {
        setNextPageDisabled(true);
      } else {
        setNextPageDisabled(false);
      }
      //if no filter selected then get list directly from props
    } else {
      setCharacterList(props.characters);
    }
  }, [props, numberofItemsPerPage]);

  const handleNext = () => {
    let nextItem = currentItem + numberofItemsPerPage;
    setCurrentItem(nextItem);
    //When we reach at the end of number items, disabled next button
    if (characterList.length < nextItem + numberofItemsPerPage) {
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

      {characterList &&
        characterList
          .slice(currentItem, currentItem + numberofItemsPerPage)
          .map((character) => (
            <Character key={character.id} {...character}></Character>
          ))}
    </div>
  );
};

export default Pagination;
