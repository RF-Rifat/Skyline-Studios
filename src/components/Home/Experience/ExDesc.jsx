import Button from "../../shared/Button/Button";

const ExDesc = () => {
  return (
    <div className="max-w-4xl mx-auto" data-aos="fade-up">
      <div className="who-section-content-wrap">
        <div className="section-cotent-wrap">
          <p
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="section-paragraph fw-400 mb-50 color-gray-800"
          >
            Welcome to Musemind: Where UX Dreams Soar! As your dedicated UX
            design agency, we transform user insights into dynamic strategies,
            collaborating with diverse industries and expertise.
          </p>
          <p
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="section-paragraph fw-400 mb-50 color-gray-800"
          >
            Our experts utilize tech trends, shaping designs that surpass
            expectations with innovation. Our meticulous process guarantees
            pixel-perfect results for apps and websites. We are partners,
            offering end-to-end excellence. Join Musemind and see how
            extraordinary UX design can transform your business. &quot;Elevating
            UX&quot; is more than just a tagline; it&apos;s our commitment to
            you.
          </p>
          <Button
            text={"Contact Us"}
            color={"bg-[#FFFF00]"}
            fontClr={"text-[#000000]"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExDesc;
