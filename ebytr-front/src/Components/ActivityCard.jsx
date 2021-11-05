import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContext from '../Context/ActivitiesContext';
import { deleteActivityToAPI, updateActivityToAPI } from '../Utils/useAPI';

function handleDelete(id) {
  deleteActivityToAPI(id);
}

function handleEditBtn(event) {
  const { target } = event;
  const allEditableFields = document.querySelectorAll('[contenteditable]');
  allEditableFields.forEach((field) => {
    if (field.getAttribute('contenteditable') === 'true') {
      field.setAttribute('contenteditable', false);
      field.setAttribute('style', 'background-color: red');
      target.innerText = 'Editar';
    } else {
      field.setAttribute('contenteditable', true);
      field.setAttribute('style', 'background-color: white');
      target.innerText = 'Salvar';
    }
  });
}

function ActivityCard(props) {
  const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    backgroundColor: 'red',
  };
  const {
    data: { name, description, status, date, _id },
  } = props;
  const { setRerender, rerender } = useContext(ActivitiesContext);
  return (
    <div className="activityCard" style={ divStyle }>
      <h2 contentEditable="false" suppressContentEditableWarning id="name">
        {name}
      </h2>
      <h3 contentEditable="false" suppressContentEditableWarning id="description">
        {description}
      </h3>
      <h4>
        Status:
        <span contentEditable="false" suppressContentEditableWarning id="status">
          {status}
        </span>
      </h4>
      <h5 id="date">
        {/* https://stackoverflow.com/questions/38549256/how-to-convert-isostring-to-date-format-dd-mm-yyyy-using-javascript */}
        {`Criada em: ${date
          .toString()
          .match(/([^T]+)/)[0]
          .split('-')
          .reverse()
          .join('/')}`}
      </h5>
      <select
        id="status"
        defaultValue={ status }
        onChange={ async (event) => {
          const { value } = event.target;
          await updateActivityToAPI({ _id, name, description, status: value });
          setRerender(!rerender);
        } }
      >
        <option value="Pendente">Pendente</option>
        <option value="Em Andamento">Em Andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      <button
        type="button"
        onClick={ () => {
          handleDelete(_id);
          setRerender(!rerender);
        } }
      >
        {' '}
        Excluir
        {' '}
      </button>
      <button
        type="button"
        onClick={ async (event) => {
          if (event.target.innerText === 'Salvar') {
            await updateActivityToAPI({
              _id,
              name: document.getElementById('name').innerText,
              description: document.getElementById('description').innerText,
              status: document.getElementById('status').value,
            });
            setRerender(!rerender);
          }
          handleEditBtn(event);
        } }
      >
        Editar
      </button>
    </div>
  );
}

export default ActivityCard;

ActivityCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
