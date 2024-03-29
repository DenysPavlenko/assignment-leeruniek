import { Categories } from 'components/Categories';
import './App.scss';
import { plan, categories, notes } from 'assets/dummy-data';

const App = () => {
  return (
    <div className="app">
      <div className="app__plan">
        <h2>{plan.name}</h2>
        <p>{plan.userCreated}</p>
      </div>
      <div className="app__categories">
        <Categories data={categories} notes={notes} />
      </div>
    </div>
  );
};

export default App;
