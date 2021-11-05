import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';
import ActivitiesContext from '../Context/ActivitiesContext';
import Filters from './Filters';

function ActivitiesList() {
  const { data } = useContext(ActivitiesContext);
  return (
    <div>
      <h1>Sua lista de Atividades</h1>
      <Link to="/InsertActivity">Adicionar Atividade</Link>
      <Filters />
      {data.map((e, i) => (
        <ActivityCard key={ i } data={ e } />
      ))}
    </div>
  );
}

export default ActivitiesList;
