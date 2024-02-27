import { ServiceAccordion } from "./Accrodian";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1440px] mx-auto">
        <h3 className="text-xl ml-4 lg:ml-28 text-white pt-14 ">
          Services we offer
        </h3>
        <ServiceAccordion />
      </div>
    </div>
  );
};

export default Services;
