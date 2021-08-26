import axios from 'axios';

export const getUsers= () => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
        return data
    } catch (err) {
        
        return { message: err.response.data.message }
    }

}; 
