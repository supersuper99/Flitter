import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="app">
        <h1>FLITTER</h1>
        <Sidebar />
      </div>
    </IonPage>
  );
};

export default Home;
