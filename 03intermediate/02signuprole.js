/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return ` ${name} is ADMIN with all access`;

    case "subadmin":
      return ` ${name} is SUB-ADMIN with access create and Delete the Courses`;

    case "testprep":
      return ` ${name} is TEST-PREP with  access create and delete Tests`;

    case "user":
      return ` ${name} is USER which can consume test`;

    default:
      return `${name} is a TRAIL User`;
  }
};

// console.log(getUserRole("ankush", "user"));

// var displayUserRole = getUserRole("Sammy", "subadmin");

// console.log(displayUserRole);

/* We Don't need break statement... because after return statement, it does not proceed futher */
