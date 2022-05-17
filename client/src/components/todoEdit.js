import React from 'react'
import {  
    Edit, 
    TextInput, 
    SimpleForm,
    DateInput
} from 'react-admin'

const todoEdit = (props) => {
  return (
    <Edit title="Edit the task" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="taskName" />
            <TextInput multiline source="taskDescription" />
            <TextInput source="taskStatus" />
            <DateInput label="createdDate" source="createdDate" />
        </SimpleForm>
    </Edit>
  )
}

export default todoEdit
