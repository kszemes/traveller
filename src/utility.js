import axios from 'axios'

export const getData = async (url, callBack) => {
    try {
        let response = await axios.get(url);
        callBack(response.data)
    } catch (e) {
        console.log('Error retrieving data: ' + e)
    }
}

export const fetchData = async (url, callBack, id = null) => {
    try {
        let response = await fetch(url)
        const data = await response.json();
        if (id == null) {
            callBack(data)
        } else {
            const filteredData = data.filter(obj => obj.id === id)
            callBack(filteredData[0])
        }
    } catch (e) {
        console.log('Error retrieving data: ' + e)
    }
}

