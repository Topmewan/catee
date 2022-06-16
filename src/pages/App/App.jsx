import React from 'react';
import { bg } from '../../assets';
import { Card } from '../../components/Card/Card';
import { mock } from '../../utils/mock';

import styles from './App.module.scss';

export const App = () => {
	return (
		<section className={styles.app} style={{ backgroundImage: `url(${bg})` }}>
			<div className={styles.container}>
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};
