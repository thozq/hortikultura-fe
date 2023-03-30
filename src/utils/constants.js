const optionsTipeCabai = [
  {
    value: 'cabaiMerahBesar',
    label: 'Cabai Merah Besar'
  },
  {
    value: 'cabaiMerahKeriting',
    label: 'Cabai Merah Keriting'
  },
  {
    value: 'cabaiRawitMerah',
    label: 'Cabai Rawit Merah'
  },
  {
    value: 'bawangMerah',
    label: 'Bawang Merah'
  },
  {
    value: 'bawangPutih',
    label: 'Bawang Putih'
  }
];

const optionsPedagang = [
  {
    value: 'distributor',
    label: 'Distributor'
  },
  {
    value: 'agen',
    label: 'Agen'
  },
  {
    value: 'pengepul',
    label: 'Pengepul'
  },
  {
    value: 'grosir',
    label: 'Grosir'
  },
  {
    value: 'pengecer',
    label: 'Pengecer'
  }
];

const optionsRole = [
  {
    value: 'petani',
    label: 'Petani'
  },
  {
    value: 'pengepul',
    label: 'Pengepul'
  },
  {
    value: 'pengecer',
    label: 'Pengecer'
  },
  {
    value: 'distributor',
    label: 'Distributor'
  },
  {
    value: 'agen',
    label: 'Agen'
  },
  {
    value: 'grosir',
    label: 'Grosir'
  }
];

const optionsRolePetugas = [
  {
    value: 'pdh',
    label: 'Petugas PDH'
  },
  {
    value: 'dinas',
    label: 'Dinas Pertanian'
  }
];
const optionsGradeCabai = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
  { value: 'c', label: 'C' },
  { value: 'd', label: 'D' },
  { value: 'n', label: '-' }
];

const optionsUsang = [
  { value: 'dibuang', label: 'Dibuang' },
  { value: 'diberikan ke orang', label: 'Diberikan ke Orang' },
  { value: 'dijual murah', label: 'Dijual Murah' },
  { value: 'lainnya', label: 'Lainnya' }
];

const optionsMusim = [
  { value: 'kemarau', label: 'Musim Kemarau' },
  { value: 'hujan', label: 'Musim Hujan' }
];

const CabaiEnum = Object.freeze({
  cabaiMerahBesar: 'Cabai Merah Besar',
  cabaiMerahKeriting: 'Cabai Merah Keriting',
  cabaiRawitMerah: 'Cabai Rawit Merah',
  bawangMerah: 'Bawang Merah',
  bawangPutih: 'Bawang Putih'
});

const PupukEnum = Object.freeze({
  urea: 'Urea',
  tsp: 'TSP/SP36',
  za: 'ZA',
  npk: 'NPK',
  npkKhusus: 'NPK Formula Khusus',
  organik: 'Organik',
  organikCair: 'Organik Cair'
});

const StatusEnum = Object.freeze({
  0: 'Diajukan',
  1: 'Ditolak',
  2: 'Diterima'
});

const StatusEnumSmall = Object.freeze({
  0: 'diajukan',
  1: 'ditolak',
  2: 'diterima'
});

const RoleEnum = Object.freeze({
  petani: 'Petani',
  agen: 'Agen',
  distributor: 'Distributor',
  pengepul: 'Pengepul',
  pengecer: 'Pengecer',
  grosir: 'Grosir',
  pdh: 'PDH',
  dinas: 'Dinas Pertanian',
  dinasPetanianKota: 'Dinas Pertanian Kota',
  dinasPertanianKabupaten: 'Dinas Pertanian Kabupaten'
});

const GradeEnum = Object.freeze({
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
});
const optionsJenisPupuk = [
  { value: 'urea', label: 'Urea' },
  { value: 'tsp', label: 'TSP/SP36' },
  { value: 'za', label: 'ZA' },
  { value: 'npk', label: 'NPK' },
  { value: 'npkKhusus', label: 'NPK formula khusus' },
  { value: 'organik', label: 'Organik' },
  { value: 'organikCair', label: 'Organik cair' }
];

const jenisStatistik = [
  { value: 'harga', label: 'Harga Rata-Rata' },
  { value: 'produksi', label: 'Total Produksi' }
];
export {
  optionsTipeCabai,
  optionsPedagang,
  optionsRole,
  optionsRolePetugas,
  optionsGradeCabai,
  optionsUsang,
  optionsMusim,
  CabaiEnum,
  StatusEnum,
  StatusEnumSmall,
  RoleEnum,
  GradeEnum,
  optionsJenisPupuk,
  PupukEnum,
  jenisStatistik
};
