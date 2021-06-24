function callContact(contactList, action) {
    for(let contact of contactList) {
      action(`Calling ${contact.name} at ${contact.number}`);
    }
  }
  
  callContact(contacts, console.log);
   
  