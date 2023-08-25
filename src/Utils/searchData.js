export function searchData(users, query) {
    query = query.toLowerCase();
    return users.filter((user) => {
        if (user.name.toLowerCase().includes(query)
            || user.email.toLowerCase().includes(query)
            || user.role.toLowerCase().includes(query)
        ) {
            return user;
        }
    })
}