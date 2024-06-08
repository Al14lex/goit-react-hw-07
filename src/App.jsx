
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {

  return (
     <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </>
  )
}

