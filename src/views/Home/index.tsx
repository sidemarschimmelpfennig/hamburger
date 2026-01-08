import { Banner } from '../../components/Banner';
import { BurgerForm } from '../../components/BurgerForm';

export function Home() {
  return (
    <div>
      <Banner />
      <div className='main-container'>
        <h1>Monte o seu burger:</h1>
        <BurgerForm />
      </div>
    </div>
  );
}
