import { Datagrid, List, TextField } from 'react-admin';

export const TipoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
        </Datagrid>
    </List>
);