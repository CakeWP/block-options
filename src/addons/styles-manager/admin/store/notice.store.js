import { create } from 'zustand';
import { uniqueId } from 'lodash';

const useNotices = create((set, get) => ({
	notices: [],

	addNotice: (notice) => {
		return set((state) => ({
			notices: [
				...state.notices,
				{
					id: uniqueId('notice-'),
					...notice,
				},
			],
		}));
	},

	removeNotice: (id) => {
		return set((state) => ({
			notices: state.notices.filter((notice) => notice.id !== id),
		}));
	},
}));

export default useNotices;
