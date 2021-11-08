---
sidebar_position: 7
---

# INF Initial Vote

| Synopsis | Proposal to define schema of EverFastChain |
| -------- | ------------------------------------------ |
| Status   | FINAL                                      |
| Type     | StakingParameterChangeProposal             |
| Created  | 2021-10-14                                 |

The community (initially, those with over 1,000 ID tokens in their EverWallet) will vote on `option A or B below: pricing for basic services in USD and paid in ID tokens, the fees charged in ID tokens for transaction, and the subsequent percentage that will be allocated to Validators, and the percentage of the transaction to be burned from the Staking & Rewards pool. Each identity/wallet in the initial vote will be able to vote once, and the amount of ID tokens above 1,000 is irrelevant to the weight of the vote. Validators will vote starting in Q1, 2022.

## Background

The INF has a partnership to allow those users and organizations with identities and wallets issued by the INF to access regulated financial services vis a vie Everest Network, such as the following:

- eKYC/AML
- Credential sharing
- Use of the CRDT, the licensed, programmable stablecoin
- Payments
- International remittances
- Buy, sell, trade crypto
- Lend/borrow
- SDK
- Fast API
- Reporting
- Minting & issuing NFTs
- Minting & issuing tokens to run on EverFASTChain

Such a model would look like the below, with the following assumptions: $1/ID; sample users. The PINK in the below would be drawing off of 75 million tokens in the Access Regulated Financial Services pool.

| Regulated Financial Services                                       | Sample # of Users | Fees charged in USD | Purchaser spends ID tokens | Transaction fee Burned | # of IDs distributed by Foundation to Validators |
| ------------------------------------------------------------------ | :---------------: | :-----------------: | :------------------------: | :--------------------: | :----------------------------------------------: |
| Sale of ID tokens                                                  |    75,000,000     |                     |                            |                        |                                                  |
| ID Verification (human & unique)                                   |     1,000,000     |        $0.20        |          200,000           |        100,000         |                      20,000                      |
| Credential sharing                                                 |      10,000       |        $0.50        |           5,000            |         2,500          |                       500                        |
| eKYC/AML                                                           |      10,000       |        $1.50        |         15,000.00          |        7,500.00        |                     1,500.00                     |
| Org programming of CRDTs                                           |        10         |       $25,000       |          250,000           |        125,000         |                      25,000                      |
| Org Fast API + reporting                                           |        10         |       $50,000       |          500,000           |        250,000         |                      50,000                      |
| Minting & Issuing NFTs or ERC20s                                   |         2         |      $250,000       |          500,000           |        250,000         |                      50,000                      |
| SDK with 10 year updates                                           |         1         |      $500,000       |          500,000           |        250,000         |                      50,000                      |
| Payments: none, gold, silver, platinum                             |      50,000       |        1.0%         |        2,500,000.00        |      1,250,000.00      |                     250,000                      |
| International: none, gold, silver, platinum                        |      50,000       |        1.5%         |         3,750,000          |      1,875,000.00      |                    375,000.00                    |
| Buy, Sell, Swap (mainnet LPs) crypto: none, gold, silver, platinum |      50,000       |        0.10%        |          250,000           |        125,000         |                      25,000                      |
| Earning                                                            |      50,000       |        0.10%        |          250,000           |        125,000         |                      25,000                      |
| Borrowing                                                          |      50,000       |        0.10%        |          250,000           |        125,000         |                     125,000                      |
| Buy, sell, trade on EverChain                                      |      50,000       |        0.15%        |          375,000           |       4,385,000        |                     977,000                      |
| Total                                                              |                   |                     |         9,345,000          |       8,870,000        |                    1,974,000                     |

| Allocations                        | Existing |
| ---------------------------------- | :------: |
| Circulating                        |  116.7   |
| Staking & rewards (INF)            |  183.3   |
| Identity + Wallet Creation (INF)   |   100    |
| Team                               |   125    |
| Advisors & Partners                |   125    |
| Reserve for future team & partners |    25    |
| Access for regulated services      |    75    |
| Ecosystem Dev                      |    50    |
|                                    |   800    |

## Specification

The INF will retain 10 percent of the fees for the purpose of paying for the ongoing storage and access to identities. Validators are required to stake 300,000 ID tokens, and will be remunerated on a pro rata basis based on the amount of time the stake is “vaulted” per the below:

| Reward =Percentage | Minimum amount of ID | Days/tiers |
| :----------------: | :------------------: | :--------: |
|         5%         |       300,000        |     90     |
|        12%         |       300,000        |    180     |
|        32%         |       300,000        |    365     |

### Option A:

- Pricing of basic services:

| ID tokens (5% less than market)                 |                   |                             |
| ----------------------------------------------- | ----------------- | --------------------------- |
| User Identity + Wallet (creation)               | 15,000,000,000    | FREE                        |
|                                                 |                   |                             |
| Org Identity + Wallet + API per year (creation) | Sample # of Users | Minimum Fees charged in USD |
| 2-10 users ($4.00/user/year)                    | 10                | $40                         |
| 11-100 users ($3.00/user/year)                  | 100               | $300                        |
| w/ 101-250 ($2.50/user/year)                    | 250               | $625                        |
| w/ 251-500 ($2.25/user/year)                    | 500               | $1,125                      |
| 501+ users = custom                             | 1                 | $250,000                    |
| Additional TIME                                 |                   |                             |
| Additional STORAGE                              |                   | $1                          |
| ID Verification (human & unique)                | 1,000,000         | $0.20                       |
| EverFASTChain TXN                               | 10,500,000        | $0.0002                     |
| Stakers/Validators                              | 100               | $200,000                    |

- Validators: 10%
- Transaction fee burned: 50%

A scenario with the above pricing and percentages would look like the below with the following assumptions: $1/ID; sample # of users.

| IN Foundation: Create + Verify + Chain          |       Users       | # of IDs Reqd.              |   total    |                                 |                                       |                           |
| ----------------------------------------------- | :---------------: | --------------------------- | :--------: | ------------------------------- | ------------------------------------- | ------------------------- |
| ID tokens for distribution & promotion          |                   |                             | 85,000,000 |                                 |                                       |                           |
| User Identity + Wallet (creation)               |  15,000,000,000   | 0.0010                      | 15,000,000 |                                 | APY or % of TXNs, whichever is higher |                           |
|                                                 |                   |                             |            |                                 |                                       |                           |
| Org Identity + Wallet + API per year (creation) | Sample # of Users | Minimum Fees charged in USD | Spent IDs  | # of IDs burned for Transaction | # of IDs rewarded to Validators       | # of IDs allocated to INF |
| 2-10 users ($4.00/user/year)                    |        10         | $40                         |    400     | 200                             | 40                                    | 40.00                     |
| 11-100 users ($3.00/user/year)                  |        100        | $300                        |   30,000   | 15,000                          | 3,000                                 | 3,000                     |
| w/ 101-250 ($2.50/user/year)                    |        250        | $625                        |  156,250   | 78,125                          | 15,625                                | 15,625                    |
| w/ 251-500 ($2.25/user/year)                    |        500        | $1,125                      |  562,500   | 281,250                         | 56,250                                | 56,250                    |
| 501+ users = custom                             |         1         | $250,000                    |  250,000   | 125,000                         | 25,000                                | 25,000                    |
| Additional TIME                                 |                   |                             |            | 0                               | 0                                     | 0                         |
| Additional STORAGE                              |                   | $1                          |     0      | 0                               | 0                                     | 0                         |
| ID Verification (human & unique)                |     1,000,000     | $0.20                       |  200,000   | 100,000                         | 20,000                                | 20,000                    |
| EverFASTChain TXN                               |    10,500,000     | $0.0002                     |   2,100    | 1,050                           | 210                                   | 210                       |
| Stakers/Validators                              |        100        | $200,000                    | 20,000,000 |                                 |                                       |                           |
|                                                 |                   |                             | 21,201,250 | 600,625                         | 120,125                               | 120,125                   |

### Option B:

- Pricing of basic services:

| User Identity + Wallet (creation)               |  15,000,000,000   |            FREE             |
| ----------------------------------------------- | :---------------: | :-------------------------: |
|                                                 |                   |                             |
| Org Identity + Wallet + API per year (creation) | Sample # of Users | Minimum Fees charged in USD |
| 2-10 users ($4.00/user/year)                    |        10         |             $36             |
| 11-100 users ($3.00/user/year)                  |        100        |            $250             |
| w/ 101-250 ($2.50/user/year)                    |        250        |            $500             |
| w/ 251-500 ($2.25/user/year)                    |        500        |            $875             |
| 501+ users = custom                             |         1         |          $250,000           |
| Additional TIME                                 |                   |                             |
| Additional STORAGE                              |                   |             $1              |
| ID Verification (human & unique)                |     1,000,000     |            $0.15            |
| EverFASTChain TXN                               |    10,500,000     |           $0.0001           |
| Stakers/Validators                              |        100        |          $200,000           |

- Validators: 5%
- Transaction fee burned: 60%

A scenario with the above pricing and percentages would look like the below with the following assumptions: $1/ID; sample # of users.

| IN Foundation: Create + Verify + Chain          |       Users       | # of IDs Reqd.              |   total    |                                 |                                       |                           |
| ----------------------------------------------- | :---------------: | --------------------------- | :--------: | ------------------------------- | ------------------------------------- | ------------------------- |
| ID tokens for distribution & promotion          |                   |                             | 85,000,000 |                                 |                                       |                           |
| User Identity + Wallet (creation)               |  15,000,000,000   | 0.0010                      | 15,000,000 |                                 | APY or % of TXNs, whichever is higher |                           |
|                                                 |                   |                             |            |                                 |                                       |                           |
| Org Identity + Wallet + API per year (creation) | Sample # of Users | Minimum Fees charged in USD | Spent IDs  | # of IDs burned for Transaction | # of IDs rewarded to Validators       | # of IDs allocated to INF |
| 2-10 users ($4.00/user/year)                    |        10         | $36                         |    360     | 216                             | 18                                    | 36.00                     |
| 11-100 users ($3.00/user/year)                  |        100        | $250                        |   25,000   | 15,000                          | 1,250                                 | 2,500                     |
| w/ 101-250 ($2.50/user/year)                    |        250        | $500                        |  125,000   | 75,000                          | 6,250                                 | 12,500                    |
| w/ 251-500 ($2.25/user/year)                    |        500        | $875                        |  437,500   | 262,500                         | 21,875                                | 43,750                    |
| 501+ users = custom                             |         1         | $250,000                    |  250,000   | 150,000                         | 12,500                                | 25,000                    |
| Additional TIME                                 |                   |                             |            | 0                               | 0                                     | 0                         |
| Additional STORAGE                              |                   | $1                          |     0      | 0                               | 0                                     | 0                         |
| ID Verification (human & unique)                |     1,000,000     | $0.15                       |  150,000   | 90,000                          | 7,500                                 | 15,000                    |
| EverFASTChain TXN                               |    10,500,000     | $0.0001                     |   1,050    | 630                             | 53                                    | 105                       |
| Stakers/Validators                              |        100        | $200,000                    | 20,000,000 |                                 |                                       |                           |
|                                                 |                   |                             | 20,988,910 | 593,346                         | 49,446                                | 98,891                    |
