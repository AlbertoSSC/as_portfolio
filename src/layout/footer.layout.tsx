import React from "react";

// import asLogo from "@/assets/images/ASSC_Imagotipo_Grey.png";

// function getCurrentYear() {
//   const date = new Date();
//   const year = date.getFullYear();
//   return year;
// }

export const FooterLayout: React.FC = () => {
  return (
    <>
      <div className="footer-container">
        <button
          className="footer-toTop"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ▲
        </button>
        {/* <div>
          <img src={asLogo} width="64" alt="alberto logo" />
          <p>
            Developed with React
            <br />
            {getCurrentYear()}
          </p>
        </div> */}
      </div>
    </>
  );
};
