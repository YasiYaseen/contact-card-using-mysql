
// Get references to elements
const addButton = document.getElementById('add-button');
const modal = document.getElementById('input-modal');
const editmodal = document.getElementById('edit-modal');
const closeedit = document.getElementById('close-edit');
const closeButton = document.getElementById('close-modal');
const submitButton = document.getElementById('submit-button');
let submitedit = document.getElementById('submit-edit');
const deleteButton = document.getElementById('delete-btn');
const editbutton = document.getElementById('edit-btn');
let deleteperson = document.querySelector(".delete-person");



let persons = [];
let personsList = document.querySelector(".personList");
$.ajax({
    url:"fetch.php",
    dataType:"json",
    method:"POST",
    success: function (data){
        persons = data.length > 0 ? data : [["muhammed yaseen", "6238899231"]];
        // console.log(persons);
        ShowResult();
    },
    error: function (xhr, status, error) {
        console.error(xhr.responseText);
        
    }
});
let key = 0;
function ShowResult(){
 
deleteperson.style.display = "none";

if (persons.length > 0) {
    document.getElementById('1').innerText = persons[0][0];
    document.getElementById('name').innerText = persons[0][0];
    document.getElementById('work').innerText = persons[0][1];
} else {
    console.error('No data available in the persons array');
}
sortpersons();
let currentLetter = null;
persons.forEach((person, index) => {
    if (index != 0) {
        const name = person[0];
        const firstLetter = name.charAt(0).toUpperCase();

        if (firstLetter != currentLetter) {
            currentLetter = firstLetter;
            addSeperator(currentLetter);
        }

        let li = document.createElement("li");
        li.innerText = person[0];
        li.classList.add("person");
        li.setAttribute("key", index);
        li.id=person[2];

        personsList.appendChild(li);
    }

});

}


// Function to open the modal
addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Function to close the modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';

});

 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      submitButton    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
