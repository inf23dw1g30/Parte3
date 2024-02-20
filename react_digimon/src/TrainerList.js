import { Datagrid, List, TextField } from 'react-admin';

export const TrainerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
        </Datagrid>
    </List>
);