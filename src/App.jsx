import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ListUser from './components/ListUser'
import User from './components/User'
import { getUserThunk } from './store/slices/userList.slice'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  const [userSelected, setUserSelected] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserThunk())
  }, [])

  const onClickUserSelected = (user) => {
    setUserSelected(user)
  }

  return (
    <div className="App">

      {
        isLoading && <div className='loading'><div className='spinner'></div></div>
      }
      <div className="containerUser">
        <User
          userSelected={userSelected}
          onClickUserSelected={onClickUserSelected} />

        <ListUser
          onClickUserSelected={onClickUserSelected} />
      </div>


    </div>
  )
}

export default App
