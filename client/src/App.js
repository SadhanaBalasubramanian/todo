import './App.css';
import {Admin, Resource} from "react-admin";
import restProvider from "ra-data-simple-rest";
import todoList from './components/todoList';
import todoCreate from './components/todoCreate';
import todoEdit from './components/todoEdit';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='todo' list={todoList} create={todoCreate} edit={todoEdit}></Resource>
  </Admin>
}

export default App;
