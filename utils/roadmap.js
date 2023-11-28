const models = require("../models");

const getRoadmapData = async () => {
  const roadmap = await models.Roadmap.findAll();
  const copiedData = [...roadmap];
  let data = [];

  for (let i = 0; i < copiedData.length; i++) {
    data[i] = copiedData[i].dataValues;
  }

  return data;
};

const getUserRoadmapData = async (userId) => {
  const roadmap = await models.Roadmap.findAll({ where: { userId } });
  const copiedData = [...roadmap];
  let data = [];

  for (let i = 0; i < copiedData.length; i++) {
    data[i] = copiedData[i].dataValues;
  }

  return data;
};

const addRoadmap = async (userId, steps) => {
  const copiedSteps = [...steps];
  const newSteps = copiedSteps.join(",");
  const data = await models.Roadmap.create({ userId, steps: newSteps });
  return data;
};

const getSelectedRoadmapData = async (roadmapId) => {
  const data = await models.Roadmap.findOne({ where: { roadmapId } });
  return data;
};

const updateSelectedRoadmap = async (roadmapId, newSteps) => {
  const selectedRoadmap = await models.Roadmap.findOne({
    where: { roadmapId },
  });
  if (selectedRoadmap === null) return null;
  const data = await models.Roadmap.update(
    { steps: newSteps },
    { where: { roadmapId } },
  );
  return data;
};

const deleteSelectedRoadmapData = async (roadmapId) => {
  const selectedRoadmap = await models.Roadmap.findOne({
    where: { roadmapId },
  });
  if (selectedRoadmap === null) return null;
  const data = await models.Roadmap.destroy({ where: { roadmapId } });
  return data;
};

module.exports = {
  getRoadmapData,
  getUserRoadmapData,
  addRoadmap,
  getSelectedRoadmapData,
  updateSelectedRoadmap,
  deleteSelectedRoadmapData,
};
