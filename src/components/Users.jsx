import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, addUser, deleteUser, fetchUserById, clearSelectedUser } from '../features/users/userSlice'

export default function Users() {
    const dispatch = useDispatch()
    const { users, selectedUser, loading, error } = useSelector((state) => state.users)
    const [name, setName] = useState('')
    const [selectedId, setSelectedId] = useState('')


    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    const handleAdd = () => {
        if (!name.trim()) return
        dispatch(addUser({ name, email: `${name.replace(/\s+/g, '').toLowerCase()}@example.com` }))
        setName('')
    }


    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }


    const handleSelect = (id) => {
        setSelectedId(id)
        dispatch(fetchUserById(id))
    }


    return (
        <div style={{ display: 'flex', gap: 16 }}>
            <div className="card" style={{ width: 420 }}>
                <h3>User List</h3> 
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {users.map((u) => (
                        <li key={u.id} style={{ marginBottom: 8 }}>
                            <strong>{u.name}</strong> <br />
                            <small>{u.email}</small> <br />
                            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                                <button onClick={() => handleSelect(u.id)}>View</button>
                                <button onClick={() => handleDelete(u.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>


                <div style={{ marginTop: 12 }}>
                    <input placeholder="New user name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleAdd} style={{ marginLeft: 8 }}>Add</button>
                </div>
            </div>


            <div className="card" style={{ width: 320 }}>
                <h3>User Details</h3>
                {selectedId && selectedUser ? (
                    <div>
                        <p><strong>{selectedUser.name}</strong></p>
                        <p>{selectedUser.email}</p>
                        <p>{selectedUser.phone}</p>
                        <button onClick={() => { dispatch(clearSelectedUser()); setSelectedId('') }}>Close</button>
                    </div>
                ) : (
                    <p>Select a user to view details</p>
                )}
            </div>
        </div>
    )
}