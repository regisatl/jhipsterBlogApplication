import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21137,
  login: 'O6w',
};

export const sampleWithPartialData: IUser = {
  id: 11604,
  login: 'gP.',
};

export const sampleWithFullData: IUser = {
  id: 10652,
  login: 'RAgaEo',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
