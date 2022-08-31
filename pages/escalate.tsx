import React from "react";
import Layout from "../components/Layout";
import HorizontalLinearStepper from "../components/stapper";


function escalate() {
  return (
    <Layout>
      <div>
        <h1 className="mb-5">Escalate</h1>
        <HorizontalLinearStepper />
      </div>
    </Layout>
  );
}


export default escalate;
