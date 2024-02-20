import { Datagrid, List, TextField, EditButton } from 'react-admin';

export const DigimonList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="tipo1" />
            <TextField source="tipo2" />
            <EditButton />
        </Datagrid>
    </List>
);
