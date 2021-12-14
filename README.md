# Introduction

- ### App developed for Astican
  
  - The functionality of this app is to get real time information about their managers, ships and their maintenance, also, let their clients know where are their ships, who is repairing it etc.., without needing to call or came to the shipyard.
  In addition, this app provide an info page and a contact us form, for the users on the internet who want to know more about the company and how they work.

# Diagrams

- ### E/R Model

![modelo ER](https://user-images.githubusercontent.com/91074521/146035687-314e1592-9c1f-4655-8798-fb1df192a4c6.png)

- ### Relational Mode

![image](https://user-images.githubusercontent.com/91074521/146031289-3fef568d-48fd-4b03-a40c-a52fc3b4af9d.png)

# User Requirements

- ### R.1 The app will be done for mobile.
- ### R.2 The users need to be registered to access most of the features the app provide, except for the info and contact us page.
- ### R.3 Admins will have access to modify the app info.
  - R.3.1 They can modify, delete and create both managers and boats info.
  - R.3.2 To delete a manager or a boat, the app will ask if he really want to.
  - R.3.3 To delete a manager they need to delete or modify all boats that references that manager before delete him.
 - ### R.4 Admins Can consult all info from the boats and managers, and Clients only can consult the info that reference their user.

# Use Cases

![casos de uso](https://user-images.githubusercontent.com/91074521/146047269-fd6892b6-0b12-48c7-846d-08e46f1d804f.png)

# Interfaces

- ### Prototype
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052370-18e9aeb2-cb8a-40ea-8543-5d21771889da.png">
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052578-ea00d645-de86-466a-9369-9dbf1446cf09.png">
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052737-772c55bf-4cec-4a67-8237-5fc143e402b5.png">
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052798-46acf6ab-4a69-49ca-a42f-08115549567a.png">
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052873-27207177-63ca-4e39-8bcf-c8b98895597d.png">
  <img width="300" src="https://user-images.githubusercontent.com/91074521/146052936-ed0ec729-1b3a-46be-8811-57b9e6d6a817.png">

- ### Usablity
  - Users didn't like the white background on the prototype because they usually check the app on the nigthttime and the brightness blind them, so i change the background color to a more appropiated color such a gradient blue, a better color to see in the nighttime, and also keep the essence of the company referencing the color of the ocean.
 
    <img width="300" src="https://user-images.githubusercontent.com/91074521/146056674-7e52d4b6-ba2a-4527-9cf4-387a484ed0b5.png">
  
  - I decided to use a sidemenu on the app instead of a typical menu bar on the top to not overload the interface, this way is more user friendly and visually organized.
  
    <img width="300" src="https://user-images.githubusercontent.com/91074521/146058316-1e2666ce-1fb6-4486-b9c0-156780938a08.png">
  
  - When the user login, register or send a message, he will receive a confirmation message letting him know that he did it succesfully, and an error message when not, alongside this the CRUD that admins use to admininstrate all the information of the boats and managers have the same feature, with the addition of a cancel option when you try to delete something.
  
    <img width="300" src="https://user-images.githubusercontent.com/91074521/146060785-fa31b317-e369-415c-9821-e1267ad94409.png">
    <img width="300" src="https://user-images.githubusercontent.com/91074521/146060839-27711134-eafb-42a7-a103-9caf34bbf14b.png">
    <img width="300" src="https://user-images.githubusercontent.com/91074521/146060940-0d6ffbc7-f317-49bc-8b51-e86cfc518563.png">
  
# Manuals

- ### Developer installation manual

  - ##### BACKEND:
    - **MYSQL Server: ** https://dev.mysql.com/downloads/mysql/
    - **MYSQL Workbench, XAMPP or another Database manager: ** https://www.apachefriends.org/es/index.html
    - ------------------DEPENDENCIES----------------------
    - **node dependencies**: *```npm install```*
    - **multer**: *```npm install multer```*
    - **sequelize**: *```npm install sequelize```
    
    - You need to import the ```db_boats.sql``` to your Database manager, once you do that, you need to create a ```.env``` archive like this:

      <img width="400" src="https://user-images.githubusercontent.com/91074521/146064184-25202563-20c0-427f-92d4-8d7eee2334b2.png">
      
     - Then go to your console and install all the dependecies listed above, once you do that, use the command ```npm start``` to initiate the backend.
  
  - ##### FRONTEND:
    - **Visual Studio Code or another editor:** https://code.visualstudio.com/
    - -------------DEPENDENCIES-------------- 
    - **node dependencies**: *```npm install```*
    - **sweetalert2**: *```npm install sweetalert2```*
    
    - In the console install the dependencies listed above, like you did with the backend, then use the command ```ionic serve --lab``` to start the aplication.
    
    - if you get an error message from the ionic lab, install the dependency with the command: ```npm install ionic-lab```

- ### User Manual
  
  - 

# Pile

- ## BACKEND: 
  <img width="150" src="https://user-images.githubusercontent.com/91074521/146061893-ea8b82d3-17c9-4b1f-9732-bcebbe675678.png">

- ## FRONTEND: 
 
  <img width="150" src="https://user-images.githubusercontent.com/91074521/146062209-68e82fb2-2bde-4abc-992e-3f05c0d1e5bc.png">

# Tech Comparison

# Planification

# Conclusions

# Links and References
