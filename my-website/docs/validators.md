---
sidebar_position: 2
---

# Validators

Any amount of ID allows a holder to be a Delegator. Once a holder has pledged their holdings by Staking them while identifying their chosen Validator or the Validator Pool, they will then participate and earn rewards distributed by the Validator to their Delegators, or pro-rata from the Validator Pool commons. Validators are network participants that, in addition to running a full EverFastChain node, listen to transactions broadcasted in the network's mempool and include them in blocks that they sign. For more details on Validators, refer to the [EverFastChain Validator FAQ](/docs/validator-faq) and [EverFastChainValidator registration request form](https://docs.google.com/forms/d/1zzj6LWe7TTv1su1RPas5tCObpvUW2CILIhE-7ehSJOA/prefill).
In order to do so and reliably to meet the scalability, security, and finality requirements of the network, Validators typically run specially configured architectures that are robust against many forms of attacks on distributed networks or leverage service organizations which provide equivalent hardware as commodity cloud infrastructure to host their node. No validator will be able to vote more than 10% of the network power, and validators are prohibited from colluding. The policies described here can change, as determined by the INF board.
Validators play a central role in the EverFastChain’s consensus, which is modeled after Ethereum and BSC. For more detailed information on the validator’s role, please refer to the [official documentation](/docs/validator-faq).

## Delegators

ID holders who do not have sufficient ID to stake their tokens as a Validator, can delegate their IDs to a Validator or the Validator Pool. This allows normal ID holders who don't want to set up a validator node to participate in staking rewards. A Validator must have at least 300,000 ID to stake for their node, however, Delegators may choose a Validator who will steward their ID Tokens, increasing the total amount of the ID Token on that Validator Node. The Validator Pool is for those who do not yet have validator affinity, and who still want to participate, and is evenly spread across the top 100 Validators by total stake. For example the top Validator has put up his 300,000 ID, and 15 Delegators have pledged 125,000 ID more, so he is 425,000 ID. The Validator Pool has a total of 402,421 ID tokens in it, or 4,024 - so the top Validator would have 429,024 total ID staked.

A validator's voting power is proportional to the amount of ID they have put into a Vault, from all delegations (including their self-delegation). Only the top 100 Validators in voting power (with associated amount of ID) comprise the validating set. Delegators play a vital role in this ecosystem because they determine which Validators receive the designation of candidate, by voting to delegate their ID.

## Mechanics

Running a validator is a big responsibility, which is why only the top 100 in Vaulted ID stake are the candidates to sign blocks. Validators and Delegators earn rewards based on the minimum time they commit to a staking Vault. Each of the 100 Vaults equates to running one of the validating nodes.

| User Identity + Wallet (creation)               |
| ----------------------------------------------- |
|                                                 |
| Org Identity + Wallet + API per year (creation) |
| 2-10 users                                      |
| 11-100 users ($3.00/user/year)                  |
| 101-250 ($2.50/user/year)                       |
| 251-500 ($2.25/user/year)                       |
| 501+ users = custom                             |
| Additional TIME                                 |
| Additional STORAGE                              |
| ID Verification (human & unique)                |
| EverFASTChain transactions                      |
| Stakers/Validators                              |

The 21 Validators who sign blocks are randomly chosen every 24 hours from the pool of 100 Validators. Those Validator nodes not online for the entirety of the previous hour prior to the cutover will not be eligible to be chosen for the 21 signers. Additional detail can be found [here](/docs/validator-faq).

Every seven days up to 100 “Active Validators” are chosen from all validator candidates based on the total amount of the ID they have staked on their node. The amount of staked ID is the combination of the Validator’s pledge stake (300,000), the Delegators’ additional pledges, as well as the pro-rata percentage of the Validator Pool.  
The selection of the 100 Active Validator nodes includes the following requirements for uptime and availability: a validator candidate will not be eligible if their node is:

- offline for any 24 hour period in the 7 days preceding the selection day
- fails to sign a designated block
- drops any transaction when a signer

The list of the "Active Validators"starts sequentially ordered by the amount of ID the validator has staked. That list is then randomly reordered, and the 21 signers chosen as the first 21 entries in the randomly reordered list. Those “Active Validators” who are not chosen to be signers are the hot-spares for the 21 signers and are expected to swap in for a signers who goes offline in the order they were randomly sorted in (e.g. #22 would be the first alternate).

The minimum number of validator nodes to operate the network are 21, all additional nodes are hot spares, available for traffic if needed. The 21 signers are chosen from the rank-ordered list of those validator candidates who have the most ID staked every 24 hours; that rank-ordered list is refreshed every 7 days.
For Delegators, staking ID can be a rewarding activity. However, as explained above, it should not be treated as a passive activity - Delegators should apply due diligence and have confidence in the Validator, or participate in the Validator Pool.

## Identity Network Proposal (INP)

Validators get to make proposals to the collective organization, and can by default represent Delegators. The method of submitting proposals will be through a website, and the voting will take into consideration the relative stake of each entity. The greater the stake, the more voting power is attained. The governable INF Proposals (INPs) will include (a) pricing of basic services, (b) percentage fee charged (c) reward percentage and (d) burning %.

The cycle of Proposals is quarterly, meaning that at the beginning of every calendar quarter there will be a new set of proposals to consider. Proposals that are not advanced during the quarter are discarded. Any Validator can re-propose a Proposal and get it seconded again to get another attempt to be chosen. Proposals may be created and queued from the 15th of the previous month to the beginning of the quarter. There are no limitations on the number or length of the proposal, however, proposals which do not include an EverID profile for the proposing Validator will not be considered.
