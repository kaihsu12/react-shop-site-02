import classes from './App.module.css';
import StepProgress from './components/StepProgress';
import InfoOne from './components/InfoOne';
import InfoTwo from './components/InfoTwo';
import InfoThree from './components/InfoThree';
import ProgressControl from './components/ProgressControl';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <main className={classes.siteMain}>
        <div className={classes.mainContainer}>
          <section className={classes.registerContainer}>
            <StepProgress />
            <section className={classes.formContainer}>
              <InfoOne />
              <InfoTwo />
              <InfoThree />
            </section>
          </section>
          <div className={classes.itemsContainer}>
            <Cart />
          </div>
          <div className={classes.progressPanel}>
            <ProgressControl />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
