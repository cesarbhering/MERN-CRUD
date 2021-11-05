import React, { useContext } from 'react';
import ActivitiesContext from '../Context/ActivitiesContext';

function Filters() {
  const { data, setData, forceUpdate } = useContext(ActivitiesContext);

  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  function orderByName() {
    const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
    return setData(sorted);
  }

  function orderByDate() {
    const sorted = data.sort((a, b) => a.date.localeCompare(b.date));
    return setData(sorted);
  }

  function orderByStatus() {
    const sorted = data.sort((a, b) => a.status.localeCompare(b.status));
    return setData(sorted);
  }

  return (
    <div>
      <h3>Ordenar Por:</h3>
      <label htmlFor="alphabetic">
        Ordem Alfabética
        <input
          type="radio"
          id="alphabetic"
          name="orderBy"
          value="alphabetic"
          onClick={ () => {
            orderByName();
            forceUpdate();
          } }
        />
      </label>
      <br />
      <label htmlFor="creationDate">
        Data Criação
        <input
          type="radio"
          id="creationDate"
          name="orderBy"
          value="creationDate"
          onClick={ () => {
            orderByDate();
            forceUpdate();
          } }
        />
      </label>
      <br />
      <label htmlFor="status">
        Status
        <input
          type="radio"
          id="status"
          name="orderBy"
          value="status"
          onClick={ () => {
            orderByStatus();
            forceUpdate();
          } }
        />
      </label>
    </div>
  );
}

export default Filters;
