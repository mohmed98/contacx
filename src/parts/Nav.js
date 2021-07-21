import { Link } from "react-router-dom"
const axios = require('axios')
export default function Nav() {
    async function getMainUser() {
        try {
            const response = await axios.get('http://localhost:3000/poeple?id=1');
            console.log(response.data[0]);
            return response.data[0];
        } catch (error) {
            console.error(error);
        }
    }
    const mainUser = getMainUser()
    return (
        <div>
            {mainUser}
            {/* <img src={mainUser.avatar} /> */}
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/"> Contacts </Link>
                    </li>
                    <li>
                        <Link to="/single"> About </Link>
                    </li>
                    <li>
                        <Link to="/users"> Users </Link>
                    </li>
                </ul>
            </nav>
             */}
        </div>
    )
}