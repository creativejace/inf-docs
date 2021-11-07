import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { BodyMain, H2 } from "./styles/TextStyles";

const FeatureList = [
  {
    title: "Digital Identity is not about technology; it is about people.",
    Svg: require("../../static/img/fingerprint.svg").default,
    description: (
      <>
        The INF is a non-profit foundation reshaping centralized, federated and
        credential sharing paradigms into a model based on user control and
        sovereignty. Not reliant on a centralized databases to be the source of
        truth, users and businesses can create biometrically-verified identities
        that they control, only they can view, and ultimately empower them to
        verify they are who they say they are. The identity network is based on
        the Principles of Identification for Sustainable Development to expand
        access, user privacy and fundamental rights to everyone.
      </>
    ),
  },
  {
    title: "“Bank Account” for Everyone",
    Svg: require("../../static/img/savings.svg").default,
    description: (
      <>
        Every user receives an account with their identity. That account can
        store digitized money, documents and credentials, which empowers users
        to control their future. It also has access to financial services
        through partnerships, like payments, international remittances,
        buy/sell/trade digital assets, savings, etc. Additionally, once
        registered, users don’t need a device to access their account…..show up
        with the shirt on their back to an agent with a simple smartphone to
        access their account.
      </>
    ),
  },
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
  {
    title: "INF DAO GOVERNANCE",
    Svg: require("../../static/img/voting.svg").default,
    description: (
      <>
        The INF is a non-profit organization that leverages concepts from
        decentralized autonomous organizations (DAOs) to ensure that no
        centralized entity or person can access a user’s identity or account,
        thus ensuring that a global identity creation and verification network
        is secure and available in perpetuity. The DAO is organized to be
        self-funding based on the transactions processed over EverFastChain.
        That is, a percentage of the fees will be used to pay for the storage,
        bandwidth, and infrastructure to house identities and accounts in
        distributed storage around the planet. The architecture, intellectual
        property and infrastructure was initially developed by Everest, which
        also supplies ongoing support and maintenance. Since “identity” requires
        recourse (i.e. in case of a catastrophic hack or a user’s loss of facial
        or other biometrics), multiple, different keyholders can come together
        to fix such issues or release software that could jeopardize the
        security of the DAO. The INF’s keyholders are drawn from internationally
        and regionally recognized international organizations, NGOs, IGOs and
        philanthropic organizations who are aligned with the Principles of
        Identity for SDG; additionally, Everest holds two keys. Critical to this
        governance is that not a single entity, including the INF, Everest or
        any other organization, can open, change or alter any part of a user’s
        identity or account. As such, users are guaranteed (via code, not law)
        that their identities are private, secure, and lasting forever.
        Similarly, the EverFastChain network is governed by Validators, which,
        in addition to processing transactions across a permissionless network,
        vote on pricing of basic services, transaction burn percentage, and
        validator rewards, among other potential initiatives.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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

export default function Section() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
