import React from 'react'

const Card = () => {
	return (
		<div className='card'>
			<img width={133} height={112} src='/img/sneakers/4.jpg' alt='' />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

			<div className='d-flex justify-between al'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>12 990 руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/plus.svg' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Card
