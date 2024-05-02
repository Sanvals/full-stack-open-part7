import { useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import { Container } from "@mui/material";
import Alert from '@mui/material/Alert';

import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <Container>
      <h1>Software anecdotes</h1>
      { 
      notification && 
        <Alert 
          variant="filled"
          severity="success"
          style={{position: "absolute", zIndex: "1000"}}>
            {notification}
        </Alert>
      }
      <Menu />
      <Footer />
    </Container>
  );
};

export default App;
