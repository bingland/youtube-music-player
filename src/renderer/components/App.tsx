import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  thing: {
    color: 'green',
  },
});

const Hello = () => {
  const css = useStyles();
  return (
    <div>
      <div className={css.thing}>hey</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
