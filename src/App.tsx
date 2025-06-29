import { Wrapper } from './components/wrapper/Wrapper';
import { RootStoreContext } from './root-store-context';

import RootStore from './stores/root-store';


const App = () => {
  return ( 
    <RootStoreContext.Provider value={new RootStore()}>
      <div>
        <Wrapper />
      </div>
    </RootStoreContext.Provider>
  );
};

export default App;