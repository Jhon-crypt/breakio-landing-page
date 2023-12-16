import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import IntroHero from './components/hero/introHero'
import SecondHero from './components/hero/secondHero'
import UserFeedbackHero from './components/hero/userFeedbackHero'

function App() {

  return (
    <>
      <div>
        <Header />
        <IntroHero />
        <SecondHero />
        <UserFeedbackHero />
      </div>
    </>
  )
}

export default App
