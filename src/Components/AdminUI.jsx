import { createContext, useState } from 'react'

import config from '../../config/config.json'
import useFetchData from '../customHooks/useFetchData'
import totalPageCount from '../Utils/totalPageCount'
import UsersTable from './UsersTable'
import { paginate } from '../Utils/paginate'

import Page from './Page'
import SearchBar from './SearchBar'

import '../styles/AdminUI.css'

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
        <div className="adminUI">
            <Store.Provider value={storeValue}>
                {/* Search Bar */}
                <SearchBar />
                {
                    !users.length
                        ? "No Users Found"
                        : <>
                            {/* UserTable  */}
                            <UsersTable />
                            {/* page counter and delete selected  */}
                            <Page totalPageCount={totalPageCount(users.length)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </>
                }
            </Store.Provider>
        </div>
    )
}

export default AdminUI