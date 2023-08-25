import UserRow from "./UserRow"
import '../styles/UsersTable.css'
import { useContext} from "react"
import { Store } from "./AdminUI"

const UsersTable = () => {
    const { currentPage, paginatedUsers, setSelected, setCheckedAll, checkedAll } = useContext(Store)
    const checkAllHandler = (e) => {
        if (e.target.checked) {
            console.log(currentPage)
            let updateSelected = {};
            paginatedUsers.map((user) => {
                updateSelected = { ...updateSelected, [user.id]: user.id };
            })
            setSelected(updateSelected);
            setCheckedAll(true)
        } else {
            setSelected({})
            setCheckedAll(false);
        }
    }
    return (
        <table style={{ width: "80%", textAlign: "center" }}>
            <thead>
                <tr>
                    <th>
                        <input
                            onChange={checkAllHandler}
                            checked={checkedAll ? true : false}
                            type="checkbox"
                        />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <UserRow />
            </tbody>
        </table>
    )
}

export default UsersTable