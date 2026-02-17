// src/lib/weeklySchedule.ts

export interface ImamSchedule {
  utama: string;
  badal: string;
  muadzin: string;
}

export interface FridaySchedule {
  khatib: string;
  imam: string;
  muadzin: string;
 
}

export interface DaySchedule {
  subuh: ImamSchedule;
  dzuhur?: ImamSchedule; // Optional karena hari Jumat pakai jadwal khusus
  jumat?: FridaySchedule; // Khusus untuk jadwal shalat Jumat
  ashar: ImamSchedule;
  maghrib: ImamSchedule;
  isya: ImamSchedule;
}

export const weeklySchedule: Record<string, DaySchedule> = {
  Senin: {
    subuh: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    ashar: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    maghrib: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    isya: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" }
  },
  Selasa: {
    subuh: { utama: "Tedi Koswara", badal: "Warta", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    ashar: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    maghrib: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    isya: { utama: "Tedi Koswara", badal: "Warta", muadzin: "" }
  },
  Rabu: {
    subuh: { utama: "Syakir Abdullah", badal: "Sulchan", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Sulchan", muadzin: "" },
    ashar: { utama: "Tedi Koswara", badal: "Sulchan", muadzin: "" },
    maghrib: { utama: "Syakir Abdullah", badal: "Warta", muadzin: "" },
    isya: { utama: "Syakir Abdullah", badal: "Warta", muadzin: "" }
  },
  Kamis: {
    subuh: { utama: "Kanda Putra", badal: "Warta", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    ashar: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    maghrib: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    isya: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" }
  },
  Jumat: {
    subuh: { utama: "M.Syamsudin", badal: "Warta", muadzin: "" },
    jumat: { khatib: "KHOTIB", imam: "IMAM", muadzin: "Muadzin Jumat" },
    ashar: { utama: "Dewa Alfian ", badal: "Warta", muadzin: "" },
    maghrib: { utama: "M.Syamsudin", badal: "Warta", muadzin: "" },
    isya: { utama: "M.Syamsudin", badal: "Warta", muadzin: "" }
  },
  Sabtu: {
    subuh: { utama: "Sulchan", badal: "Warta", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    ashar: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    maghrib: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    isya: { utama: "Azan Saleh", badal: "Warta", muadzin: "" }
  },
  Minggu: {
    subuh: { utama: "Syakir Abdullah", badal: "Syamsudin", muadzin: "" },
    dzuhur: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    ashar: { utama: "Dewa Alfian", badal: "Warta", muadzin: "" },
    maghrib: { utama: "Warta", badal: "Dewa Alfian", muadzin: "" },
    isya: { utama: "Galuh Yogaswara", badal: "Tedi Koswara", muadzin: "" }
  }
};