import { useState, useCallback } from 'react';

export function useModal<T = undefined>() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<T | null>(null);

	const handleOpen = useCallback((modalData?: T) => {
		setData(modalData ?? null);
		setOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
		setData(null);
	}, []);

	return { open, data, handleOpen, handleClose };
}