(function () {
  var BIRTH_DATE = new Date(1988, 10, 2); // November 2, 1988

  function calculateAge(birthDate, today) {
    var age = today.getFullYear() - birthDate.getFullYear();
    var hadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hadBirthdayThisYear) age -= 1;
    return age;
  }

  var today = new Date();

  var ageEl = document.getElementById('age');
  if (ageEl) ageEl.textContent = calculateAge(BIRTH_DATE, today);

  var yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = today.getFullYear();
})();
