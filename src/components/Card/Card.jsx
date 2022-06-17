import { cat as catImage } from '../../assets';
import { useContext } from 'react';
import { CatContext } from '../../context/CatContext';

import styles from './Card.module.scss';

export const Card = ({ cat }) => {
	const { selectedCats, addCat } = useContext(CatContext);

	const isSelect = selectedCats.find((elem) => elem.id === cat.id);

	const paragraph = () => {
		if (isSelect) {
			return <p>{cat?.desc}</p>;
		}
		if (cat?.inStock) {
			return (
				<p>
					Что сидишь? Порадуй котэ,
					<span onClick={() => addCat(cat)}>купи.</span>
				</p>
			);
		} else {
			return (
				<p className={styles.empty}>
					Печалька, с {cat?.ingredient} закончился.
				</p>
			);
		}
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={`
				${styles.card} 
				${isSelect ? styles.active : ''} 
				${!cat?.inStock && styles.disabled}
				`}
				onClick={() => addCat(cat)}
			>
				<div className={styles.bg}></div>
				<div className={styles.text}>
					<h3 className={styles.title}>Сказочное заморское яство</h3>
					<h1 className={styles.name}>Нямушка</h1>
					<h2 className={styles.ingredient}>{cat?.ingredient}</h2>
					<div className={styles.extra}>
						<p>{cat?.quantity} порций</p>
						<p>мышь в подарок</p>
					</div>
				</div>

				<div className={styles.photo}>
					<img src={catImage} alt='' />
				</div>
				<div className={styles.quantity}>
					<span>{cat?.weight}</span>
					<span>kg</span>
				</div>
			</div>
			{paragraph()}
		</div>
	);
};
