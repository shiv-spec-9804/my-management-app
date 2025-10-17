import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
})


// fetch single user
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.data
})


// add user (note: jsonplaceholder returns the posted object but doesn't persist)
export const addUser = createAsyncThunk('users/addUser', async (user) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', user)
    return res.data
})


// delete user (jsonplaceholder returns a 200 but doesn't persist)
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return id
})


const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSelectedUser: (state) => { state.selectedUser = null },
    },
    extraReducers: (builder) => {
        builder
            // fetchUsers
            .addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null })
            .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.users = action.payload })
            .addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.error.message })


            // fetchUserById
            .addCase(fetchUserById.pending, (state) => { state.loading = true; state.error = null })
            .addCase(fetchUserById.fulfilled, (state, action) => { state.loading = false; state.selectedUser = action.payload })
            .addCase(fetchUserById.rejected, (state, action) => { state.loading = false; state.error = action.error.message })


            // addUser
            .addCase(addUser.pending, (state) => { state.loading = true; state.error = null })
            .addCase(addUser.fulfilled, (state, action) => { state.loading = false; state.users.push(action.payload) })
            .addCase(addUser.rejected, (state, action) => { state.loading = false; state.error = action.error.message })


            // deleteUser
            .addCase(deleteUser.pending, (state) => { state.loading = true; state.error = null })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter((u) => u.id !== action.payload)
            })
            .addCase(deleteUser.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
    },
})


export const { clearSelectedUser } = userSlice.actions
export default userSlice.reducer