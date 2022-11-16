import React from 'react'
import styles from './Card.module.scss'

const Card = props => {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/heart-unlike.svg' alt='unlike' />
			</div>
			<img width={133} height={112} src={props.imgUrl} alt='' />
			<h5>{props.title}</h5>

			<div className='d-flex justify-between al'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/plus.svg' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Card
