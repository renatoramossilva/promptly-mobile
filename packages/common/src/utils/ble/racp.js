export const RACP_COMMANDS = {
  getAllFromLastId: {
    format: '<BBBH',
    values: [1, 3, 1],
  },
  getAll: {
    format: '<BB',
    values: [1, 1],
  },
};

export const getAllFromLastId = (lastId = 1) => {
  const command = RACP_COMMANDS.getAllFromLastId;
  command.values.push(lastId);
  return command;
};

export const getAll = () => RACP_COMMANDS.getAll;
