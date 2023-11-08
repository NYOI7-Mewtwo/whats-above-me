import TopContainer from './containers/TopContainer';
import BottomContainer from './containers/BottomContainer';
import { CoordinatesContextProvider } from './context/CoordinatesContext';

const App = () => {
  return (
    <>
      <CoordinatesContextProvider>
        <TopContainer />
        <BottomContainer />
      </CoordinatesContextProvider>
    </>
  );
};

export default App;
