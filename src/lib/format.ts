export const rm = (n: number) =>
  'RM' + n.toLocaleString('en-MY', {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

export const waHref = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
