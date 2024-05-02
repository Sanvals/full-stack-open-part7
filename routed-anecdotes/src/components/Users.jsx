import { useSelector } from "react-redux"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {
  const anecdotes = useSelector((state) => state.anecdote)
  const authorsList = [... new Set(anecdotes.map(a => a.author))]

  // console.log(anecdotes.filter(a => a.author === "Jez").length)

  return (
    <div>
      <h2>Users</h2>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Anecdotes created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            authorsList.map(author => {
              return (
                <TableRow key={author}>
                  <TableCell component={Link} to={`/users/${author}`} scope="row">{author}</TableCell>
                  <TableCell>{anecdotes.filter(a => a.author === author).length}</TableCell>
                </TableRow>
              )
            })
            }
          </TableBody>
          </Table>
        </TableContainer>
      </ul>
    </div>
  )
}

export default Users