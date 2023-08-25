import { createContext, useState } from 'react'

import config from '../../config/config.json'
import useFetchData from '../customHooks/useFetchData'
import totalPageCount from '../Utils/totalPageCount'
import UsersTable from './UsersTable'
import { paginate } from '../Utils/paginate'

import Page from './Page'
import SearchBar from './SearchBar'


export const Store = createContext();

const AdminUI = () => {
    const [filterData, setfilterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState({});
    const [checkedAll, setCheckedAll] = useState(false);
    const [users, setUsers, totalUsers, setTotalUsers] = useFetchData(config.apiEndpoint);
    const paginatedUsers = paginate(users, currentPage);

    const storeValue = {
        users: users,
        setUsers: setUsers,
        totalUsers,
        setTotalUsers,
        paginatedUsers: paginatedUsers,
        selected: selected,
        setSelected: setSelected,
        currentPage,
        setCurrentPage,
        filterData,
        setfilterData,
        checkedAll,
        setCheckedAll
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <Store.Provider value={storeValue}>
                <SearchBar />
                {
                    !users
                        ? "No User Found"
                        : <>
                            <UsersTable />
                            <Page totalPageCount={totalPageCount(users.length)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </>
                }
            </Store.Provider>
        </div>
    )
}

export default AdminUI