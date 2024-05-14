import { ITFMap } from '../interfaces/interfaces';

const POSTALS: ITFMap = {
  us: ['United States', '^d{5}(?:[-s]d{4})?$', 'NNNNN (optionally NNNNN-NNNN)'],
  uk: [
    'United Kingdom',
    '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})',
    'A(A)N(A/N)NAA (A[A]N[A/N] NAA)',
  ],
  ca: [
    'Canada',
    '^[ABCEGHJ-NPRSTVXY]d[ABCEGHJ-NPRSTV-Z][ -]?d[ABCEGHJ-NPRSTV-Z]d$',
    'ANA NAN',
  ],
  de: ['Germany', '^(?!01000|99999)(0[1-9]d{3}|[1-9]d{4})$', 'NNNNN'],
  fr: ['France', '^d{2}[ ]?d{3}$', 'NN NNN'],
  nl: ['Netherlands', '^\\d{4}\\s{0,1}[A-Za-z]{2}$', 'NNNN AA'],
};

export default POSTALS;
