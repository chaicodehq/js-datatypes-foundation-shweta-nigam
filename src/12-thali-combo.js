/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search if(karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here
  const { name, items, price, isVeg } = thali;
  if (
    typeof name !== "string" ||
    !Array.isArray(items) ||
    typeof price !== "number" ||
    typeof isVeg !== "boolean" ||
    thali === null ||
    typeof thali !== "object"
  ) {
    return ""
  }
  let vegStatus = isVeg
  if(isVeg){
vegStatus = "Veg"
  } else {
    vegStatus = "Non-Veg"
  }

  return `${name.toUpperCase()} (${vegStatus}) - Items: ${items.join(", ")} - Rs.${price.toFixed(2)}`
}

export function getThaliStats(thalis) {
  // Your code here
if(!Array.isArray(thalis) || thalis.length === 0){
  return null
}

 let vegAndNonVeg = thalis.filter( thali => thali.isVeg)

}

export function searchThaliMenu(thalis, query) {
  // Your code here
  if(!Array.isArray(thalis) || thalis.length === 0 || typeof query !== "string"){
  return []
}
 return thalis.filter(thali => 
    thali.name.lowerCase() === thali.query.lowerCase() ||
    thali.items.includes(query)
  )
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
   if(!Array.isArray(thalis) || thalis.length === 0 || typeof customerName !== "string"){
  return ""
}
thalis.map(thali => 
 `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${thali.name} x Rs.${thali.price}\n---\nTotal: Rs.{total}\nItems: {count}`
).reduce()
}
