const authUser = JSON.parse(localStorage.getItem("authUser"))
if (authUser)
    document.getElementById('welcome').innerText = `Welcome ${authUser.fullname}`
document.getElementById('email').innerText = authUser.email
document.getElementById('fullName').innerText = authUser.fullname
document.getElementById('country').innerText = authUser.country
document.getElementById('birthdate').innerText = authUser.birthdate
document.getElementById('profile').innerText = authUser.fullname.onclick =()=>{}