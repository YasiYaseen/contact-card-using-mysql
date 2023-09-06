<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Card</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <section class="container py-3">
        <div class="">
            <div class="row c-card">
                <div class="list-wrap position-relative col-sm-3 px-0">

                
                <div class="list position-relative px-0" id="list">

                    <div class="search px-4 mt-4">
                        <div class="input-group">
                            <div class="input-group-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            
                            <input type="text" class="form-control input-group-form " placeholder="search"
                                id="search">
                                
                        </div>
                        <ul class="suggestions mt-1" id="suggestion-list" style="display:none">
                            
                            </ul>
                    </div>
                    <h6 class="seperator px-4  mt-4">My card</h6>
                    <ul class="contactlist">
                        <li class="person selected" id="1" key="0"></li>
                    </ul>


                    <!-- <h6 class="seperator px-4">Others</h6>
                    <hr class="ms-4"> -->
                    <ul class="personList contactlist ">

                    </ul>

                    <button class="delete d-none" id="delete-btn"><i class="fa fa-trash" style="color: rgb(110, 17, 17); font-size: larger;"></i></button>
                    
                </div>
                <button class="add" id="add-button"><i class="fa-solid fa-plus" style="color: white; font-size: larger;"></i></button>
            </div>
                <div class="details  col-sm-9 position-relative">
                    <div class="d-card">
                        <div class="container py-5">
                            <div class="imgname d-flex justify-contant-center mb-5">
                                <img src="./image/person.png " alt=""
                                    class="circle-profile">
                                <h3 class="py-4 ps-5" id="name">
                                    </h3>
                            </div>
                            <div class="details-div position-relative w-100 h-auto">
                                <ul class="details-ul">
                                    <li class="mb-2 d-flex"><span class="title">Work </span>
                                        <span class="data ps-4 d-block" id="work">46746763</span>
                                    </li>
                                    <li class="mb-2 d-flex"><span class="title">Phone </span>
                                    <span class="data ps-4"> 9198632231</span> </li>
                                    <li class="mb-2 d-flex"><span class="title">Home </span>
                                    <span class="data ps-4">919936755360</span> </li>
                                    <li class="mb-2 d-flex"><span class="title">Email </span><span
                                            class="data ps-4">Sarfaz@gmail.com </span> </li>
                                    <li class="mb-2 d-flex"><span class="title">Busiiness </span><span
                                            class="data ps-4">xcworkhub@gmail.com</span> </li>
                                    <li class="mb-2 d-flex"><span class="title">Note </span><span
                                            class="data ps-4"></span> </li>

                                </ul>
                            </div>


                        </div>
                    </div>

                    <button class="Edit" id="edit-btn">Edit</button>
                    <button class="delete-person" id="delete-person">Delete</button>

                </div>

            </div>

        </div>
    </section>

    <script>

    </script>

    <div class="modal" id="input-modal">
        <div class="modal-content">
            <span class="close" id="close-modal">&times;</span>
            <h2>Enter Two Inputs</h2>



            <input type="text" id="input1" placeholder="name" class="form-control mb-2" required>

            <input type="text" id="input2" placeholder="Number" class="form-control mb-3" required>

            <div class="text-center parentadd"> <button id="submit-button" class="btn btn-primary px-3 ">Add</button>
            </div>

        </div>
    </div>

    <div class="modal" id="edit-modal">
        <div class="modal-content">
            <span class="close" id="close-edit">&times;</span>
            <h2>Edit</h2>
            <input type="text" id="editname" placeholder="name" class="form-control mb-2" required>

            <input type="text" id="editnum" placeholder="Number" class="form-control mb-3" required>

            <div class="text-center parentadd"> <button id="submit-edit" class="btn btn-primary px-3 ">Apply</button>
            </div>

        </div>
    </div>

    <script src="./script.js"></script>

</body>

</html>