const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SavedPets extends Model {}

SavedPets.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		pf_id: {
			type: DataTypes.STRING, 
		},
		photo: {
			type: DataTypes.STRING,
		},
		species: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
		},
		breed: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.STRING,
		},
		age: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.STRING,
		},
		published_at: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		contact: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "pets",
	}
);
module.exports = SavedPets;
