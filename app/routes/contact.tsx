import { createRoute } from 'honox/factory';
import ContactContent from '../islands/ContactContent';
import contactDataJson from '../../data/contact.json';
import type { ContactMe } from '../types/contact';

const ContactData = contactDataJson as ContactMe;

export default createRoute(async (c) => {
  return c.render(
    <>
      <ContactContent way={ContactData.way} />
    </>
  );
});
