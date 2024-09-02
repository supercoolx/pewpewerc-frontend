import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className="mx-auto">
				<img src="./imgs/Group-91-1-p-800.png" width={672} sizes='(max-width: 479px) 96vw, (max-width: 991px) 80vw, 671.9921875px' className='' alt="" />
			</div>
			<div className="flex flex-wrap justify-center gap-5 mx-auto mt-10">
				<img src='./imgs/Group-85-1.svg' width={106} />
				<img src='./imgs/Group-87-1.svg' width={106} />
				<img src='./imgs/Group-90-1.svg' width={106} />
			</div>
			<div className='px-5 mx-auto mt-20'>
				<img src="./imgs/Group-98-p-1600.png" className='' alt="" />
			</div>
			<div className='px-5 mx-auto mt-20'>
				<img src="./imgs/Group-95-2-p-1600.png" className='' alt="" />
			</div>
			<div className='px-5 mx-auto mt-20'>
				<img src="./imgs/Group-101-p-1600.png" className='' alt="" />
			</div>
		</div>
	)
}

export default App
