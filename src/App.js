import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import scifi from '../src/data/scifi.json';
import BookList from './components/BookList';
import FormSearch from './components/FormSearch';

// let book = scifi[0];
// console.log(book);
function App () {
  return (
    <div>

      <WarningSign alert="Alert di React Bootstrap" />
      <MyBadge text="Questo è un badge personalizzato" color="success" />
      <FormSearch />
      <BookList books={scifi} />
    </div>
  );
}

export default App;
