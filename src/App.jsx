
import {useAuth0} from "@auth0/auth0-react"
import Navbar from "./components/Navbar"
import Serch from "./components/Serch"
import Cardpokemon from "./components/Cardpokemon"

function App() {
const {isAuthenticated} = useAuth0() 
//<Evolution></Evolution>
  return (
    <div>
      <Navbar></Navbar>
      {isAuthenticated && (
        <div className=" container mx-auto grid justify-items-center mt-4">
          <Cardpokemon></Cardpokemon>
        </div>
      )}
    </div>
  )
}

export default App
