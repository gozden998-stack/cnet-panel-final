import React from 'react';
import { LayoutDashboard, Store, DollarSign, Smartphone } from 'lucide-react';

export default function CnetAdmin() {
  const magazalar = [
    "Çerkezköy Merkez", "Kapaklı 1", "Kapaklı 2", "Saray", 
    "Çorlu 1", "Çorlu 2", "Tekirdağ", "Lüleburgaz"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-bold text-blue-500">CNETMOBİL <span className="text-white">Admin</span></h1>
        <p className="text-gray-400 mt-2">2003'ten Beri Güvenle - 8 Mağaza Yönetimi</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <Store className="mb-4 text-blue-400" size={32} />
          <h3 className="text-lg font-semibold text-gray-400">Aktif Mağaza</h3>
          <p className="text-3xl font-bold">8</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <Smartphone className="mb-4 text-green-400" size={32} />
          <h3 className="text-lg font-semibold text-gray-400">Bugün Alınan</h3>
          <p className="text-3xl font-bold">14</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <DollarSign className="mb-4 text-yellow-400" size={32} />
          <h3 className="text-lg font-semibold text-gray-400">Kasa Durumu</h3>
          <p className="text-3xl font-bold text-green-500">Aktif</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Şube Takip Paneli</h2>
      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="p-4">Mağaza Adı</th>
              <th className="p-4">Durum</th>
            </tr>
          </thead>
          <tbody>
            {magazalar.map((m, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="p-4 font-medium">{m}</td>
                <td className="p-4"><span className="bg-green-900/30 text-green-500 px-3 py-1 rounded-full text-xs font-bold">AÇIK</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
