import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { arrangeNotification } from "./reducers/notificationReducer";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    dispatch(arrangeNotification(`Anecdote ${anecdote.content} created!`, 2000))
  };


  /*
  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);
  */

  /*
  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };
  */

  return (
    <div>
      <h1>Software anecdotes</h1>
      <div>{notification}</div>
      <Menu
        anecdotes={anecdotes}
        addNew={addNew}
      />
      <Footer />
    </div>
  );
};

export default App;
