import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { allUsers, updateUser } from "../../../redux/actions";

export default function UserList() {
  const dispatch = useDispatch()

  const { users } = useSelector((state) => state);

  const { id } = useParams();

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  

  function updateUserStatus(id,item,status){
        console.log(id, 'userId')
    const data = {[item]:status}

    dispatch(updateUser(id, data))
    dispatch(allUsers());
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin: "30px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="center">Admin</TableCell>
            <TableCell align="center">Upgrade Rol</TableCell>
            <TableCell align="center">Bann state</TableCell>
            <TableCell align="center">Meetups</TableCell>
            <TableCell align="center">Invitations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => {
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt={row.name} src={row.profilePic} />
                  {row.name} {row.surname}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="center">{row.isAdmin ? "Si" : "No"}</TableCell>
                <TableCell align="center">{+row.id===+id? "" :row.isAdmin ? 
                <Button onClick={() => updateUserStatus(row.id,"isAdmin",false)}>Become User</Button> : 
                <Button onClick={() => updateUserStatus(row.id,"isAdmin",true)}>Become Admin</Button>
                }</TableCell>
                <TableCell align="center">{+row.id===+id? "" :row.banned ? 
                <Button onClick={() => updateUserStatus(row.id,"banned",false)}>Unban</Button> : 
                <Button onClick={() => updateUserStatus(row.id,"banned",true)}>Ban</Button>
                }</TableCell>
                <TableCell align="center">{row.meetings.length}</TableCell>
                <TableCell align="center">{row.invitations.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}