import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
    const [error, setError] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/poeple?id=2")
            .then((res) => res.json())
            .then(
                (result) => {
                    setisPending(false);
                    setItem(result);
                },
                (error) => {
                    setisPending(true);
                    setError(error);
                }
            );
    }, []);


    return (
        <div className='nav-wrapper'>
            {error && <div>Error: {error.message}</div>}
            {isPending && <div>Loading...</div>}
            {item && (

                item.map((i) => <img key={i.id} className='user-avatar' src={i.avatar} alt={i.name} />)
            )}

            <h3>Contacts</h3>
            <div>
                <Link to='/Create'>Add</Link>
            </div>
        </div>
    );

}
