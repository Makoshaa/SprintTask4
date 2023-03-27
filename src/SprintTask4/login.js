document.getElementById('form').onsubmit = () => {
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    if (email && password) {
        const users = JSON.parse(localStorage.getItem('user')) || [];
        const currentUser = users.filter(user => user.email === email && user.password === password)
        if (currentUser[0]) {
            localStorage.authUser = JSON.stringify(currentUser[0])
        }
        else {
            const error = document.getElementById('error')
            error.innerText = "wrong"
            return false
        }
    }
}