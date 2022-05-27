export const formatRupiah = (money) => {
  if (!money) return;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(money);
};

export const formatNumber = (number) => {
  if (!number) return;
  var dots = number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return `${dots} kg`;
};
