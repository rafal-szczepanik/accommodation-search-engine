import {Hotel} from "./Hotel/Hotel";
import PropTypes from "prop-types";
import styles from './Hotels.module.css';

const propTypes = {
  hotels: PropTypes.array.isRequired
};

export const Hotels = ({hotels}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty:</h2>
      {hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
    </div>
  );
};

Hotels.propTypes = propTypes;