import { ServiceAccordion } from "./Accrodian";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1440px] mx-auto">
        <h3
          className="text-2xl max-w-screen-2xl mx-auto text-white pt-14 pb-10 ml-6"
          style={{
            borderBottom: ".5px solid #bdbfc14c",
          }}
        >
          Services we offer
        </h3>
        <ServiceAccordion />
      </div>
    </div>
  );
};

export default Services;
