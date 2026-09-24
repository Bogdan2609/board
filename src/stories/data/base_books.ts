import type { BookEvent } from '../../game/typesBookEvent';

/** 50 independent JCA 6x6 padded BOOKS for Storybook ONLY.
 * All visual amounts are synthetic UI test values, NOT math/RGS payouts.
 * Each reel has 8 entries: hidden top + six visible + hidden bottom.
 * Previously checked-in 6x5 books MUST NOT be reused as paid outcomes.
 */
type JcaVisualBook = { id: number; qaOnly: true; events: BookEvent[] };

// BASE: 50 authored-looking, deterministic and internally consistent visual fixtures.
export default [
  {
    "id": 1,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 150,
        "wins": [
          {
            "symbol": "L3",
            "win": 150,
            "positions": [
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 150,
              "overlay": {
                "reel": 1,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 150
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 150,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 150
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 150
      }
    ]
  },
  {
    "id": 2,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 205,
        "wins": [
          {
            "symbol": "H5",
            "win": 205,
            "positions": [
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 205,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 205
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 205,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 205
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 205
      }
    ]
  },
  {
    "id": 3,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 120,
        "wins": [
          {
            "symbol": "L1",
            "win": 120,
            "positions": [
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 4,
                "row": 5
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              },
              {
                "reel": 5,
                "row": 5
              },
              {
                "reel": 5,
                "row": 6
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 120,
              "overlay": {
                "reel": 3,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 120
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 4,
            "row": 5
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          },
          {
            "reel": 5,
            "row": 5
          },
          {
            "reel": 5,
            "row": 6
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 120,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 120
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 120
      }
    ]
  },
  {
    "id": 4,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "L1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 120,
        "wins": [
          {
            "symbol": "L1",
            "win": 120,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 120,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 120
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 120,
          "boardMult": 5,
          "totalWin": 600
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 600
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 600,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 600
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 600
      }
    ]
  },
  {
    "id": 5,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 240,
        "wins": [
          {
            "symbol": "L3",
            "win": 240,
            "positions": [
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 5
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 1,
                "row": 5
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 4,
                "row": 5
              },
              {
                "reel": 4,
                "row": 6
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 240,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 240
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 5
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 1,
            "row": 5
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 4,
            "row": 5
          },
          {
            "reel": 4,
            "row": 6
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 240,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 240
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 240
      }
    ]
  },
  {
    "id": 6,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H5",
            "win": 85,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 1,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 85
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 185,
        "wins": [
          {
            "symbol": "H4",
            "win": 185,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 185,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 270
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 7,
        "type": "setWin",
        "amount": 270,
        "winLevel": 2
      },
      {
        "index": 8,
        "type": "setTotalWin",
        "amount": 270
      },
      {
        "index": 9,
        "type": "finalWin",
        "amount": 270
      }
    ]
  },
  {
    "id": 7,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 8,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H5",
            "win": 85,
            "positions": [
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 4,
                "row": 5
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              },
              {
                "reel": 5,
                "row": 5
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 3,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 85
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 4,
            "row": 5
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          },
          {
            "reel": 5,
            "row": 5
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 85,
          "boardMult": 5,
          "totalWin": 425
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 425
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 425,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 425
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 425
      }
    ]
  },
  {
    "id": 9,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 150,
        "wins": [
          {
            "symbol": "L4",
            "win": 150,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 150,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 150
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 150,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 150
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 150
      }
    ]
  },
  {
    "id": 10,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 80,
        "wins": [
          {
            "symbol": "L1",
            "win": 80,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 80,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 80
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 80,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 80
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 80
      }
    ]
  },
  {
    "id": 11,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 150,
        "wins": [
          {
            "symbol": "L1",
            "win": 150,
            "positions": [
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 0,
                "row": 5
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 150,
              "overlay": {
                "reel": 1,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 150
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 0,
            "row": 5
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 150,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 150
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 150
      }
    ]
  },
  {
    "id": 12,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 185,
        "wins": [
          {
            "symbol": "H1",
            "win": 185,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 185,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 185
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 90,
        "wins": [
          {
            "symbol": "L2",
            "win": 90,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 5,
                "row": 1
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 90,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 275
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 5,
            "row": 1
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H4"
            }
          ]
        ]
      },
      {
        "index": 7,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 275,
          "boardMult": 5,
          "totalWin": 1375
        }
      },
      {
        "index": 8,
        "type": "updateTumbleWin",
        "amount": 1375
      },
      {
        "index": 9,
        "type": "setWin",
        "amount": 1375,
        "winLevel": 4
      },
      {
        "index": 10,
        "type": "setTotalWin",
        "amount": 1375
      },
      {
        "index": 11,
        "type": "finalWin",
        "amount": 1375
      }
    ]
  },
  {
    "id": 13,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 120,
        "wins": [
          {
            "symbol": "L4",
            "win": 120,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 120,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 120
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 120,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 120
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 120
      }
    ]
  },
  {
    "id": 14,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 15,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 205,
        "wins": [
          {
            "symbol": "H4",
            "win": 205,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 205,
              "overlay": {
                "reel": 2,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 205
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 205,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 205
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 205
      }
    ]
  },
  {
    "id": 16,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H5",
            "win": 85,
            "positions": [
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 3,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 85
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 85,
          "boardMult": 5,
          "totalWin": 425
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 425
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 425,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 425
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 425
      }
    ]
  },
  {
    "id": 17,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 100,
        "wins": [
          {
            "symbol": "L2",
            "win": 100,
            "positions": [
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 2,
                "row": 6
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 4,
                "row": 5
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              },
              {
                "reel": 5,
                "row": 5
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 100,
              "overlay": {
                "reel": 3,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 100
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 2,
            "row": 6
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 4,
            "row": 5
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          },
          {
            "reel": 5,
            "row": 5
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 100,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 100
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 100
      }
    ]
  },
  {
    "id": 18,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 205,
        "wins": [
          {
            "symbol": "H2",
            "win": 205,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 205,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 205
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 125,
        "wins": [
          {
            "symbol": "H4",
            "win": 125,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 125,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 330
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          []
        ]
      },
      {
        "index": 7,
        "type": "setWin",
        "amount": 330,
        "winLevel": 3
      },
      {
        "index": 8,
        "type": "setTotalWin",
        "amount": 330
      },
      {
        "index": 9,
        "type": "finalWin",
        "amount": 330
      }
    ]
  },
  {
    "id": 19,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 80,
        "wins": [
          {
            "symbol": "L4",
            "win": 80,
            "positions": [
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 80,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 80
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 80,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 80
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 80
      }
    ]
  },
  {
    "id": 20,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 180,
        "wins": [
          {
            "symbol": "L4",
            "win": 180,
            "positions": [
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 180,
              "overlay": {
                "reel": 3,
                "row": 1
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 180
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 180,
          "boardMult": 5,
          "totalWin": 900
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 900
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 900,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 900
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 900
      }
    ]
  },
  {
    "id": 21,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 22,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 125,
        "wins": [
          {
            "symbol": "H4",
            "win": 125,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 125,
              "overlay": {
                "reel": 1,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 125
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 125,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 125
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 125
      }
    ]
  },
  {
    "id": 23,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 110,
        "wins": [
          {
            "symbol": "L2",
            "win": 110,
            "positions": [
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 110,
              "overlay": {
                "reel": 3,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 110
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 110,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 110
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 110
      }
    ]
  },
  {
    "id": 24,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 100,
        "wins": [
          {
            "symbol": "L4",
            "win": 100,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 100,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 100
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H4",
            "win": 85,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 2,
                "row": 1
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 185
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ],
          []
        ]
      },
      {
        "index": 7,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 185,
          "boardMult": 5,
          "totalWin": 925
        }
      },
      {
        "index": 8,
        "type": "updateTumbleWin",
        "amount": 925
      },
      {
        "index": 9,
        "type": "setWin",
        "amount": 925,
        "winLevel": 3
      },
      {
        "index": 10,
        "type": "setTotalWin",
        "amount": 925
      },
      {
        "index": 11,
        "type": "finalWin",
        "amount": 925
      }
    ]
  },
  {
    "id": 25,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 105,
        "wins": [
          {
            "symbol": "H4",
            "win": 105,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 105,
              "overlay": {
                "reel": 1,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 105
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 105,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 105
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 105
      }
    ]
  },
  {
    "id": 26,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 100,
        "wins": [
          {
            "symbol": "L2",
            "win": 100,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 100,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 100
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 2
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H4"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 100,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 100
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 100
      }
    ]
  },
  {
    "id": 27,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H4",
            "win": 85,
            "positions": [
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 85
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H2"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 85,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 85
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 85
      }
    ]
  },
  {
    "id": 28,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 29,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 245,
        "wins": [
          {
            "symbol": "H2",
            "win": 245,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 245,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 245
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 245,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 245
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 245
      }
    ]
  },
  {
    "id": 30,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 125,
        "wins": [
          {
            "symbol": "H4",
            "win": 125,
            "positions": [
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 125,
              "overlay": {
                "reel": 3,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 125
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 180,
        "wins": [
          {
            "symbol": "L2",
            "win": 180,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 180,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 305
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ]
        ]
      },
      {
        "index": 7,
        "type": "setWin",
        "amount": 305,
        "winLevel": 3
      },
      {
        "index": 8,
        "type": "setTotalWin",
        "amount": 305
      },
      {
        "index": 9,
        "type": "finalWin",
        "amount": 305
      }
    ]
  },
  {
    "id": 31,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 155,
        "wins": [
          {
            "symbol": "H1",
            "win": 155,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 155,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 155
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 155,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 155
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 155
      }
    ]
  },
  {
    "id": 32,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 245,
        "wins": [
          {
            "symbol": "H1",
            "win": 245,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 245,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 245
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 245,
          "boardMult": 5,
          "totalWin": 1225
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 1225
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 1225,
        "winLevel": 4
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 1225
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 1225
      }
    ]
  },
  {
    "id": 33,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 120,
        "wins": [
          {
            "symbol": "L2",
            "win": 120,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 120,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 120
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 120,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 120
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 120
      }
    ]
  },
  {
    "id": 34,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 100,
        "wins": [
          {
            "symbol": "L1",
            "win": 100,
            "positions": [
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 100,
              "overlay": {
                "reel": 3,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 100
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 100,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 100
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 100
      }
    ]
  },
  {
    "id": 35,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 36,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "L1"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 240,
        "wins": [
          {
            "symbol": "L4",
            "win": 240,
            "positions": [
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 1
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 240,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 240
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 1
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L1"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 125,
        "wins": [
          {
            "symbol": "H4",
            "win": 125,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 125,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 365
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          []
        ]
      },
      {
        "index": 7,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 365,
          "boardMult": 5,
          "totalWin": 1825
        }
      },
      {
        "index": 8,
        "type": "updateTumbleWin",
        "amount": 1825
      },
      {
        "index": 9,
        "type": "setWin",
        "amount": 1825,
        "winLevel": 4
      },
      {
        "index": 10,
        "type": "setTotalWin",
        "amount": 1825
      },
      {
        "index": 11,
        "type": "finalWin",
        "amount": 1825
      }
    ]
  },
  {
    "id": 37,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 245,
        "wins": [
          {
            "symbol": "H3",
            "win": 245,
            "positions": [
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 2,
                "row": 5
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 245,
              "overlay": {
                "reel": 3,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 245
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 2,
            "row": 5
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 245,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 245
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 245
      }
    ]
  },
  {
    "id": 38,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 200,
        "wins": [
          {
            "symbol": "L1",
            "win": 200,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 200,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 200
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 200,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 200
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 200
      }
    ]
  },
  {
    "id": 39,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 240,
        "wins": [
          {
            "symbol": "L1",
            "win": 240,
            "positions": [
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 240,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 240
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H5"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 240,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 240
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 240
      }
    ]
  },
  {
    "id": 40,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 155,
        "wins": [
          {
            "symbol": "H3",
            "win": 155,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 155,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 155
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 155,
          "boardMult": 5,
          "totalWin": 775
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 775
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 775,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 775
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 775
      }
    ]
  },
  {
    "id": 41,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 185,
        "wins": [
          {
            "symbol": "H1",
            "win": 185,
            "positions": [
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 2
              },
              {
                "reel": 5,
                "row": 3
              },
              {
                "reel": 5,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 185,
              "overlay": {
                "reel": 3,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 185
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 2
          },
          {
            "reel": 5,
            "row": 3
          },
          {
            "reel": 5,
            "row": 4
          }
        ],
        "newSymbols": [
          [],
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 185,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 185
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 185
      }
    ]
  },
  {
    "id": 42,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 43,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 80,
        "wins": [
          {
            "symbol": "L1",
            "win": 80,
            "positions": [
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 4,
                "row": 4
              },
              {
                "reel": 5,
                "row": 3
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 80,
              "overlay": {
                "reel": 2,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 80
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 4,
            "row": 4
          },
          {
            "reel": 5,
            "row": 3
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 80,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 80
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 80
      }
    ]
  },
  {
    "id": 44,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 110,
        "wins": [
          {
            "symbol": "L4",
            "win": 110,
            "positions": [
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 110,
              "overlay": {
                "reel": 1,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 110
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L1"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 110,
          "boardMult": 5,
          "totalWin": 550
        }
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 550
      },
      {
        "index": 6,
        "type": "setWin",
        "amount": 550,
        "winLevel": 3
      },
      {
        "index": 7,
        "type": "setTotalWin",
        "amount": 550
      },
      {
        "index": 8,
        "type": "finalWin",
        "amount": 550
      }
    ]
  },
  {
    "id": 45,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H3"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H3",
            "win": 85,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 4,
                "row": 3
              },
              {
                "reel": 5,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 85
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 4,
            "row": 3
          },
          {
            "reel": 5,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "L1"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H2"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 85,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 85
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 85
      }
    ]
  },
  {
    "id": 46,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 95,
        "wins": [
          {
            "symbol": "H2",
            "win": 95,
            "positions": [
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 95,
              "overlay": {
                "reel": 2,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 95
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          }
        ],
        "newSymbols": [
          [],
          [
            {
              "name": "H4"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 95,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 95
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 95
      }
    ]
  },
  {
    "id": 47,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 205,
        "wins": [
          {
            "symbol": "H3",
            "win": 205,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 4,
                "row": 1
              },
              {
                "reel": 4,
                "row": 2
              },
              {
                "reel": 5,
                "row": 1
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 205,
              "overlay": {
                "reel": 1,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 205
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 4,
            "row": 1
          },
          {
            "reel": 4,
            "row": 2
          },
          {
            "reel": 5,
            "row": 1
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 205,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 205
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 205
      }
    ]
  },
  {
    "id": 48,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L2"
            },
            {
              "name": "L2"
            },
            {
              "name": "M",
              "multiplier": 5
            },
            {
              "name": "H5"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 100,
        "wins": [
          {
            "symbol": "L2",
            "win": 100,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              },
              {
                "reel": 3,
                "row": 5
              },
              {
                "reel": 4,
                "row": 5
              },
              {
                "reel": 5,
                "row": 4
              },
              {
                "reel": 5,
                "row": 5
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 100,
              "overlay": {
                "reel": 1,
                "row": 4
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 100
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          },
          {
            "reel": 3,
            "row": 5
          },
          {
            "reel": 4,
            "row": 5
          },
          {
            "reel": 5,
            "row": 4
          },
          {
            "reel": 5,
            "row": 5
          }
        ],
        "newSymbols": [
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "H3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            }
          ]
        ]
      },
      {
        "index": 4,
        "type": "winInfo",
        "totalWin": 85,
        "wins": [
          {
            "symbol": "H1",
            "win": 85,
            "positions": [
              {
                "reel": 0,
                "row": 1
              },
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 1,
                "row": 1
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 2,
                "row": 1
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 3,
                "row": 1
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 4,
                "row": 1
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 85,
              "overlay": {
                "reel": 1,
                "row": 2
              }
            }
          }
        ]
      },
      {
        "index": 5,
        "type": "updateTumbleWin",
        "amount": 185
      },
      {
        "index": 6,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 1
          },
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 1,
            "row": 1
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 2,
            "row": 1
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 3,
            "row": 1
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 4,
            "row": 1
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H4"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H1"
            }
          ],
          [
            {
              "name": "L1"
            }
          ],
          []
        ]
      },
      {
        "index": 7,
        "type": "boardMultiplierInfo",
        "multInfo": {
          "positions": [
            {
              "reel": 5,
              "row": 6,
              "multiplier": 5
            }
          ]
        },
        "winInfo": {
          "tumbleWin": 185,
          "boardMult": 5,
          "totalWin": 925
        }
      },
      {
        "index": 8,
        "type": "updateTumbleWin",
        "amount": 925
      },
      {
        "index": 9,
        "type": "setWin",
        "amount": 925,
        "winLevel": 3
      },
      {
        "index": 10,
        "type": "setTotalWin",
        "amount": 925
      },
      {
        "index": 11,
        "type": "finalWin",
        "amount": 925
      }
    ]
  },
  {
    "id": 49,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "S",
              "scatter": true
            },
            {
              "name": "L3"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L4"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H2"
            }
          ],
          [
            {
              "name": "L3"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "setTotalWin",
        "amount": 0
      },
      {
        "index": 2,
        "type": "finalWin",
        "amount": 0
      }
    ]
  },
  {
    "id": 50,
    "qaOnly": true,
    "events": [
      {
        "index": 0,
        "type": "reveal",
        "board": [
          [
            {
              "name": "H5"
            },
            {
              "name": "L4"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "H5"
            },
            {
              "name": "L2"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H2"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H5"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H5"
            },
            {
              "name": "L2"
            }
          ],
          [
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "L1"
            },
            {
              "name": "H1"
            },
            {
              "name": "H2"
            },
            {
              "name": "H2"
            },
            {
              "name": "H3"
            },
            {
              "name": "H2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H5"
            }
          ],
          [
            {
              "name": "H4"
            },
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "L3"
            },
            {
              "name": "L2"
            },
            {
              "name": "H5"
            },
            {
              "name": "H5"
            },
            {
              "name": "L3"
            }
          ]
        ],
        "paddingPositions": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "anticipation": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "gameType": "basegame"
      },
      {
        "index": 1,
        "type": "winInfo",
        "totalWin": 240,
        "wins": [
          {
            "symbol": "L1",
            "win": 240,
            "positions": [
              {
                "reel": 0,
                "row": 2
              },
              {
                "reel": 0,
                "row": 3
              },
              {
                "reel": 0,
                "row": 4
              },
              {
                "reel": 1,
                "row": 2
              },
              {
                "reel": 1,
                "row": 3
              },
              {
                "reel": 1,
                "row": 4
              },
              {
                "reel": 2,
                "row": 2
              },
              {
                "reel": 2,
                "row": 3
              },
              {
                "reel": 2,
                "row": 4
              },
              {
                "reel": 3,
                "row": 2
              },
              {
                "reel": 3,
                "row": 3
              },
              {
                "reel": 3,
                "row": 4
              }
            ],
            "meta": {
              "globalMult": 1,
              "clusterMult": 1,
              "winWithoutMult": 240,
              "overlay": {
                "reel": 1,
                "row": 3
              }
            }
          }
        ]
      },
      {
        "index": 2,
        "type": "updateTumbleWin",
        "amount": 240
      },
      {
        "index": 3,
        "type": "tumbleBoard",
        "explodingSymbols": [
          {
            "reel": 0,
            "row": 2
          },
          {
            "reel": 0,
            "row": 3
          },
          {
            "reel": 0,
            "row": 4
          },
          {
            "reel": 1,
            "row": 2
          },
          {
            "reel": 1,
            "row": 3
          },
          {
            "reel": 1,
            "row": 4
          },
          {
            "reel": 2,
            "row": 2
          },
          {
            "reel": 2,
            "row": 3
          },
          {
            "reel": 2,
            "row": 4
          },
          {
            "reel": 3,
            "row": 2
          },
          {
            "reel": 3,
            "row": 3
          },
          {
            "reel": 3,
            "row": 4
          }
        ],
        "newSymbols": [
          [
            {
              "name": "H3"
            },
            {
              "name": "H5"
            },
            {
              "name": "L4"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "H4"
            },
            {
              "name": "H3"
            }
          ],
          [
            {
              "name": "L2"
            },
            {
              "name": "L4"
            },
            {
              "name": "H4"
            }
          ],
          [
            {
              "name": "H1"
            },
            {
              "name": "L3"
            },
            {
              "name": "H1"
            }
          ],
          [],
          []
        ]
      },
      {
        "index": 4,
        "type": "setWin",
        "amount": 240,
        "winLevel": 2
      },
      {
        "index": 5,
        "type": "setTotalWin",
        "amount": 240
      },
      {
        "index": 6,
        "type": "finalWin",
        "amount": 240
      }
    ]
  }
] as JcaVisualBook[];
