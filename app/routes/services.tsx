import { createRoute } from 'honox/factory';
import profileJson from '../../data/profile.json';
import servicesJson from '../../data/services.json';
import type { ProfileSocials } from '../types/profile';
import type { ServiceInfo } from '../types/services';
import CommonHeader from '../islands/CommonHeader';
import { generalMessages } from '../locales/translations';
import ServicesContent from '../islands/ServicesContent';

const typedProfile = profileJson as { social: ProfileSocials };
const typedServices = servicesJson.services as ServiceInfo;

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <CommonHeader
          titleContent={generalMessages.servicesTitle}
          descriptionContent={generalMessages.servicesDescription}
        />
        <ServicesContent profile={typedProfile} services={typedServices} />
      </div>
    </>
  );
});
