import { deleteById } from "./deleteById";

export function multipleDelete(data, userIdObject) {
    for (let value in userIdObject) {
        data = deleteById(data, +value);
    }

    return data;
}