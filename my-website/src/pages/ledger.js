import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "../components/HomepageFeatures.module.css";
import { BodyMain, H2 } from "../components/styles/TextStyles";

const FeatureList3 = [
  {
    title: "Ledger",
    Svg: require("../../static/img/nakamoto.svg").default,
    description: (
      <>
        EverFastChain is a fast, cost-effective ledger that is permissionless
        and run by a decentralized set of nodes. It tracks all the ins/outs of
        the account; transaction times are five seconds, and cost per
        transaction is a fraction of a penny. With 100 independent nodes, able
        to accept delegation from others, it is a decentralized network that
        governs itself.
      </>
    ),
  },
];

function Feature3({ Svg, title, description }) {
  return (
    <div>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <H2>{title}</H2>
        <BodyMain>{description}</BodyMain>
      </div>
    </div>
  );
}

export default function Ledger() {
  return (
    <Layout title="About">
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList3.map((props, idx) => (
              <Feature3 key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
