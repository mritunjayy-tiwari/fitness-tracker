import './App.css'
import SignInForm from './components/SignInForm/SignInForm'
import BrandShowcase from './components/BrandShowcase/BrandShowcase'

function App() {

  return (
    <>
      <div className="login-container">
        <SignInForm />
        <BrandShowcase />
      </div>
    </>
  )
}

export default App

