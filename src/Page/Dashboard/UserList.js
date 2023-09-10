import React from "react";

function UserList({ users, handleEdit, handleDelete }) {
    return(
            <div className="contain-table">
            <table className="striped-table" >
                    <thead>
                        <tr>
                            <th> No. </th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th colSpan={2} className="text-center" > Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user , index) => (
                                <tr key = {user.id}>
                                    <td>{index+1}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobileNo}</td>
                                    <td className="text-right">
                                        <button
                                            className="button muted-button"
                                            onClick={()=> handleEdit(user.id)}
                                        >
                                        Edit
                                        </button>
                                    </td>
                                    <td className="text-left">
                                        <button
                                            className="button muted-button"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                        Delete
                                        </button>

                                    </td>

                                </tr>
                            ))
                        ):(
                            <tr> <td colSpan={7}> NO User Avilable </td> </tr>
                        )}
                    
                        
                    </tbody>
            </table>
            </div>
    );
}

export default UserList;