submitButton.addEventListener('click', () => {
    let name = document.getElementById('input1').value;
    let number = document.getElementById('input2').value;
    if (name != "" && number != "") {


        let newperson = [name, number];
        persons.push(newperson);

            $.ajax({
                url: 'store.php', // Replace with your server URL
                method: 'POST', // Adjust the HTTP method as needed (e.g., POST, GET, etc.)
                data: { 
                name:name,
                number:number
                },
                dataType: 'json',
                success: function(data) {
                    alert("successfully inserted");
                },
                error: function(xhr, status, error) {
                    alert("Error");
                }
            });

        while (personsList.firstChild) {
            personsList.removeChild(personsList.firstChild);
        }
        sortpersons();
        let currentLetter = null;
        persons.forEach((person, index) => {
            if (index != 0) {
                const name = person[0];
                const firstLetter = name.charAt(0).toUpperCase();

                if (firstLetter != currentLetter) {
                    currentLetter = firstLetter;
                    addSeperator(currentLetter);
                }

                let li = document.createElement("li");
                li.innerText = person[0];
                li.classList.add("person");
                li.setAttribute("key", index);

                personsList.appendChild(li);
            }

        });


        document.getElementById('input1').value = "";
        document.getElementById('input2').value = "";
    } else {

    }
    // Close the modal
    modal.style.display = 'none';
});


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Edit >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
editbutton.addEventListener('click', () => {
    editmodal.style.display = 'block';
    document.getElementById('editname').value = persons[key][0];
    document.getElementById('editnum').value = persons[key][1];
})
closeedit.addEventListener('click', () => {
    editmodal.style.display = 'none';

});
submitedit.addEventListener('click', () => {
    let name = document.getElementById('editname').value;
    let number = document.getElementById('editnum').value;
    if (name != "" && number != "") {
        persons[key][0] = name;
        persons[key][1] = number;

        let id=persons[key][2];

     $.ajax({
        url:"edit_data.php",
        dataType:"json",
        method:"POST",
        data: {
            id:id,
            name:name,
            number:number
        },
        success: function (data) {
            alert(data["success"])
        },
        error: function(xhr, status, error) {
            alert(status)
        }

     });


        if (key == 0) {
            //
            document.getElementById('1').innerText = persons[0][0];
            document.getElementById('name').innerText = persons[0][0];
            document.getElementById('work').innerText = persons[0][1];
        } else {
            let listItems = personsList.querySelectorAll("li");

            listItems[key - 1].innerText = persons[key][0];
            document.getElementById('name').innerText = persons[key][0];
            document.getElementById('work').innerText = persons[key][1];
        }
    }
    editmodal.style.display = 'none';
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    CLICK list item   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$('.contactlist').on('click', 'li', (e) => {
    e.preventDefault();
    key = $(e.currentTarget).attr('key');

    // Select all elements with the class "contactlist"
    let contactlist = document.querySelectorAll(".contactlist");

    // Loop through each "contactlist" element
    contactlist.forEach(function (list) {
        // Get all the list items within each "contactlist" element
        let listItems = list.querySelectorAll("li");

        // Loop through the list items and remove the "selected" class
        listItems.forEach(function (item) {
            item.classList.remove("selected");
        });
    });
    $(e.currentTarget).addClass("selected");


    //alert(persons[key])
    document.getElementById('name').innerText = persons[key][0];
    document.getElementById('work').innerText = persons[key][1];

    if (key == 0) {
        deleteperson.style.display = "none";
    } else {
        deleteperson.style.display = "block";
    }

});



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   DELETE PERSON >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

deleteperson.addEventListener("click", function () {
    // Display a confirmation dialog
    let confirmation = confirm("Are you sure you want to delete?");

    // Check if the user confirmed (clicked OK)
    if (confirmation) {

        // persons.splice(key, 1);
      let id=persons[key][2];
        $.ajax({
            url:"deletePerson.php",
            method:"POST",
            dataType:"json",
            data:{
                id:id,
            },
            success:(message) =>{
                alert("success");
            },
            error: (xhr, status, error)=>{
                alert(status+error)
            }
        })
        location.reload();

    } else {

    }
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SORT PERSON  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function sortpersons() {
    const firstPerson = persons.shift();

    // Sort the remaining persons based on names
    persons.sort((a, b) => {
        const nameA = a[0].toUpperCase(); // Convert names to uppercase for case-insensitive sorting
        const nameB = b[0].toUpperCase();

        if (nameA < nameB) {
            return -1; // Name A comes before Name B
        }
        if (nameA > nameB) {
            return 1; // Name A comes after Name B
        }
        return 0; // Names are equal
    });

    // Insert the first person back into the beginning of the array
    persons.unshift(firstPerson);
    
}

function addSeperator(letter) {
    const h6 = document.createElement('h6');
    h6.innerText = letter;
    const hr = document.createElement('hr');
    h6.classList.add("seperator", "px-4", "mt-4");
    hr.classList.add("ms-4","mb-2");
    personsList.appendChild(h6);
    personsList.appendChild(hr);
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   search    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Get references to DOM elements
const searchInput = document.getElementById('search');
const suggestionList = document.getElementById('suggestion-list');

// Event listener for input field changes
searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value;

    // Clear previous suggestions
    suggestionList.innerHTML = '';

    if (searchTerm.trim() !== '') {
        // Fetch suggestions based on the search term (you need to implement this)
        let suggestions = await fetchSuggestions(searchTerm);


        // Display suggestions in the list
        suggestions.forEach((suggestion) => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion[1];
            console.log(suggestion[1]);
            listItem.classList.add("bg-white","px-3","mb-1")

            listItem.addEventListener('click', () => {
                
                handleSuggestionClick(suggestion);
            });
            suggestionList.appendChild(listItem);
        });

        // Show the suggestion list
        suggestionList.style.display = 'block';
    } else {
        // Hide the suggestion list if the input is empty
        suggestionList.style.display = 'none';
    }
});

// Function to fetch search suggestions (you need to implement this)
async function fetchSuggestions(searchTerm) {
    let suggestionList=[[]];
   
await $.ajax({
    url:"search.php",
    method:"POST",
    dataType:"json",
    data:{
        word:searchTerm
    },
    success:(data) =>{
      suggestionList=data;
// alert(data[0]);
    },
    error: (xhr, status, error)=>{
        alert(error);
    }
});

    return suggestionList;
}

// Function to handle the click action when a suggestion is clicked
function handleSuggestionClick(suggestion) {

    // alert(`You clicked on: ${suggestion}`);
    let contactlist = document.querySelectorAll(".contactlist");

    // Loop through each "contactlist" element
    contactlist.forEach(function (list) {
        // Get all the list items within each "contactlist" element
        let listItems = list.querySelectorAll("li");

        // Loop through the list items and remove the "selected" class
        listItems.forEach(function (item) {
            item.classList.remove("selected");
        });
    });
    suggestionList.style.display = 'none';
    let key =$("#"+suggestion[0]).attr("key");

        $("#"+suggestion[0]).addClass("selected");
  
    

    $("#list").animate({
        scrollTop: $("#" + suggestion[0]).position().top-100
      }, 1000);

    
    
    document.getElementById('name').innerText = persons[key][0];
    document.getElementById('work').innerText = persons[key][1];

    if (key == 0) {
        deleteperson.style.display = "none";
    } else {
        deleteperson.style.display = "block";
    }

}
1