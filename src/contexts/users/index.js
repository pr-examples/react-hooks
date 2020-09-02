import React, {createContext, useState} from 'react';
import UsersService from 'services/users';

const UsersContext = createContext();

export function UsersProvider({ children }){
    const [loaded, setLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const load = (loadedCallback,reload = false) => {
        if(!loaded || reload){
            UsersService.get().suscribe((users)=>{
                loadedCallback();
                setLoaded(true);
                setUsers(users);
            }, error => console.log(error));
        }
    };

    const reset = () => {    
        setUsers([]);
    };

    const state = {
        users,
    };

    const actions = {
        load,
        reset,
    };

    return (
        <UsersContext.Provider value={{state, actions}}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContext;