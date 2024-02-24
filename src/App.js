import routes from './routs';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { users } from './DataBase/data'
import { UserListContext } from './Contexts/UserListContext'

function App() {

  const router = useRoutes(routes)

  return (
    <UserListContext.Provider value={users}>
      <>
        {router}
        </>
    </UserListContext.Provider>
  );
}

export default App;
