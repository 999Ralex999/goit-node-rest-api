import User from '../../models/User.js';
import Contact from '../../models/Contact.js';

const seedContacts = async () => {
   
    const users = await User.findAll();

 
    console.log('Users found in the database:', users);


    if (users.length === 0) {
        throw new Error('No users found to assign as owners of contacts');
    }

    const contactsData = [
        {
            name: 'Chaim Lewis',
            email: 'dui.in@egetlacus.ca',
            phone: '(294) 840-6685',
            owner: users[0].id,
        },
        {
            name: 'Kennedy Lane',
            email: 'mattis.Cras@nonenimMauris.net',
            phone: '(542) 451-7038',
            owner: users[1].id,
        },
        {
            name: 'Wylie Pope',
            email: 'est@utquamvel.net',
            phone: '(692) 802-2949',
            owner: users[0].id,
        },
        {
            name: 'Cyrus Jackson',
            email: 'nibh@semsempererat.com',
            phone: '(501) 472-5218',
            owner: users[1].id,
        },
        {
            name: 'Abbot Franks',
            email: 'scelerisque@magnis.org',
            phone: '(186) 568-3720',
            owner: users[0].id,
        },
        {
            name: 'Reuben Henry',
            email: 'pharetra.ut@dictum.co.uk',
            phone: '(715) 598-5792',
            owner: users[1].id,
        },
        {
            name: 'Simon Morton',
            email: 'dui.Fusce.diam@Donec.com',
            phone: '(233) 738-2360',
            owner: users[0].id,
        },
        {
            name: 'Thomas Lucas',
            email: 'nec@Nulla.com',
            phone: '(704) 398-7993',
            owner: users[1].id,
        },
        {
            name: 'Alec Howard',
            email: 'Donec.elementum@scelerisquescelerisquedui.net',
            phone: '(748) 206-2688',
            owner: users[0].id,
        },
    ];

    await Contact.bulkCreate(contactsData);
};

export default seedContacts;
