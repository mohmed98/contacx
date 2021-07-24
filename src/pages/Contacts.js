import ContentList from "../parts/ContactList"
import ImageList from "../parts/ImageList";
import SearchBar from "../parts/SearchBar";
export default function Contacts() {
    return (
        <div>
            <SearchBar />
            <ImageList />
            <ContentList />
        </div>
    );
}