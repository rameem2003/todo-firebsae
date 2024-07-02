import Flex from "./components/Flex";
import Home from "./screens/Home";
import { firebaseConfig } from "./firebase.config";

function App() {
  return (
    <Flex className=" bg-[#15101C] items-center justify-center w-full h-screen">
      <Home />
    </Flex>
  );
}

export default App;
