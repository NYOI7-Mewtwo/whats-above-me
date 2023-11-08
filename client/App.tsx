import { CoordinatesContextProvider } from './context/CoordinatesContext';
import TopContainer from './containers/TopContainer';
import BottomContainer from './containers/BottomContainer';
import Background from './components/Background';

const App = () => {
  return (
    <>
      <CoordinatesContextProvider>
        {/* <TopContainer /> */}
        {/* <BottomContainer /> */}
        <Background />
      </CoordinatesContextProvider>
    </>
  );
};

export default App;
