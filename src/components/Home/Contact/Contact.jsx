import { Select, Textarea, Button, Option } from "@material-tailwind/react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-heroBg p-10 relative">
      <div>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="fz-72 text-white mb-52 text-7xl mx-28">
              Have a Project Idea?
            </h2>
            <div
              className="right-auto max-w[810px] bg-no-repeat"
              style={{
                background:
                  "url('https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp')",
                backgroundRepeat: "no-repeat",
                mixBlendMode: "soft-light",
              }}
            ></div>
          </div>
          <div className="form-wrap flex-1">
            <form onSubmit={handleSubmit} className="our-contact-form">
              <div className="contact-form-label">Full Name</div>
              <label placeholder="Jane Cooper" required />
              <div className="grid-item contact-grid">
                <div className="grid-one">
                  <div className="contact-form-label">Company name</div>
                  <label placeholder="Ex. Tesla Inc" name="Company-Name" />
                </div>
                <div className="grid-two">
                  <div className="contact-form-label">Email*</div>
                  <label
                    placeholder="you@example.com"
                    type="email"
                    name="Email"
                    required
                  />
                </div>
              </div>
              <div className="grid-item contact-grid">
                <div className="grid-two">
                  <div className="contact-form-label">Service required*</div>
                  <Select>
                    <Option value="UI/UX Design">UI/UX Design</Option>
                    <Option value="SaaS Design">SaaS Design</Option>
                    <Option value="Brand Identity">Brand Identity</Option>
                    <Option value="Webflow">Webflow</Option>
                    <Option value="Web Design">Web Design</Option>
                    <Option value="MVP Development">MVP Development</Option>
                    <Option value="Design System">Design System</Option>
                  </Select>
                </div>
                <div className="grid-one">
                  <div className="contact-form-label">Project budget*</div>
                  <Select label="$5K - $10K">
                    <Option value="$5K - $10K">$5K - $10K</Option>
                    <Option value="$10K - $20K">$10K - $20K</Option>
                    <Option value="$20K - $50K">$20K - $50K</Option>
                    <Option value="$50K - $100K">$50K - $100K</Option>
                    <Option value="$100k and up">$100k and up</Option>
                  </Select>
                </div>
              </div>
              <div className="contact-form-label">Project details*</div>
              <Textarea placeholder="Tell us more about your idea" required />
              <div className="btn-wrapper mobile-top-30">
                <Button
                  color="blue"
                  buttonType="filled"
                  size="regular"
                  type="submit"
                >
                  Send inquiry
                </Button>
              </div>
            </form>
            <div
              className="w-form-done"
              tabIndex="-1"
              role="region"
              aria-label="Email Form success"
            >
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div
              className="w-form-fail"
              tabIndex="-1"
              role="region"
              aria-label="Email Form failure"
            >
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-image absolute mix-blend-soft-light right-auto max-w[810px]">
        <img
          src="https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp"
          loading="lazy"
          alt=""
          srcSet="https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg-p-500.png 500w, https://assets-global.website-files.com/643f7373d3f6653157617339/65a67cc6a52043fdbaf05e77_Contact%20Bg.webp 505w"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 65vw, 505px"
        />
      </div> */}
    </div>
  );
};

export default Contact;
