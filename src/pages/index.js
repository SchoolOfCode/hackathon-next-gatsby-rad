import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { getRandomDogImage } from "../services/dogAPI.js";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>This is the home page</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src={getRandomDogImage()}
      />
    </Layout>
  );
}

export default IndexPage;
