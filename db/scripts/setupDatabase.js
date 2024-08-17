import sequelize from '../sequelize.js';
import seedContacts from './contacts/seedContacts.js';
import seedUsers from "./users/seedUsers.js";

const setupDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful');

        await sequelize.sync({ force: true });

        await seedUsers();
        console.log('Users have been seeded successfully.');

        await seedContacts();
        console.log('Contacts have been seeded successfully.');

        console.log('Database setup and seeding complete.');
    } catch (error) {
        console.error('Error setting up the database:', error);
        process.exit(1);
    }
};

export default setupDatabase;



