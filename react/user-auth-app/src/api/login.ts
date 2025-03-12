import axios from 'axios'

const login = async (data: Object) => {
    const response = await axios.post(
        "http://localhost:3000/user/login",
        data, 
        { headers: { 'Content-Type': 'application/json' }, timeout: 5000 } // 5s
    );

    console.log(response)
}

export default login; 