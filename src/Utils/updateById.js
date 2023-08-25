
export function updateById(data, id, updatedUserData) {
    const index = data.findIndex((user) => user.id === id);
    const user = data[index];
    if (!user) return null;
    Object.assign(user, updatedUserData);
    return data;
}