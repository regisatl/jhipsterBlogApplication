import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '26adbf67-f321-4b2a-96cd-69d1400418ee',
};

export const sampleWithPartialData: IAuthority = {
  name: '5cf9e38e-9205-462e-a787-5495b7e02537',
};

export const sampleWithFullData: IAuthority = {
  name: '0dfc4baf-8520-4421-921b-b808777cf58d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
