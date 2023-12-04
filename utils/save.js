const models = require("../models");

const addSave = async (userId, roadmapId) => {
  const selectedRoadmap = await models.Roadmap.findOne({
    where: { roadmapId },
  });
  if (selectedRoadmap === null) return null;
  const data = await models.Save.create({ userId, roadmapId });
  return data;
};

const deleteSave = async (userId, roadmapId) => {
  const selectedSave = await models.Save.findOne({
    where: { userId, roadmapId },
  });
  if (selectedSave === null) return null;
  const data = await models.Save.destroy({ where: { userId, roadmapId } });
  return data;
};

const getSaveCount = async (roadmapId) => {
  const data = await models.Save.count({ where: { roadmapId } });
  return data;
};

const getUserSavedRoadmap = async (userId) => {
  const saveData = await models.Save.findAll({ where: { userId } });
  let data = [];
  for (let i = 0; i < saveData.length; i++) {
    const roadmapId = saveData[i].dataValues.roadmapId;
    const [roadmap] = await models.Roadmap.findAll({ where: { roadmapId } });
    roadmap.dataValues.saveCount = await getSaveCount(roadmapId);
    roadmap.dataValues.steps = roadmap.dataValues.steps.split(",");
    roadmap.dataValues.saveState = true;
    data[i] = roadmap;
  }

  return data;
};

module.exports = { addSave, deleteSave, getSaveCount, getUserSavedRoadmap };
