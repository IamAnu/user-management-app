import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ users, selectedUsers, setUsers, setisEditing }) {

    const id = selectedUsers.id

    const [firstName, setFirstName] = useState(selectedUsers.firstName);
    const [email, setEmail] = useState(selectedUsers.email);
    const [mobileNo, setMobileNo] = useState(selectedUsers.mobileNo);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName  || !email || !mobileNo) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const user = {
            id,
            firstName,
            email,
            mobileNo
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1, user);
                break;
            }
        }

        setUsers(users);
        setisEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${user.firstName} ${user.mobileNo}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit User</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                 <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                    id="mobileNo"
                    type="text"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={e => setMobileNo(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setisEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit