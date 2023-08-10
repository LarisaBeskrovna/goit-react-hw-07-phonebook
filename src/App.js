import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import './app.css';
import css from './components/Contacts/contacts.module.css';

const App = () => {
  return (
    <div className="App">
      <AddContact />
      <h1 className={css.title}>Find contacts by name</h1>
      <Filter />
      <h1 className="main_title">Contacts</h1>
      <Contacts />
    </div>
  );
};

export default App;
