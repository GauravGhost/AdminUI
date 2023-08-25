import { AiOutlineSearch } from 'react-icons/ai'
import '../styles/SearchBar.css'
import { useContext } from 'react'
import { Store } from './AdminUI'
import { searchData } from '../Utils/searchData'

const SearchBar = () => {
    const {
        setUsers,
        setCurrentPage,
        totalUsers
    } = useContext(Store);
    const searchHandler = (e) => {
        setCurrentPage(1);
        if (e.target.value) {
            const filteredData = searchData(totalUsers, e.target.value);
            setUsers(filteredData);
        } else {
            setUsers(totalUsers)
        }
    }
    return (
        <div className='SearchBar'>
            <input
                onChange={searchHandler}
                type="text"
                placeholder='Search by name, email or role'
            />
            <AiOutlineSearch className='searchIcon' />
        </div>
    )
}

export default SearchBar