export default function ageNow(today, birth, death, deathday) {
  let age = today.getFullYear() - birth.getFullYear();
  if (deathday != null) {
    age = death.getFullYear() - birth.getFullYear();
    age = death.getMonth() < birth.getMonth() ? age - 1 : age;
    age = death.getDay() < birth.getDay() ? age - 1 : age;
  } else {
    age = today.getFullYear() - birth.getFullYear();
    age = today.getMonth() < birth.getMonth() ? age - 1 : age;
    age = today.getDay() < birth.getDay() ? age - 1 : age;
  }
  return age;
}
