import React, { useState, useEffect } from "react";
import Character from "../Character/Character";
import PropTypes from 'prop-types';

const Pagination = ({characters,selectedSpecies,startDate,endDate}) => {
  //Get currentPage number
  const [currentItem, setCurrentItem] = useState(1);
  //set Number of items per page   slice(currentItem,currentItem+numberofItemsPerPage)
  const [numberofItemsPerPage] = useState(10);
  //Initally set Next button active
  const [nextPageDisabled, setNextPageDisabled] = useState(false);
  //Initally set previous button disabled
  const [previousPageDisabled, setPreviousPageDisabled] = useState(true);

  //set filtered array
  const [characterList, setCharacterList] = useState();


  useEffect(() => {
    //check if species filter is changed
    if (selectedSpecies) {
      //filter species and assign to characterList
      let filteredList =characters.filter(
        (character) => character.species === selectedSpecies
      );
      setCharacterList(filteredList);
      //if number of record found are less tha number of items per page then disable next page button
      if (filteredList.length <= numberofItemsPerPage) {
        setNextPageDisabled(true);
      } else {
        setNextPageDisabled(false);
      }
      // Check if start and end date is changed
    }  if (startDate && endDate) {
      
      //filter records according to date and assign to charcterList
      let filteredList;
      //if species is selected, then filter species also  
      if(selectedSpecies){
       filteredList = characters.filter(
        (character) =>
          character.created.substring(0, 10) >= startDate &&
          character.created.substring(0, 10) <= endDate && character.species===selectedSpecies
      );
         }else{ // If no species selected then consider entire list
          filteredList = characters.filter(
            (character) =>
              character.created.substring(0, 10) >= startDate &&
              character.created.substring(0, 10) <= endDate
          );
       }
      setCharacterList(filteredList);
    
      //if number of record found are less tha number of items per page then disable next page button
      if (filteredList.length <= numberofItemsPerPage) {
        setNextPageDisabled(true);
      } else {
        setNextPageDisabled(false);
      }
      //if no filter selected then get list directly from props
    } else {
      setCharacterList(characters);
    }
  }, [characters,selectedSpecies,startDate,endDate, numberofItemsPerPage]);

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
            <a href={"/character/" + character.id} key={character.id} alt="click to see detail view" className="characterLink">
              {" "}
              <Character {...character}></Character>
            </a>
          ))}
    </div>
  );
};

export default React.memo(Pagination);

Pagination.propTypes = {
  characters: PropTypes.array,
  selectedSpecies: PropTypes.string,
  startDate: PropTypes.any,
  endDate: PropTypes.any
};