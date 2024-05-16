import { ITFMap } from '../interfaces/interfaces';

const POSTALS: ITFMap = {
  us: [
    'United States',
    '^\\d{5}(?:[-\\s]\\d{4})?$',
    'NNNNN (optionally NNNNN-NNNN)',
  ],
  uk: [
    'United Kingdom',
    '[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}',
    'A(A)N(A/N)NAA (A[A]N[A/N] NAA)',
  ],
  ca: [
    'Canada',
    '^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVXY][ -]?\\d[ABCEGHJKLMNPRSTVXY]\\d$',
    'ANA NAN',
  ],
  de: ['Germany', '^(?!01000|99999)(0[1-9]\\d{3}|[1-9]\\d{4})$', 'NNNNN'],
  fr: [
    'France',
    '^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B)) *([0-9]{3})?$',
    'NN NNN',
  ],
  nl: ['Netherlands', '\\d{4}[A-Z]{2}', 'NNNN AA'],
};

export default POSTALS;
