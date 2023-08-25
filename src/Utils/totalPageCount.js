import config from '../../config/config.json'

function totalPageCount (dataLength) {
    return Math.ceil(dataLength / config.pageSize);
}

export default totalPageCount;