import moment from "moment";

export function formatDate(date) {
  return moment(date).format("DD MMM YYYY");
}
