import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddUser({ users, setUsers, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
  
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    //  After Add new user It will shown the new user in list.
    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !email || !mobileNo ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = users.length + 1;
        const newUsers = {
            id,
            firstName,
            email,
            mobileNo,
            
        }
        users.push(newUsers);
        setUsers(users);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${mobileNo}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add New User</h1>
                <label htmlFor="firstName">User Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="mobileNo">Mobile Number</label>
                <input
                    id="mobileNo"
                    type="text"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={e => setMobileNo(e.target.value)}
                />
                {/* Add And Cancel Button */}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default AddUser