import create from 'zustand';

interface AdminStore {
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
}

const useAdminStore = create<AdminStore>((set) => ({
  isAdmin: false,
  login: () => set({ isAdmin: true }),
  logout: () => set({ isAdmin: false }),
}));

export default useAdminStore;