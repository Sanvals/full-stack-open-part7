import { useParams, Link } from "react-router-dom";
import { deleteAnecdote, addVote, addComment } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks/index";

const AnecdoteList = ({ anecdotes }) => {
  const comment = useField();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, user } = useParams();

  const del = (id) => {
    dispatch(deleteAnecdote(id));
    navigate("/");
  }

  const vote = (id) => {
    dispatch(addVote(id));
  }

  const getComment = (e) => {
    e.preventDefault()
    dispatch(addComment(comment.value, id));
  }

  if (id) {
    const content = anecdotes.find((a) => a.id === Number(id));
    if (!content) {
      return <div>Anecdote not found</div>
    }
    // console.log(content.comments)
    return (
      <>
      <h2>Anecdote details</h2>
      <strong>{content.content}</strong> by <i>{content.author}</i>
      <div><a href={content.info}>{content.info}</a></div>
      <div>
        Has {content.votes} votes
      </div>
      <div>
        <button onClick={() => vote(content.id)}>vote</button><button onClick={() => del(content.id)}>delete</button>
      </div>
      <div>
        <h2>Comments</h2>
        <form onSubmit={getComment}>
          <input {...comment} reset={() => comment.reset()}/>
          <button type="submit">send</button>
        </form>
        <ul>
          {content.comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </>
  );
  }

  if (user) {
    const byUser = anecdotes.filter((a) => a.author === user);
    // console.log(byUser)
    return (
      <>
      <h2>Anecdotes by {user}</h2>
      {byUser.map((a) => (
          <li key={a.id}>
            <Link to={`/${a.id}`}>{a.content}</Link>
          </li>
        ))}
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
