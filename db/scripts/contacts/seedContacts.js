import fs from "fs/promises";
import path from "path";
import Contact from "../../models/Contact.js";
import User from "../../models/User.js";

const seedContacts = async () => {
  const contactsPath = path.resolve(
    "db",
    "scripts",
    "contacts",
    "contacts.json"
  );

  const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));

  const user = await User.findOne();
  
  if (!user) {
    throw new Error("No users found in the database.");
  }

  const contactsWithOwner = contacts.map(contact => ({
    ...contact,
    owner: user.id 
  }));

  await Contact.bulkCreate(contactsWithOwner);
};

export default seedContacts;

