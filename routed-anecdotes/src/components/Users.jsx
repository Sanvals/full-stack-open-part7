import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import anecdotes from "../data/anecdotes"

const Users = () => {
  const authorsList = anecdotes.map(a => a.author)
  console.log(anecdotes.map(a => a.author === authorsList[0]).length)
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
                  <td>{author}</td>
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