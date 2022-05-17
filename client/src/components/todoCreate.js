import React from 'react'
import { 
    Create,  
    TextInput, 
    SimpleForm,
    DateInput
} from 'react-admin'

const todoCreate = (props) => {
  return (
    <Create title="Create new task" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="taskName" />
            <TextInput multiline source="taskDescription" />
            <TextInput source="taskStatus" />
            <DateInput label="createdDate" source="createdDate" />
        </SimpleForm>
    </Create>
  )
}

export default todoCreate
