import React, { useState } from 'react'
import { userData } from '../../data';
import Swal from 'sweetalert2';

import Header from './Header';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser'

function DashboardComp() {

    // User List 
    const[users , setUsers] = useState(userData);
    const[selectedUsers , setSelectedUsers] = useState(null);
    // Add user State for Add new Users
    const[isAdding, setIsAdding] = useState(false);
    //  While I try to edit user then data of selected user shoud be in form
    const[isEditing, setisEditing] = useState(false);


    const handleEdit = (id) =>{
        console.log("Edit Handle working" , id);
        const [user] = users.filter(user => user.id === id);

        setSelectedUsers(user);
        setisEditing(true);
        
    }


    //  Delete the user recorde from table
    const handleDelete =(id)=>{
        console.log("Delete working" , id)
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [user] = users.filter(user => user.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${user.firstName} ${user.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setUsers(users.filter(user => user.id !== id));
            }
        });
    }



  return (
    <div>
      {/* <h1> Dashboard </h1> */}
      { !isAdding && !isEditing && (
            <>
                <Header
                    setIsAdding={setIsAdding}
                />
                <UserList
                    users={users}
                    handleEdit = {handleEdit}
                    handleDelete={handleDelete}
                />
                

            </>
        ) }

        {/*  If USerEdit Click then Handle Form */}
        { isAdding && (
            <AddUser
                users={users}
                setUsers={setUsers}
                setIsAdding={setIsAdding}
            /> 
        ) }

        {/* Edit THe UserDate */}
        {isEditing && (
            <EditUser
                users={users}
                selectedUsers = {selectedUsers}
                setUsers={setUsers}
                setisEditing = {setisEditing}
            />
        )}
     
      
      {/* <Header/> */}
       
       
    </div>
  )
}
export default DashboardComp;
