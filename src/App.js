import { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
    const [users, setUsers] = useState('');
    const [isLoading, setIsLoading] = useState(true);
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
    }

    return (
        <div className="App">
            <Users items={users} isLoading={isLoading} changeSearchValue={changeSearchValueHandler} searchValue={searchValue} />
            {/* <Success /> */}
        </div>
    );
}

export default App;
