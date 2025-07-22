import { create } from "zustand";

type ReportProps = {
    showAttendanceReport: boolean,
    toggleView: () => void
}

export const useShowReport = create<ReportProps>((set) => ({
    showAttendanceReport: false,
    toggleView: () =>
        set((state) => ({
            showAttendanceReport: !state.showAttendanceReport,
        })),
}));