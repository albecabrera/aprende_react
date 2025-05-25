import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import  Footer2  from "./Footer.jsx";

const temp = "Buenos días";

function Footer() {
  return <h3>Footer aquí</h3>;
}

// const Footer2 = () => {
//   return (
//     <>
//       <h3>Footer aquí 2</h3>
//       <p>Contenido</p>
//     </>
//   );
// };

// document.querySelector("#root").innerHTML="<h1>{temp}</h1>"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>{temp}</h1>
    <Footer />
    <Footer2 />
  </StrictMode>
);
// const temp="Buenos días";
//       // document.querySelector("#root").innerHTML="<h1>{temp}</h1>"
//       // document.getElementById("root").innerHTML="<h1>"+temp+"</h1>"
//       document.getElementById("root").innerHTML=`<h1>${temp}</h1>`
