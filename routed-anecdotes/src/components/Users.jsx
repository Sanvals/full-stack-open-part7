import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import anecdotes from "../data/anecdotes"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Users = () => {
  const authorsList = [... new Set(anecdotes.map(a => a.author))]
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Anecdotes created</th>
            </tr>
            {
            authorsList.map(author => {
              return (
                <tr key={author}>
                  <td><Link to={`/users/${author}`}>{author}</Link></td>
                  <td>{anecdotes.map(a => a.author === author).length}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </ul>
    </div>
  )
}

export default Users