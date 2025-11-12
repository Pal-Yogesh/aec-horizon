"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./LoaderWrapper.css";
const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
          setIsLoading(false);
          setShowContent(true);
          // Re-enable scrolling
          document.body.style.overflow = "auto";
        },
      }
    );
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <div
            className="loading-page"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 10,
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <span className="loader-6"></span>
          </div>
        </>
      )}

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;







// "use client";
// import { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import "./LoaderWrapper.css";

// const LoaderWrapper = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     gsap.fromTo(
//       ".loading-page",
//       { opacity: 1 },
//       {
//         opacity: 0,
//         duration: 1.5,
//         delay: 4.5,
//         onComplete: () => {
//           setIsLoading(false);
//           setShowContent(true);
//           document.body.style.overflow = "auto";
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       {isLoading && (
//         <div
//           className="loading-page"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             gap: "1rem",
//             zIndex: 50,
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100vh",
//             background:
//             "linear-gradient(180deg, #D8DDED 0%, #E1E8FF 68.17%)",

//             overflow: "hidden",
//           }}
//         >
//           <span className="loader-6"></span>
//         </div>
//       )}

//       <div
//         style={{
//           opacity: showContent ? 1 : 0,
//           transition: "opacity 0.5s ease-in-out",
//           pointerEvents: isLoading ? "none" : "auto",
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default LoaderWrapper;
