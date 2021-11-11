import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import banner from "../../static/img/eye.jpg";
import Banner from "../components/Banner";
import Body from "../components/Body";
import CopyBlock from "../components/CopyBlock";
import { H1, H3 } from "../components/styles/TextStyles";
import Section from "../components/Section";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://wallet.everest.org/signupterm"
          >
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}
function HomepageBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        height: 600,
        flex: 1,
        width: "100%",
        padding: "60px",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <H1 className="hero__title">{siteConfig.title}</H1>
        <H3 className="hero__subtitle">{siteConfig.tagline}</H3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://wallet.everest.org/signupterm"
          >
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="INF provides open access to a global identity creation and verification network, and associated digital wallet for humanity."
    >
      <HomepageBanner />

      <main>
        <Body />
        <Section />
      </main>
    </Layout>
  );
}
