import Contacts from "../Contact/Contact";
import { useSelector } from "react-redux"
import { selectContacts} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || "")
  );

  return (
    <ul>
        {visibleContacts.map((contact) => {
          return (
          <li key={contact.id}>
              <Contacts id={contact.id} name={contact.name} phone={contact.phone}/>
          </li>
        )
      })}
    </ul>
  );
}