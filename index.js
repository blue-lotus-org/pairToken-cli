import { requset } from "./api/request.js";
import { table } from "table";

const requsts = [
  {
    token: "WBNB",
    pair: "USDC",
    type: "byname",
    chain: "solana",
  },
];

const configTable = {
  border: {
    topBody: `─`,
    topJoin: `┬`,
    topLeft: `┌`,
    topRight: `┐`,

    bottomBody: `─`,
    bottomJoin: `┴`,
    bottomLeft: `└`,
    bottomRight: `┘`,

    bodyLeft: `│`,
    bodyRight: `│`,
    bodyJoin: `│`,

    joinBody: `─`,
    joinLeft: `├`,
    joinRight: `┤`,
    joinJoin: `┼`,
  },
};

async function main() {

  console.log("Loading...")
  setInterval(sendRequest,5000)

}


async function sendRequest() {
  const request = new requset();
  const requestsData = []
  for (const item of requsts) {
    const data = await request.getToken(item.token,item.pair);
    const filter = data.pairs[0];

    requestsData.push(filter)
    
  }
  createTable(requestsData)
}


function createTable(data) {

  const tableArray = [
    ["name", "chain", "price", "m5", "h1", "h6", "h24", "Date"],
  ];

  for (const item of data) {
    tableArray.push([
      item.baseToken.symbol,
      item.chainId,
      item.priceUsd,
      item.priceChange.m5,
      item.priceChange.h1,
      item.priceChange.h6,
      item.priceChange.h24,
      new Date(item.pairCreatedAt),
    ]);
  }
  console.clear();
  console.log(table(tableArray, configTable));
}

main();
