"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Burgers",
      [
        {
          name: "Hamburger Classico",
          description:
            "O hamburger clássico é feito com carne bovina, alface, tomate e queijo cheddar.",
          price: 18.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Double Cheeseburger",
          description:
            "O double cheeseburger é feito com dois hambúrgueres de carne, queijo cheddar e molho especial.",
          price: 25.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Burger",
          description:
            "O chicken burger é feito com frango grelhado, bacon crocante e molho BBQ.",
          price: 18.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Egg Burger",
          description:
            "O egg burger é feito com ovo frito, alface e molho especial.",
          price: 20.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Burgers", null, {});
  },
};
