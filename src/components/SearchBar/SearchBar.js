import React, {useContext, useState} from 'react';
import PropTypes from "prop-types";
import {ThemeContext} from "../../context/themeContext";

const propTypes = {
  onSearch: PropTypes.func.isRequired
};

export const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const theme = useContext(ThemeContext);

  const updateTermHandler = ({target}) => {
    setTerm(target.value);
  };
  const updateOnEnterHandler = (e) => {
    e.key === 'Enter' && search();
  };
  const search = () => {
    props.onSearch(term);
  };
  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={updateOnEnterHandler}
        onChange={updateTermHandler}
        className="form-control"
        type="text" placeholder="Szukaj..."/>
      <button
        onClick={() => search()}
        className={`ms-1 btn btn-${theme.theme}`}>
        Szukaj
      </button>
    </div>
  );
};

SearchBar.propTypes = propTypes;