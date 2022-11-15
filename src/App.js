import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

function App() {
	return (
		<div className='wrapper clear '>
			<Drawer />
			<Header />

			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between mb-40'>
					<h1>Все кроссовоки</h1>

					<div className='search-block d-flex'>
						<img src='/img/poisk.svg' alt='serach' />
						<input type='text' placeholder='Поиск ...' />
					</div>
				</div>

				<div className='d-flex justify-between'>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
