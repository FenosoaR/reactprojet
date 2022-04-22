import React from 'react'

function Hello(props){
	let test = (
	<React.Fragment>
		<h1>test</h1>
		<p>test</p>
	</React.Fragment>
	)

	let data = {
		elem:(
			<div>
			<h1>test</h1>
			<p>test</p>
		</div>

		)
	

	}

	return(
		
		{test}
		{data.elem}
		<div>
			<h1>Hello { props.name }</h1>
		</div>
	)
}
export default Hello