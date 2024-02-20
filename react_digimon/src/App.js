// Import necessary components from React and React-Admin
import './App.css';
import React from 'react';
import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { DigimonList } from './DigimonList';
import { TrainerList } from './TrainerList';
import { TeamList } from './TeamList';
import { TipoList } from './TipoList';

// Define the API URL of your LoopBack 4 application
const mydataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={mydataProvider}>
    <Resource name="digimons" list={DigimonList} />
    <Resource name="trainers" list={TrainerList} /> 
    <Resource name="teams"    list={TeamList}    />
    <Resource name="tipos"    list={TipoList}    />
  </Admin> 
);

export default App;
