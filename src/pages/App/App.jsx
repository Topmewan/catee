import React, { useState } from 'react';
import { bg } from '../../assets';
import { Card } from '../../components/Card/Card';
import { catData } from '../../utils/mock';

import styles from './App.module.scss';

export const App = () => {
	return (
		<section className={styles.app} style={{ backgroundImage: `url(${bg})` }}>
			<div className={styles.container}>
				<h1>Ты сегодня покормил кота?</h1>
				<div className={styles.list}>
					{catData.map((cat) => (
						<Card key={cat.id} cat={cat} />
					))}
				</div>
			</div>
		</section>
	);
};
