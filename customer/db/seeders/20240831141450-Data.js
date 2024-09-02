'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Data',
      [
        {
          name: 'Александр',
          lastname: 'Орлов',
          jobTitle: 'директор',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елена',
          lastname: 'Шевелева',
          jobTitle: 'администратор',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Светлана',
          lastname: 'Стриженова',
          jobTitle: 'менеджер',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Data', null, {});
  },
};
