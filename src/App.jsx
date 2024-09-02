import { useState } from 'react'
import './App.css'

function App() {

	return (
		<div className='flex flex-col items-center justify-center px-3'>
			<div className='ease-linear animate-appear'>
				<div className="mx-auto mt-20">
					<img src="./imgs/Group-91-1-p-800.png" width={672} sizes='(max-width: 479px) 96vw, (max-width: 991px) 80vw, 671.9921875px' className='' alt="" />
				</div>
				<div className="flex flex-wrap justify-center gap-5 mx-auto mt-10">
					<a className='transition-all duration-100 cursor-pointer hover:-translate-y-3' href="https://x.com/Pewpew_erc"><img src='./imgs/Group-85-1.svg' width={106} /></a>
					<a className='transition-all duration-100 cursor-pointer hover:-translate-y-3' href="https://t.me/pewpewerc20"><img src='./imgs/Group-87-1.svg' width={106} /></a>
					<a className='transition-all duration-100 cursor-pointer hover:-translate-y-3' href="https://www.dextools.io/app/en/ether/pair-explorer/0xa64e7090db45e2a6d04460369f5945e0c1c15ea5?t=1719407557229"><img src='./imgs/Group-90-1.svg' width={106} /></a>
				</div>
			</div>
			<div className='mx-auto mt-20 ease-linear animate-appear'>
				<img src="./imgs/Group-98-p-1600.png" className='' alt="" />
			</div>
			<div className='mx-auto mt-20 ease-linear animate-appear'>
				<img src="./imgs/Group-95-2-p-1600.png" className='' alt="" />
			</div>
			<div className='mx-auto mt-20 ease-linear animate-appear'>
				<img src="./imgs/Group-101-p-1600.png" className='' alt="" />
			</div>
		</div>
	)
}

export default App
