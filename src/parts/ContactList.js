
import useFetch from "../useFetch";

export default function ContentList() {
    const { error, isPending, data: conatacts } = useFetch('http://localhost:3000/poeple')
    console.log(conatacts);
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {conatacts && (

                conatacts.map(contact => (
                    <div key={contact.id}>{contact.name}</div>

                ))

            )}
        </div>
    )
}