import { LandingPage } from './pages/LandingPage';
import { Seo } from './components/Seo';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <>
      <Seo />
      <LandingPage />
      <Toaster />
    </>
  );
}

export default App;
