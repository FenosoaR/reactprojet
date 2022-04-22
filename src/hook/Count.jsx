import React,{useState} from 'react'

const initialState = {
	nb : 0
}

function Count(){
		const[state , setState] = useState(initialState)
		function decrement(){
			setState({
				...state,
				nb : state.nb - 1
			}
				
			)
		}
		function increment(){
			setState({
				...state,
				nb : state.nb + 1
			}
				
			)
		}

	return(
		<div>
			
			<button onClick={decrement}> - </button>
			{state.nb}
			<button onClick={increment}> + </button>
		</div>
	)
}
export default Count