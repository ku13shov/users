import { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
    const [users, setUsers] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSucces] = useState(false);
    const [isInvated, setIsInvated] = useState([]);
    const [searchValue, setsearchValue] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get('https://4805f9918df2294c.mokky.ru/users');
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        getUsers();
    }, []);

    const changeSearchValueHandler = (e) => {
        setsearchValue(e.target.value);
    };

    const successHandler = () => {
        setSucces(true);
    }

    return (
        <div className="App">
            {success ? (
                <Success count={isInvated.length} />
            ) : (
                <Users
                    items={users}
                    isLoading={isLoading}
                    changeSearchValue={changeSearchValueHandler}
                    searchValue={searchValue}
                    isInvated={isInvated}
                    setIsInvated={setIsInvated}
                    successHandler={successHandler}
                />
            )}
        </div>
    );
}

export default App;
