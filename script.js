const userList = document.getElementById("userList");
const loading = document.getElementById("loading");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (res) {
    return res.json();
  })
  .then(function (users) {
    loading.style.display = "none";

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow p-4";

      const name = document.createElement("h2");
      name.textContent = user.name;
      name.className = "font-bold text-lg";

      const email = document.createElement("p");
      email.textContent = "ایمیل: " + user.email;
      email.className = "text-gray-600";

      const phone = document.createElement("p");
      phone.textContent = "تلفن: " + user.phone;
      phone.className = "text-gray-600";

      const company = document.createElement("p");
      company.textContent = "شرکت: " + user.company.name;
      company.className = "text-gray-600";

      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(phone);
      card.appendChild(company);

      userList.appendChild(card);
    }
  })
  .catch(function (error) {
    loading.textContent = "خطا در گرفتن اطلاعات!";
    console.log(error);
  });
