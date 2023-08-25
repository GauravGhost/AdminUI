export function deleteById(data, id){
    return data.filter((item)=> item.id != id);
}