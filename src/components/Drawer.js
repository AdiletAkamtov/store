import React from 'react'

const Drawer = () => {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer'>
				<h3 className='mb-30 d-flex justify-between cu-p '>
					Корзина
					<img className='removeBtn' src='/img/btn-remove.svg' alt='' />
				</h3>
				<div className='items'>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20'>
							<p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 990 руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='' />
					</div>

					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20'>
							<p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 990 руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='' />
					</div>
				</div>

				<div className='cardTotalBlock'>
					<ul className=''>
						<li className='d-flex'>
							<span>Итого: </span>
							<div></div>
							<b>21 498 руб. </b>
						</li>

						<li className='d-flex'>
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className='greenBtn'>
						Оформить заказ <img src='/img/arrow-cart.svg' alt='arrow' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Drawer
