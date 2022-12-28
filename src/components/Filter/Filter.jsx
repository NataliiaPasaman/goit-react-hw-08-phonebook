import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import { InputFilter, LabelFilter } from './Filter.styled';


export const Filter = () => {
  const dispatch = useDispatch();

  const onInputFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
<LabelFilter> Find contacts by name
    <InputFilter 
    type="text"
    name="filter"
    onChange={onInputFilterChange} 
    />
</LabelFilter>
  );
};