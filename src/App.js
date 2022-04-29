import React, { useEffect, useState } from "react";
import Catalog from "./components/Catalog";
import Header from "./components/Header";
import History from "./components/History";
import NewProduct from "./components/NewProduct";
import LastProduct from "./components/LastProduct";
import Number from "./components/Number";
import Partners from "./components/Partners";
import Contacts from "./components/Contacts";
import { ScaleLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <img src="/img/logo.png" alt="" /> 
          <ScaleLoader
            className="loader"
            loading={loading}
            size="70"
            color="#d6171f"
          />
        </div>
      ) : (
        ""
      )}
      <Header />
      <Catalog />
      <NewProduct />
      <History />
      {/* <LastProduct /> */}
      <Number />
      <Partners />
      <Contacts />
    </>
  );
};

export default App;
