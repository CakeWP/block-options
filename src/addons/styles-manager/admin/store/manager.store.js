import { create } from 'zustand';


const useManager = create((set, get) => ({
	activeTerm: null,
	setActiveTerm: (term) => set(() => ({ activeTerm: term })),
	search: '',
	setSearch: (newSearch) => set(() => ({ search: newSearch })),

	namespace: 'core',
	setActiveNamespace: (namespace) => set(() => ({ namespace })),
}));

export default useManager;
