import totalPageCount from "./totalPageCount";
import config from '../../config/config.json'


export function paginate(data, page=1) {
    if(page < 1){
        page = 1;
    }

    if(page > totalPageCount(data.length)){
        page = totalPageCount(data.length);
    }
    const offset = (page - 1) * config.pageSize
    return data.slice(offset, offset+config.pageSize);
}


