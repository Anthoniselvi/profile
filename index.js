async function getUser() {
  let response = await fetch("user.json");
  let user = await response.json();
  console.log(user);
  return user;
}

function displayUser(user) {
  document.body.innerHTML = `
    <div class="user-profile">
        <div class="user-profile-header">
            <div>${user.name}</div>
            <div>${user.username}</div>
        </div>
        
        <div class="user-profile-company">
            <div>Company: ${user.company.name}</div>
            <div>Company: ${user.company.catchPhrase}</div>
            <div>Company: ${user.company.bs}</div>
        </div>
        
        <div class="user-profile-contact">
            <div>📧${user.email}</div>
            <div>📞${user.phone}</div>
            <div>💻${user.website}</div>
        </div>

        <div class="user-profile-address">
            <div>${user.address.street}, ${user.address.suite}</div>
            <div>${user.address.city} ${user.address.zipcode}</div>
        </div>
    </div>        
        `;
}

getUser().then(displayUser);
