export const getInstitutionData = (institution) => {
  const {short_name, name, id, city, avatar_url: avatarUrl} = institution;
  return {
    id,
    image: {name, src: avatarUrl || ''},
    short_name,
    name,
    description: city || '',
    childrens: [],
  };
};
