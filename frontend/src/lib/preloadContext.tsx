import { createContext, useContext } from 'react';

const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }: any) => {
	const preloadContext = useContext(PreloadContext);
	if (!preloadContext) return null;
	if (((preloadContext as unknown) as any).done) return null;

	((preloadContext as unknown) as any).promises.push(Promise.resolve(resolve()));
	return null;
};

export const usePreloader = (resolve: any) => {
	const preloadContext = useContext(PreloadContext);
	if (!preloadContext) return null;
	if (((preloadContext as unknown) as any).done) return null;
	return ((preloadContext as unknown) as any).promises.push(Promise.resolve(resolve()));
};
