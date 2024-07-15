export default function ageNow(today, birth, death) {
  let age = "";
  if (death !== null) {
    age = death.getFullYear() - birth.getFullYear();
    age = death.getMonth() < birth.getMonth() ? age - 1 : age;
  } else {
    age = today.getFullYear() - birth.getFullYear();
    age = today.getMonth() < birth.getMonth() ? age - 1 : age;
  }
  return age;
}
