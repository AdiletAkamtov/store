import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '12 999',
		imgUrl: '/img/sneakers/1.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: '9999',
		imgUrl: '/img/sneakers/2.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '34 000',
		imgUrl: '/img/sneakers/3.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '8499',
		imgUrl: '/img/sneakers/4.jpg',
	},
]

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
					{arr.map(obj => (
						<Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
