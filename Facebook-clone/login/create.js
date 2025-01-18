

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const daySelect = document.getElementById('day');
for (let i= 1; i<= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  if (i === currentDay) {
    option.selected = true;
  }
  daySelect.appendChild(option);
}

const monthSelect = document.getElementById('month');
const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
months.forEach((month, index) => {
  const option = document.createElement('option');
  option.value = index + 1;
  option.textContent = month;
  if (index + 1 === currentMonth) {
    option.selected = true;
  }
  monthSelect.appendChild(option);
});

const yearSelect = document.getElementById('year');
for (let y = currentYear; y >= 1900; y--) {
  const option = document.createElement('option');
  option.value = y;
  option.textContent = y;
  if (y === currentYear) {
    option.selected = true;
  }
  yearSelect.appendChild(option);
}


/*Local storege*/

const form=document.getElementById("userForm");

form.addEventListener('submit',function(e){
   e.preventDefault();

   const day=document.getElementById('day').value;
   const year=document.getElementById('year').value
   const month=document.getElementById('month').value
   
   if(!day || !month || !year){
    alert("Please select a valid date of birth!");
    return;
   }
   const dob=`${day.padStart(2,"0")}-${month.padStart(2,"0")}-${year}`
   
  
   
   const selectedGender = document.querySelector('input[name="gender"]:checked');
   if (!selectedGender) {
    alert("Please select a gender!");
    return;
  }
  
  
  const contact =document.getElementById("contactInput").value.trim();
  const password=document.getElementById("passwordInput").value.trim();
  if (!contact || !password) {
    alert("Please fill in both fields!");
    return;
}


   const user={
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    birth:dob,
    gender:selectedGender.value,
    contact:contact,
    password:password,
  
   }
   
   let users = JSON.parse(localStorage.getItem("users")) || [];
   users.push(user);

   localStorage.setItem("users",JSON.stringify(users))

   alert("User data saved in local storage!");

  console.log("Saved User:", JSON.parse(localStorage.getItem("users")));
});

/*login page*/
