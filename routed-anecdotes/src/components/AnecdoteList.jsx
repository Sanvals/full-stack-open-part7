import { useParams, Link } from "react-router-dom";
import { deleteAnecdote, addVote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const content = anecdotes.find((a) => a.id === Number(id));

  const del = (id) => {
    dispatch(deleteAnecdote(id));
    navigate("/");
  }

  const vote = (id) => {
    dispatch(addVote(id));
  }

  if (content) {
    return (
      <>
      <h2>Anecdote details</h2>
      <strong>{content.content}</strong> by <i>{content.author}</i>
      <div>
        Has {content.votes} votes
      </div>
      <div>
        <button onClick={() => vote(content.id)}>vote</button><button onClick={() => del(content.id)}>delete</button>
      </div>
    </>
  );
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((a) => (
          <li key={a.id}>
            <Link to={`/${a.id}`}>{a.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
