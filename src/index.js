import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import data from './data.json';
import CardList from './components/CardList';
import Quotes from "./components/Quotes";
import DaftarJurusan from "./components/Aldrian/";

const quotes = "Tugas Modul 2";
const tambahan ="Props dan Component";
const daftar = [
  { name: "Teknik Elektro",namafakultas:"Teknik",jumlah: "500000" },
  { name: "Teknik Komputer",namafakultas:"Teknik", jumlah: "6435" },
  { name: "Kedokteran",namafakultas:"Teknik", jumlah: "30000" },
  { name: "Teknik Mesin",namafakultas:"Teknik", jumlah: "14000" },
];

const daftarfakultas = "Teknik dan Kedokteran";
const daftaruniv = "Diponegoro";
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data} />
    <Quotes quotes={quotes} author="bye Amaliah Safitri"  tambahan={tambahan}/>
    <DaftarJurusan
      daftarfakultas = {daftarfakultas}
      daftaruniv = {daftaruniv}
      daftar = {daftar}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
