import Service from './Service';
import { servicesData } from '../data';
import Title from './Title';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((serviceData) => {
          return <Service {...serviceData} key={serviceData.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
