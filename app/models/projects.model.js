/*import { Model, DataTypes } from 'sequelize/core';
import { ColumnName } from '@sequelize/core/decorators-legacy';
class Projects extends Model{
  @ColumnName('created_at')
  CreatedAt;
  @ColumnName('updated_at')
  UpdatedAt;
}*/

//Export and create table Project
module.exports = (sequelizeConnect, Sequelize) => {
    const Projects = sequelizeConnect.define("projects", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      icon_name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field:["created_at"],
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field:["updated_at"],
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      
    },
    {
      indexes:[
        {
          unique: false,
          fields:["title"]
        }
      ]
    });
  
    return Projects;
  };