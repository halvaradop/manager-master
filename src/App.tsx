import { Footer } from "./components/Footer"
import { Main } from "./components/Main"
import { Header } from "./components/Header"

const App = () => {
    return (
        <div className="xl:max-w-screen-2xl xl:mx-auto">       
            <Header />
            <Main /> 
            <Footer />
        </div>
    )
}

export default App