import React, { useContext, useState } from 'react';
import UsersContext from 'contexts/users';
import './styles.css';

function Users() {
    
    const [loadStep, setLoadStep] = useState(0);
    const [loading, setLoading] = useState(true);
    const usersContext = useContext(UsersContext);

    loadStep === 0 && usersContext.actions.load(()=>{
        setLoading(false);
    });

    return (
        <section>
            <button onClick={ ()=>{
                setLoadStep(1);
                usersContext.actions.reset(); 
            }} style={{backgroundColor:'#c1ffbd'}}>Reset</button>
            {' '}
            <button onClick={()=>{
                setLoading(true);
                setLoadStep(2);
                usersContext.actions.load(()=>{
                    setLoading(false);
                },true);
            }} style={{backgroundColor:'#fac99b'}}>Reload</button>

            {!loadStep && <h4>Automatic loading...</h4> }
            {loadStep === 1 && <h4>Reset Lists...</h4> }
            {loadStep === 2 && <h4>Loaded from action...</h4> }

            <div className={'users-list'}>
                {loading && 'Loading...'}
                {usersContext.state.users.map((user)=>{
                    return(
                        <div key={user.id} className={'user'}>
                            {user.name}
                        </div>
                    );
                })}
            </div>
        </section>
    );

}

export default Users;