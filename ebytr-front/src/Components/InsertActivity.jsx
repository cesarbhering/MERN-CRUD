import React from 'react';
import { postActivityToAPI } from '../Utils/useAPI';

function InsertActivity() {
  return (
    <form
      id="insertActivityForm"
      name="insertActivityForm"
      onSubmit={ postActivityToAPI }
    >
      <div>
        <label htmlFor="name">
          Atividade:
          <input type="text" id="name" name="name" minLength="5" required />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            minLength="10"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="status">
          Status:
          <input list="status" name="status" />
          <datalist id="status">
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Pronto">Pronto</option>
          </datalist>
        </label>
        <input type="submit" value="Cadastrar Atividade" />
      </div>
    </form>
  );
}

export default InsertActivity;
