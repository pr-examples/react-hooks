import React from 'react';
import { UsersProvider } from './users';

function Contexts({ children }){
    return (
        <UsersProvider>
            {  children }
        </UsersProvider>
    );
}

export default Contexts;