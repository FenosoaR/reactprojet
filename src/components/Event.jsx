import React from "react"
function Event(){
	function handleclick(){
		const box  = document.querySelector('.box')
		box.style.backgroundColor = "black"
	}
	return(
	<div>
	<div className ='box'></div>
	<button onClick={handleclick}>Click me</button>
	</div>

	)
}
export default Event