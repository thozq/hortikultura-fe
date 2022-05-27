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

const CabaiEnum = Object.freeze({
  cabaiMerahBesar: 'Cabai Merah Besar',
  cabaiMerahKeriting: 'Cabai Merah Keriting',
  cabaiRawitMerah: 'Cabai Rawit Merah'
});

const StatusEnum = Object.freeze({
  0: 'Diajukan',
  1: 'Ditolak',
  2: 'Diterima'
});

const RoleEnum = Object.freeze({
  petani: 'Petani',
  agen: 'Agen',
  distributor: 'Distributor',
  pengepul: 'Pengepul',
  pengecer: 'Pengecer',
  grosir: 'Grosir',
  pdh: 'PDH',
  dinasPetanianKota: 'Dinas Pertanian Kota',
  dinasPertanianKabupaten: 'Dinas Pertanian Kabupaten'
});

export { optionsTipeCabai, optionsPedagang, optionsRole, CabaiEnum, StatusEnum, RoleEnum };
