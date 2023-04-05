import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber, formatRupiah } from 'utils/Formats';
import { momentFormat } from 'utils/MomentFormat';

function CardRiwayatModal(props) {
  const { item } = props;

  const data = [
    {
      label: 'Modal Benih',
      value: formatRupiah(item.modalBenih)
    },
    {
      label: 'Jenis Pupuk',
      value: item.jenisPupuk
    },
    {
      label: 'Modal Pupuk',
      value: formatRupiah(item.modalPupuk)
    },
    {
      label: 'Modal Pestisida',
      value: formatRupiah(item.modalPestisida)
    },
    {
      label: 'Modal Pekerja',
      value: formatRupiah(item.modalPekerja) 
    }
  ];
return (
    <BaseCard>
    title={`${item.namaLahan} - ${CabaiEnum[item.komoditas]}`}

    </BaseCard>
);
};