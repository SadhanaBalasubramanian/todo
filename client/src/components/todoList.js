import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    DateField, 
    EditButton,
    DeleteButton 
} from 'react-admin'

const todoList = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="taskName" />
          <TextField source="taskDescription" />
          <TextField source="taskStatus" />
          <DateField source="createdDate" />
          <EditButton basepath="/todo" />
          <DeleteButton basepath="/todo" />
      </Datagrid>
  </List>
  
}

export default todoList
