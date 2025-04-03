import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Routes from './routes';

import '@ionic/react/css/core.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Routes />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
