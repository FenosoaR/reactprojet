import React from "react"
import Navbar from "./components/Navbar"
import Hello from "./components/Hello"
import Button from "./components/Button"
import Event from "./components/Event"
import Count from "./hook/Count"

function App(){

return(
	<div>
	<Navbar/>
	<Hello name='Harry'/>
	<h1>test</h1>
	<p>Lorem ipsum</p>
	<Button/>
	<Event/>
	<Count/>
	</div>

)

}
export default App