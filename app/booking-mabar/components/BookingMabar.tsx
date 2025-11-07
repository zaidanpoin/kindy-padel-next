"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import axios from "axios";
import Swal from "sweetalert2";
import { GiTennisCourt } from "react-icons/gi";
import { IoWarning } from "react-icons/io5";

dayjs.locale("id");

const timeOptions: Record<number, string> = {
  1: "Player 1",
  2: "Player 2",
  3: "Player 3",
  4: "Player 4",
  5: "Player 5",
  6: "Player 6",
  7: "Player 7",
  8: "Player 8",
};

interface HariAvailable {
  id: number;
  tanggal: string;
  jam: string;
}

interface BookingMabarProps {
  JadwalBooking: () => void;
  HariAvailable: HariAvailable[];
}

export default function BookingMabar({
  JadwalBooking,
  HariAvailable,
}: BookingMabarProps) {
  const [hariDipilih, setHariDipilih] = useState<string[]>([""]);
  const [timeSlot, setTimeSlot] = useState<number>(1);
  const [booked, setBooked] = useState<string>("");
  const [nama_rekening, setNama_Rekening] = useState<string>("");
  const [errors, setErrors] = useState<{
    booked?: string;
    hariDipilih?: string;
    timeSlot?: string;
    nama_rekening?: string;
    sessionErrors?: string[];
  }>({});

  const handleAddSession = () => {
    setHariDipilih((prev) => [...prev, ""]);
  };

  const handleSessionChange = (index: number, value: string) => {
    const updated = [...hariDipilih];
    updated[index] = value;
    setHariDipilih(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!booked.trim()) newErrors.booked = "Nama pemesan tidak boleh kosong";
    if (hariDipilih.length === 0 || hariDipilih.every((v) => !v)) {
      newErrors.hariDipilih = "Minimal pilih satu session!";
    }
    if (!timeSlot) newErrors.timeSlot = "Slot tidak boleh kosong";
    if (nama_rekening.trim() === "")
      newErrors.nama_rekening = "Nama rekening pengirim tidak boleh kosong";

    // ...existing code... validation logic

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const confirmation = await Swal.fire({
      title: "Konfirmasi Mabar",
      text: `Apakah Anda yakin ingin memesan untuk tanggal ${hariDipilih} dan Slot ${timeOptions[timeSlot]}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Pesan",
      cancelButtonText: "Batal",
    });

    if (!confirmation.isConfirmed) return;

    try {
      const sessionData = hariDipilih
        .filter((id) => id)
        .map((id) => ({
          id_hari: id,
          slot: Number(timeSlot),
        }));

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/padel-mabar`,
        { nama_pemain: booked, sessions: sessionData, nama_rekening },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Booking berhasil!",
        text: "Slot Player waktu Anda telah berhasil dibooking.",
      });

      JadwalBooking();
      setBooked("");
      setHariDipilih([""]);
      setTimeSlot(1);
      setNama_Rekening("");
    } catch (error) {
      // ...existing code... error handling
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan!",
        text: `Terjadi kesalahan saat submit booking: ${error}`,
      });
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl inline-flex gap-2 font-semibold mb-4 text-gray-800 dark:text-white">
        Form Booking Mabar Kindy Padel <GiTennisCourt />
      </h2>

      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          Informasi Penting <IoWarning />
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Apabila sudah melakukan payment maka tidak bisa melakukan
            cancel/refund/reschedule.
          </li>
          <li>Pembayaran melalui transfer BCA 6375058549 Bilal Edwan.</li>
          <li>
            Rp 75.000 / Player / Session. Jika 2 Session Maka Rp 150.000 /
            Player dst.
          </li>
          <li>1 Session adalah 1 Jam.</li>
          <li>Pembayaran Maksimal 15 menit setelah melakukan booking.</li>
          <li>
            Jika Sudah Memastikan Jadwal Dan Sudah Melakukan Payment Harap
            Konfirmasi Ke Admin Kami Melalui Whatasapp +62 813-2097-181 atau
            Instagram @KindyPadel.
          </li>
          <li>
            Jika sesi sudah berjalan lebih dari 30 menit & terjadi hujan, fee
            tidak di refund dan tidak bisa di reschedule.
          </li>
          <li>
            Segala kerusakan properti di Kindy Padel akan menjadi tanggung jawab
            pemain.
          </li>

          <li>
            Jadwal Mabar Perjam jika ingin lebih dari 1 Jam maka Peserta
            melakukan Process Booking 2x.
          </li>

          <li>Satu Session Mabar All Level Maksimal 8 Player.</li>
          <li>
            Host Berhak Mereschedule Jadwal Mabar Apabila Terjadi Force Majure.
          </li>
          <li>Sesi Akan Berjalan Kalau Sudah Ada Minimal 4 Orang. </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nama Pemesan
          </label>
          <input
            type="text"
            value={booked}
            onChange={(e) => setBooked(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan nama pemesan"
          />
          {errors.booked && (
            <p className="text-red-500 text-xs mt-1">{errors.booked}</p>
          )}
        </div>

        {hariDipilih.map((hari, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tanggal dan Jam {index + 1}
            </label>
            <select
              value={hari}
              onChange={(e) => handleSessionChange(index, e.target.value)}
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Pilih Tanggal dan Jam</option>
              {HariAvailable.map((available) => (
                <option key={available.id} value={available.id}>
                  {dayjs(available.tanggal).format("dddd, D MMMM YYYY")} -{" "}
                  {available.jam}
                </option>
              ))}
            </select>
            {errors.hariDipilih && (
              <p className="text-red-500 text-xs mt-1">{errors.hariDipilih}</p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Slot Pemain
          </label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(Number(e.target.value))}
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
          >
            {Object.entries(timeOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.timeSlot && (
            <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nama Rekening Pengirim
          </label>
          <input
            type="text"
            value={nama_rekening}
            onChange={(e) => setNama_Rekening(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan nama rekening pengirim"
          />
          {errors.nama_rekening && (
            <p className="text-red-500 text-xs mt-1">{errors.nama_rekening}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
