import { render } from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'

  const Scheduler = () => {
    return (
			<div className="App">
					<Example />
			</div>
		)
  }

  export default Scheduler;