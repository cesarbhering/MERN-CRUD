import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContext from './ActivitiesContext';

function ActivitiesProvider({ children }) {
  const [data, setData] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [, updateState] = useState();

  useEffect(() => {
    const getActivities = async () => {
      const results = await fetch(
        'http://localhost:3002/Activities',
      ).then((res) => res.json());
      setData(results);
    };
    getActivities();
  }, [rerender]);

  // https://javascript.plainenglish.io/how-to-force-a-component-to-re-render-with-react-hooks-a3854c07ff9c
  const forceUpdate = useCallback(() => updateState({}), []);

  const contextValue = {
    data,
    setData,
    rerender,
    setRerender,
    forceUpdate,
  };

  return (
    <ActivitiesContext.Provider value={ contextValue }>
      {children}
    </ActivitiesContext.Provider>
  );
}

export default ActivitiesProvider;

ActivitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
