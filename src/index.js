const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', function(e) {
  e.preventDefault();
  const profile = document.getElementById('profile_picture');
  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const postCode = document.getElementById('postcode');
  const phone = document.getElementById('phone');
  const cell = document.getElementById('cell');
  const dob = document.getElementById('date_of_birth');

  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      const person = data.results[0]
      profile.src = person.picture.large
      fullName.innerText = `${person.name.first} ${person.name.last}`
      email.innerText = person.email
      street.innerText = person.location.street
      city.innerText = person.location.city
      state.innerText = person.location.state
      postCode.innerText = person.location.postcode
      phone.innerText = person.phone
      cell.innerText = person.cell
      dob.innerText = person.dob
    })

})
