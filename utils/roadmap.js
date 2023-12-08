const models = require("../models");
const user = require("./user");
const save = require("./save");

const getRoadmapData = async (userCode) => {
  const roadmap = await models.Roadmap.findAll();
  const copiedData = [...roadmap];
  let data = [];

  for (let i = 0; i < copiedData.length; i++) {
    let { dataValues } = copiedData[i];
    dataValues.steps = dataValues.steps.split(" ,");
    dataValues.saveCount = await save.getSaveCount(dataValues.roadmapId);
    dataValues.saveState = false;
    data[i] = dataValues;
  }

  if (userCode !== null) {
    const { userId } = (await user.getUserData(userCode)).dataValues;
    const savedRoadmap = await save.getUserSavedRoadmap(userId);
    for (let i = 0; i < savedRoadmap.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (savedRoadmap[i].dataValues.roadmapId === data[j].roadmapId) {
          data[j].saveState = true;
          break;
        }
      }
    }
  }

  return data;
};

const getUserRoadmapData = async (userId, userCode) => {
  const roadmap = await models.Roadmap.findAll({ where: { userId } });
  const copiedData = [...roadmap];
  let data = [];

  for (let i = 0; i < copiedData.length; i++) {
    let { dataValues } = copiedData[i];
    dataValues.steps = dataValues.steps.split(" ,");
    dataValues.saveCount = await save.getSaveCount(dataValues.roadmapId);
    dataValues.saveState = false;
    data[i] = dataValues;
  }

  if (userCode !== null) {
    const savedRoadmap = await save.getUserSavedRoadmap(userId);
    for (let i = 0; i < savedRoadmap.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (savedRoadmap[i].dataValues.roadmapId === data[j].roadmapId) {
          data[j].saveState = true;
          break;
        }
      }
    }
  }
  return data;
};

const addRoadmap = async (userId, steps) => {
  const copiedSteps = [...steps];
  const newSteps = copiedSteps.toString();
  const data = await models.Roadmap.create({ userId, steps: newSteps });
  return data;
};

const getSelectedRoadmapData = async (roadmapId) => {
  const data = await models.Roadmap.findOne({ where: { roadmapId } });
  return data;
};

const updateSelectedRoadmap = async (roadmapId, steps) => {
  const selectedRoadmap = await models.Roadmap.findOne({
    where: { roadmapId },
  });
  if (selectedRoadmap === null) return null;
  const copiedSteps = [...steps];
  const newSteps = copiedSteps.toString();
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
