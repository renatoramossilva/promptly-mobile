import {createSelector} from 'reselect';
import {getShortName} from '../utils';
import {getSelectedDisease} from './selected_diseases';

const defaultList = [];

export const getSpecialitiesByString = (provider) =>
  provider.specialities.map((s) => s.name).join(', ');

export const getDiseasePhysicianData = (professional, url) => {
  const {name, id, prefix, avatar_url: avatarUrl} = professional;

  return {
    id,
    url,
    image: {name, src: avatarUrl},
    name: `${prefix} ${name}`,
    shortName: `${prefix} ${getShortName(name)}`,
    description: getSpecialitiesByString(professional),
    childrens: defaultList,
    professional,
  };
};

export const getDiseasePhysiciansTeam = (pdisease) => {
  let inst = [];
  let team = [];

  if (pdisease.institution_team) {
    const {name, avatar_url: avatarUrl} = pdisease.institution_team.institution;
    const diseaseName = pdisease.institution_team.disease.name;
    inst = [
      {
        name: `${name}`,
        image: {name, src: avatarUrl},
        diseaseName,
      },
    ];
  }

  if (pdisease.team_members) {
    team = pdisease.team_members.map((t) =>
      getDiseasePhysicianData(t.professional, t.url),
    );
  }

  return [...inst, ...team];
};

export const getHospitalTeamMembers = createSelector(
  [getSelectedDisease],
  (disease) => {
    if (!disease.institution_team) {
      return defaultList;
    }
    const {name, avatar_url: avatarUrl} = disease.institution_team.institution;
    const diseaseName = disease.institution_team.disease.name;
    return [
      {
        name: `${name}`,
        image: {name, src: avatarUrl},
        diseaseName,
        childrens: disease.institution_team.members.map((p) =>
          getDiseasePhysicianData(p.institution_member.professional),
        ),
      },
    ];
  },
);

export const getDiseasePhysicianMembers = createSelector(
  [getSelectedDisease, getHospitalTeamMembers],
  (disease, hospitalTeam) =>
    hospitalTeam.concat(
      disease.team_members
        ? disease.team_members.map((t) =>
            getDiseasePhysicianData(t.professional, t.url),
          )
        : defaultList,
    ),
);

export const getCareDoctorMembers = createSelector(
  [getSelectedDisease],
  (disease) =>
    disease.care_doctor
      ? getDiseasePhysicianData(
          disease.care_doctor.professional,
          disease.care_doctor.url,
        )
      : undefined,
);

export const getAllProviders = (state) => state.providers.items;

export const getAllProvidersData = createSelector(
  [getAllProviders],
  (providers) => providers.map((p) => getDiseasePhysicianData(p, p.url)),
);

export const getInstitutions = (state) => state.institutions.items;

export const getInstitutionData = (institution) => {
  const {name, id, city, avatar_url: avatarUrl} = institution;
  return {
    id,
    image: {name, src: avatarUrl},
    name,
    description: city || '',
    childrens: [],
  };
};

export const getInstitutionsDataForList = createSelector(
  [getInstitutions],
  (institutions) => institutions.map((i) => getInstitutionData(i)),
);

export const getInstitutionsDataForSelectField = createSelector(
  [getInstitutions],
  (institutions) =>
    institutions.map((i) => ({
      label: i.name,
      value: i.id,
    })),
);
