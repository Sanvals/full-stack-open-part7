import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <h1>Software anecdotes</h1>
      <div>{useSelector(state => state.notification)}</div>
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
