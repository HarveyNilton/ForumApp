import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListUser from './components/ListUser'
import Posts from './components/Posts'
import ProtectedRouter from './components/ProtectedRouter'
import User from './components/User'
import EmailVerificationPage from './pages/EmailVerificationPage'
import ForumPage from './pages/ForumPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import { getAllPostsThunk } from './store/slices/postsList.slice'
import { getUserThunk } from './store/slices/userList.slice'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  const [userSelected, setUserSelected] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getUserThunk())
    //dispatch(getAllPostsThunk())
  }, [])

  const onClickUserSelected = (user) => {
    //setUserSelected(user)
  }

  return (
    <div className="App">

      <HashRouter>
        {/*
        isLoading && <div className='loading'><div className='spinner'></div></div>
  */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRouter />}>
            <Route path="/verify" element={<EmailVerificationPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/category/:id" element={<PostPage />} />
          </Route>

        </Routes>

      </HashRouter>

      {/* <main>
        <div className="containerUser">
          <User
            userSelected={userSelected}
            onClickUserSelected={onClickUserSelected} />

          <ListUser
            onClickUserSelected={onClickUserSelected} />
        </div>

        <Posts />
    </main>*/}



    </div>
  )
}

export default App
