import React from "react";
export default function DaftarJurusan(props) {
  const { daftar, daftarfakultas, daftaruniv } = props;
  return (
    <div>
      <p className="flex flex-col items-center justify-center bg-gray-100 shadow-md" style={{ height: "200px" }}>
      <h3 className="font-bold text-xl">Daftar Jurusan {daftarfakultas}</h3>
        Universitas {daftaruniv}
      </p>
      {daftar.map((daftar) => (
            <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-15 lg:aspect-none">
                <div className="mt-4 flex justify-between">            
            <table>
              <tr>
                <td className="text-sm font-medium text-green-900">{daftar.name}</td>
                <td className="text-sm font-medium text-green-900">  Fakultas {daftar.namafakultas}</td>
                <td className="text-sm font-medium text-green-900">  Jumlah Mahasiswa {daftar.jumlah}</td>
              </tr>
            </table>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
}
