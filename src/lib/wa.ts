import site from '../data/site.json';

export const WA_NUMBER = site.advisor.whatsappNumber;
export const fill = (tpl: string, vehicle: string) => tpl.replaceAll('{vehicle}', vehicle);
export const waUrl = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
