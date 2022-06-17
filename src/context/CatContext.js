import { createContext, useCallback, useState } from 'react';

export const CatContext = createContext(null);

export const CatProvider = ({ children }) => {
	const [selectedCats, setSelectedCats] = useState([]);
	console.log(selectedCats);

	const addCat = useCallback(
		(cat) => {
			const idx = selectedCats.findIndex((elem) => elem.id === cat.id);
			if (idx >= 0) {
				setSelectedCats((prev) => prev.filter((elem) => elem.id !== cat.id));
			} else {
				setSelectedCats((prev) => [...prev, cat]);
			}
		},
		[selectedCats]
	);

	return (
		<CatContext.Provider value={{ selectedCats, addCat }}>
			{children}
		</CatContext.Provider>
	);
};
