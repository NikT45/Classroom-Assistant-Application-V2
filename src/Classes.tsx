import React, { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import { invoke } from '@tauri-apps/api/tauri'


const Classes: React.FC = () => {

  
  const create_class = () => {
    invoke('create_class')
  };
    return (
        <div>
          <h2></h2>
          <p></p>
          <Dropdown />
          <div>
          Create new year group: <input name="new_year" defaultValue="" />
          <button
            onClick={create_class}
          >Create New Class</button>
          </div>
        </div>
      );
};
export default Classes