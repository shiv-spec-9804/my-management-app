# 🧑‍💻 User Management App (React + Redux Toolkit)

A simple React application built with **Redux Toolkit** and **React-Redux** to demonstrate how state management works using slices, reducers, and async API calls.

---

## 🚀 Features

- User listing with API integration using **Axios**
- Global state management using **Redux Toolkit**
- Modular architecture with `store.js` and `slices`
- Counter example for understanding reducers and actions
- Separate slice for managing users

---

## ⚙️ Installation Steps

### 1️⃣ Create a new React project
If not already created, use:
```bash
npx create-react-app user-management-app

###########################
Move inside the project:
cd user-management-app

###########################
Install dependencies :
npm install @reduxjs/toolkit react-redux axios
#################################################

| Package              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **react**            | Frontend library for building UI                         |
| **react-dom**        | Renders React components to the DOM                      |
| **@reduxjs/toolkit** | Official, modern Redux library for easy state management |
| **react-redux**      | React bindings for Redux                                 |
| **axios**            | For API calls and HTTP requests                          |

########################
Folder Structure
user-management-app/
│
├── src/
│   ├── app/
│   │   └── store.js          # Configures Redux store
│   │
│   ├── features/
│   │   ├── counter/
│   │   │   └── counterSlice.js
│   │   └── users/
│   │       └── userSlice.js
│   │
│   ├── components/
│   │   ├── Counter.jsx       # Counter component using counter slice
│   │   └── UserList.jsx      # Fetches and displays users
│   │
│   ├── App.js
│   └── index.js              # Redux Provider + React DOM render
│
├── package.json
└── README.md


######################
Flow of Execution :
Redux Data Flow (Simplified)

     ┌──────────────────────────────────────────┐
     │                  UI                      │
     │ (React Components - Counter, UserList)   │
     └──────────────────────────────────────────┘
                       │
                       ▼
            dispatch(action)  ---> (on button click or API call)
                       │
                       ▼
     ┌──────────────────────────────────────────┐
     │               Reducer / Slice            │
     │ (counterSlice, userSlice)                │
     └──────────────────────────────────────────┘
                       │
                       ▼
     ┌──────────────────────────────────────────┐
     │               Redux Store                │
     │  (Global state - counter, users)         │
     └──────────────────────────────────────────┘
                       │
                       ▼
     ┌──────────────────────────────────────────┐
     │           React Components               │
     │ (useSelector → reads updated state)      │
     └──────────────────────────────────────────┘


