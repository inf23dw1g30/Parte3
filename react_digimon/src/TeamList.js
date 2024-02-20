import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const TeamList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <NumberField source="id_digimon" />
            <NumberField source="id_trainer" />
        </Datagrid>
    </List>
);