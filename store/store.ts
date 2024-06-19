import { create } from "zustand";

interface AppState {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (open: boolean) => void;

    isRenameModalOpen: boolean;
    setIsRenameModalOpen: (open: boolean) => void;

    fileId: string | null;
    setFileId: (value: string | null) => void;

    filename: string;
    setFilename: (value: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (open: boolean) => set({ isDeleteModalOpen: open }),

    isRenameModalOpen: false,
    setIsRenameModalOpen: (open: boolean) => set({ isRenameModalOpen: open }),

    fileId: null,
    setFileId: (value: string | null) => set({ fileId: value }),

    filename: "",
    setFilename: (value: string) => set({ filename: value }),
}));
