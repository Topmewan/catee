import styles from './Card.module.scss';
import { cat } from '../../assets';

export const Card = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.text}>
					<h3 className={styles.title}>Сказочное заморское яство</h3>
					<h1 className={styles.name}>Нямушка</h1>
					<h2 className={styles.ingredient}>с фуа-гра</h2>
					<div className={styles.extra}>
						<p>10 порций</p>
						<p>мышь в подарок</p>
					</div>
				</div>

				<div className={styles.photo}>
					<img src={cat} alt='' />
				</div>
				<div className={styles.quantity}>
					<span>0.1</span>
					<span>kg</span>
				</div>
			</div>

			<p>
				Что сидишь? Порадуй котэ, <a href='#'>купи.</a>
			</p>
		</div>
	);
};
