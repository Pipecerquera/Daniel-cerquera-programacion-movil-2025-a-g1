import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Gestion from './pages/Gestion';

const Routes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/gestion" component={Gestion} />
      <Redirect exact from="/" to="/gestion" />
    </IonRouterOutlet>
  );
};

export default Routes;
