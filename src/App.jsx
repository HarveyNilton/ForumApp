import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ForumForm from './components/ForumForm'
import ListUser from './components/ListUser'
import { getUserThunk } from './store/slices/forumList.slice'

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
        <ForumForm
          userSelected={userSelected}
          onClickUserSelected={onClickUserSelected} />

        <ListUser
          onClickUserSelected={onClickUserSelected} />
      </div>


    </div>
  )
}

export default App
