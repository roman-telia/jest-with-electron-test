import React from 'react';
import logo from './logo.svg';
import {TeliaButton, TeliaCol, TeliaGrid, TeliaRow, TeliaHeading, TeliaP, TeliaLink} from '@teliads/components/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <TeliaGrid>
        <TeliaRow>
        <TeliaCol width={12}><TeliaHeading variant="display-200" tag="h1">Display 200 H1</TeliaHeading></TeliaCol>
        <TeliaCol width={12}><TeliaHeading variant="display-100" tag="h2">Display 100 H2</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-100" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-200" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-300" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-400" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-500" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-600" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        <TeliaCol width={6}><TeliaHeading variant="title-700" tag="h3">Hi hello Hola</TeliaHeading></TeliaCol>
        </TeliaRow>
      </TeliaGrid>
      <TeliaButton variant="primary" id="telia-button" dataTestid="telia-button" children="Hi there"></TeliaButton>
      <TeliaP>loerm sddds dss sswew <TeliaLink href="https://www.telia.fi" variant="silent">Here</TeliaLink></TeliaP>
      
    </div>
  );
}

export default App;
