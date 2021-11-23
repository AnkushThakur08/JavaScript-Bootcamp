const mystates = [
  "Delhi",
  "Himachal Pradesh",
  "Tamil Nadu",
  "Chandigarh",
  1947,
  "Assam",
  "Maharashtra",
];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (i = 0; i <= mystates.length; i++) {
  console.log(mystates[i]);
}
// console.log(mystates.length);

// TODO: FOR EACH
/* 
const mystates = [
  "Delhi",
  "Himachal Pradesh",
  "Tamil Nadu",
  "Chandigarh",
  1947,
  "Assam",
  "Maharashtra",
];

// mystates.forEach((s) => console.log(s));

// TODO: For OF

const names = ["YouTube", "Facebook", "Instagram", "Netflix", "Amazon"];

for (const n of names) {
  // console.log(n);
}

*/
// TODO: FOR IN

const symbols = {
  yt: "youtube",
  fb: "facebook",
  ig: "instagram",
  Az: "amazon",
};

for (const a in symbols) {
   console.log(symbols[a]);
  console.log(`Keys is ${a}, values is ${symbols[a]}`);
}
