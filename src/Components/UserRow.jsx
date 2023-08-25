import { useContext, useRef, useState } from "react"
import { Store } from "./AdminUI"
import '../styles/UserRow.css'
import { AiFillSave, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { deleteById } from "../Utils/deleteById"
import { updateById } from "../Utils/updateById"

const UserRow = () => {
    const {
        paginatedUsers,
        users,
        setUsers,
        selected,
        setSelected,
        setTotalUsers,
        totalUsers
    } = useContext(Store);
    
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState(undefined);

    const name = useRef();
    const email = useRef();
    const role = useRef();

    const saveHandler = () => {
        const updatedData = updateById(users, id, {
            name: name.current.value,
            email: email.current.value,
            role: role.current.value
        })
        setUsers(updatedData);
        setIsEditing(false);
        setId(undefined)
    }

    const checkHandler = (e, id) => {
        if (e.target.checked) {
            setSelected({ ...selected, [id]: id });
        }
        else {
            const updatedSelected = { ...selected };
            delete updatedSelected[id];
            setSelected(updatedSelected);
        }
    }
    return (
        <>
            {
                paginatedUsers.map((user) => {
                    return (

                        <tr className={selected[user.id] ? "selectedRow" : "null"} key={user.id}>
                            <td>
                                <input
                                    onChange={(e) => checkHandler(e, user.id)}
                                    type="checkbox"
                                    checked={selected[user.id] ? true : false}
                                />
                            </td>
                            <td>{
                                isEditing && id === user.id
                                    ? <input type="text" ref={name} defaultValue={user.name} />
                                    : user.name
                            }

                            </td>
                            <td>
                                {
                                    isEditing && id === user.id
                                        ? <input type="text" ref={email} defaultValue={user.email} />
                                        : user.email
                                }
                            </td>
                            <td>
                                {
                                    isEditing && id === user.id
                                        ? <input type="text" ref={role} defaultValue={user.role} />
                                        : user.role
                                }
                            </td>
                            <td>
                                {
                                    isEditing && id === user.id
                                        ? <button
                                            onClick={() => { saveHandler() }}
                                            className="saveButton">
                                            <AiFillSave />
                                        </button>
                                        : <button
                                            onClick={() => {
                                                setIsEditing(!isEditing);
                                                setId(user.id)
                                            }}
                                            className="editButton"
                                        >
                                            <AiOutlineEdit />
                                        </button>
                                }

                                <button
                                    onClick={() => {
                                        setUsers(deleteById(users, user.id))
                                        setTotalUsers(deleteById(totalUsers, user.id))
                                    }}
                                    className="deleteButton"
                                >
                                    <AiOutlineDelete />
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserRow