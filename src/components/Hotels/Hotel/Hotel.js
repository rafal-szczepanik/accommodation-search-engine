import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './Hotel.module.css';
import {ThemeContext} from "../../../context/themeContext";

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  opinions: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export const Hotel = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={props.image}
              alt=""
              className="img-fluid img-thumbnail"/>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.name}</p>
                <span className="badge text-black bg-light">{props.city}</span>
              </div>

              <div className="col text-end">
                <h5>Ocena:
                  <span className="badge text-secondary">{props.rating}</span></h5>
                <p>Opinie: {props.opinions}</p>
                <a href="#" className={`btn btn-${theme.theme} mt-2 px-5 float-end`}>Pokaż</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className={styles.description}>{props.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Hotel.propTypes = propTypes;
