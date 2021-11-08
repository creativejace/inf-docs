---
sidebar_position: 6
---

# Iterative Proposals in INF

## What is an INP?

INP stands for Identity Network Proposal. An INP is a design document gathering information sourced from the Everest community, which describes a new feature, or a change to the platform’s processes or operating environment of the EverFastChain. The INP must include a precise technical specification of the feature as well as the reason and use-case for the feature. The INP author or team is responsible for building consensus within the community, documenting dissenting opinions, and submitting the INP to the monthly proposal queue.

## INP Process

We intend INPs to be the primary mechanism for community input, and for documenting the decisions that drove EverFastChain’s evolution. Because the INPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal of EverFastChain.
For EverFastChain implementers, INPs are a convenient way to track the progress of the evolution of the platform. Ideally each implementation maintainer would list the INPs that they have implemented into their project.

## Recommendations, Requirements, and Process

It is highly recommended that a single INP contain a single key proposal or new idea. The more focused the INP, the more successful it tends to be. A change to one client doesn’t require an INP; a change that affects multiple clients, or defines a standard for multiple apps to use, does.

An INP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.

Before you begin writing a formal INP, one should vet the idea. Ask the community first if an idea is original to avoid wasting time on something that will be rejected based on prior research. It is thus recommended to open a discussion thread on the forum to discuss this, and not to forget to review this repository and its history of transactions.

Once the idea has been vetted, one’s next responsibility will be to present (by means of an INP) the idea to the reviewers and all interested parties, invite editors, developers, and the community to give feedback on the aforementioned channels. Negative community feedback will be taken into consideration and may prevent the INP from moving past the Draft stage.

## Types of INP

Proposals types include:

- ParameterChangeProposal: a change to blockchain, functional or operational parameters
- StakingParameterChangeProposal: a change to validation, pricing, and staking parameters
- TextProposal: All other issues such as large directional changes or decisions requiring manual implementation or intervention can also be voted on by submitting a TextProposal

## INP Process

The following is the standardization process for all EPs:

**1. IDEA** - An idea that is pre-draft. This is not tracked within the INP Repository.

**2. DRAFT** - The first formally tracked stage of an INP in development. An INP is merged into the INP repository only when it is properly formatted and submitted by an INP Author.

**3. REVIEW** - An INP Author marks an INP as ready for and requesting Peer Review by issuing a pull request.

**4. LAST CALL** - This is the final review window for an INP before moving to FINAL. An INP editor will assign Last Call status and set a review end date (review-period-end), typically 14 days later.

If this period results in necessary normative changes it will revert the INP to REVIEW.

**5. FINAL** - This INP represents the final standard. A Final INP exists in a state of finality and should only be updated to correct errata and add non-normative clarifications.

## INP Special States

**STAGNANT** - Any INP in DRAFT or REVIEW if inactive for a period of 6 months or greater is moved to STAGNANT. An INP may be resurrected from this state by Authors or INP Editors through moving it back to DRAFT.
INP Authors are notified of any algorithmic change to the status of their INP

**WITHDRAWN** - The INP Author(s) have withdrawn the proposed INP. This state has finality and can no longer be resurrected using this INP number. If the idea is pursued at a later date it is considered a new proposal.

**LIVING** - A special status for INPs that are designed to be continually updated and not reach a state of finality. This includes most notably EIP-1.

## What belongs in a successful EIP?

Each INP should have the following parts:

**Preamble** - RFC 822 style headers containing metadata about the INP, including the INP number, a short descriptive title (limited to a maximum of 44 characters), a description (limited to a maximum of 140 characters), and the author details. Irrespective of the category, the title and description should not include INP number. See below for details.

**Abstract** - Abstract is a multi-sentence (short paragraph) technical summary. This should be a very terse and human-readable version of the specification section. Someone should be able to read only the abstract to get the gist of what this specification does.

**Motivation** (\*optional) - A motivation section is critical for INPs that want to change the parameter set. It should clearly explain why the existing parameters are inadequately addressing the needs of the Validators.

**Specification** - The technical specification should describe the syntax and semantics of any new feature.

**Rationale** - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.

**Backwards Compatibility** - All INPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The INP must explain how the author proposes to deal with these incompatibilities. INP submissions without a sufficient backwards compatibility treatise may be rejected outright.

**Test Cases** - Test cases for an implementation are mandatory for INPs that are affecting consensus changes. Tests should either be inlined in the INP as data (such as input/expected output pairs, or included in ../assets/eip-###/filename.

**Reference Implementation** - An optional section that contains a reference/example implementation that people can use to assist in understanding or implementing this specification.

**Security Considerations** - All INPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surface risks and can be used throughout the life-cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. INP submissions missing the “Security Considerations” section will be rejected. An INP cannot proceed to status “Final” without a Security Considerations discussion deemed sufficient by the reviewers.

**Copyright Waiver** - All INPs must be in the public domain. See the bottom of this INP for an example copyright waiver.
