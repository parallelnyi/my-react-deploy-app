import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ShowImage from "./components/ShowImage";

import nurba from "./components/logo/нурбо.jpg";
import nestana from "./components/logo/нестана.jpg";
import argen from "./components/logo/арген.jpg";
import erbol from "./components/logo/эрбол.jpg";
import vova from "./components/logo/вова.jpg";
import nurs from "./components/logo/нурс.jpg";
import saida from "./components/logo/саида.jpg";


export default function () {
  const [showImage, setShowImage] = useState(null);
 

  const nurbaHandler = (props) => {
    setShowImage(nurba);
  };

  const nestanaHandler = () => {
    setShowImage(nestana);
  };
  const argenHandler = () => {
    setShowImage(argen);
  };
  const erbolHandler = () => {
    setShowImage(erbol);
  };
  const vovaHandler = () => {
    setShowImage(vova);
  };
  const nursHandler = () => {
    setShowImage(nurs);
  };
  const saidaHandler = () => {
    setShowImage(saida);
  };

  return (
    <div>
      <Header />
      <Main
        clicks={{
          nurbaHandler,
          nestanaHandler,
          argenHandler,
          erbolHandler,
          vovaHandler,
          nursHandler,
          saidaHandler,
        }}
      />
      <ShowImage image={showImage}  />
      
      
    </div>
  );
}
