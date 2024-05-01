import Airtable from "airtable";

const base = new Airtable({
  apiKey:
    process.env.REACT_APP_AIRTABLE_API_KEY ||
    "patcCul35joA32wkq.1e3d3404c5e61b07e1dac3f8b17fef40214134b956d7ec816ad69ee19bb92607",
}).base("app6EMjjEiCryWz4Q");
let customer = null;

// export default async function getCustomer() {
//   return new Promise((resolve, reject) => {
//     base("Customers")
//       .select()
//       .all(function page(err, records) {
//         console.log({ err, records });
//         if (err) reject(err);

//         if (!records) {
//           reject("No records found");

//           return;
//         }

//         // save the fetches records in a local variable
//         // will be useful later
//         customer = records;

//         resolve(records);
//       });
//   });
// }

const getCustomer = async () => {
  const records = await base("Customers").select().all();
  customer = records;
  return records;
};

export default getCustomer;
