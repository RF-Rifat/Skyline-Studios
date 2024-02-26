import { Select, Textarea, Option, Input } from "@material-tailwind/react";
import Button from "../../shared/Button/Button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-heroBg p-10 relative overflow-hidden">
      <div>
        <div
          className="grid grid-cols-2"
          // style={{
          //   backgroundImage:
          //     "url('https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp')",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "contain",
          //   position: "",

          // }}
        >
          <div className="relative">
            <h2 className="text-white mb-52 text-7xl mx-20 font-semibold">
              Have a Project Idea?
            </h2>
          </div>
          <div className="px-6">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="text-4xl">
                <Input
                  variant="static"
                  color="black"
                  label="Full Name"
                  placeholder="Jane Doe"
                  className="border-b-[3px] text-2xl"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  variant="static"
                  label="Company name"
                  color="black"
                  placeholder="Ex. Tesla Inc"
                  className="border-b-[3px] text-black"
                />
                <Input
                  variant="static"
                  label="Email*"
                  color="black"
                  placeholder="You@Example.Com"
                  className="border-b-[3px] text-black"
                />
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    variant="static"
                    label="Service required*"
                    color="black"
                    className="border-b-[3px] text-black"
                  >
                    <Option value="UI/UX Design">UI/UX Design</Option>
                    <Option value="SaaS Design">SaaS Design</Option>
                    <Option value="Brand Identity">Brand Identity</Option>
                    <Option value="Webflow">Webflow</Option>
                    <Option value="Web Design">Web Design</Option>
                    <Option value="MVP Development">MVP Development</Option>
                    <Option value="Design System">Design System</Option>
                  </Select>

                  <Select
                    variant="static"
                    label="Project budget*"
                    color="black"
                    className="border-b-[3px] text-black"
                  >
                    <Option value="$5K - $10K">$5K - $10K</Option>
                    <Option value="$10K - $20K">$10K - $20K</Option>
                    <Option value="$20K - $50K">$20K - $50K</Option>
                    <Option value="$50K - $100K">$50K - $100K</Option>
                    <Option value="$100k and up">$100k and up</Option>
                  </Select>
                </div>
              </div>

              <Textarea
                variant="static"
                label="Project details*"
                placeholder="Tell Us More About Your Idea"
                className="border-b-[3px] text-black"
              />
              <div className="btn-wrapper mobile-top-30">
                <Button
                  text={"Send inquiry"}
                  color={"bg-[#000000]"}
                  fontClr={"text-[#fff]"}
                  pad={"p-2"}
                />
              </div>
            </form>
          </div>
        </div>
        {/* <div
          className="absolute bottom-6 top-1 bg-no-repeat bg-deep-orange-800 bg-[url('https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp')]"
          // style={{
          //   // backgroundImage:
          //   //   "url('https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp')",
          //   // backgroundRepeat: "no-repeat",
          //   // mixBlendMode: "soft-light",
          // }}
        >
          
        </div> */}
        <div className="absolute top-0 right-auto mix-blend-soft-light">
          <img
            src={
              "https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp"
            }
            loading="lazy"
            srcSet={
              "https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg-p-500.png 500w, https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp 505w"
            }
            alt=""
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 65vw, 505px"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
