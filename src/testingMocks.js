import axios from "axios";

export default function() {
  console.log("inside");
  axios.get("www.google.com");
}
