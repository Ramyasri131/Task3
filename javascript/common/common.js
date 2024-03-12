var employeeMockData = [
    {
        employeeImg: "../assets/images/profie-icon.png",
        Name: "Edger Jones",
        mailId: "edger@tezo.com",
        location: "Hyderabad",
        dateofJoin: "04/02/2023",
        department: "Quality Assurance",
        role: "QA",
        empNo: "TZ1234",
        status: "In-Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    },
    {
        employeeImg: "../assets/images/profie-icon.png",
        Name: "Sandeep d",
        mailId: "sandeep.d@tezo.com",
        location: "Banglore",
        dateofJoin: "04/02/2023",
        department: "Quality Assurance",
        role: "Lead Developer",
        empNo: "TZ1231",
        status: "In-Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    },
    {
        employeeImg: "../assets/images/profie-icon.png",
        Name: "Test d",
        mailId: "sandeep.d@tezo.com",
        location: "Banglore",
        dateofJoin: "04/02/2023",
        department: "Quality Assurance",
        role: "N/A",
        empNo: "TZ12312",
        status: "In-Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    },
    {
        employeeImg: "../assets/images/profie-icon.png",
        Name: "User9 d",
        mailId: "sandeep.d@tezo.com",
        location: "Banglore",
        dateofJoin: "04/02/2023",
        department: "Quality Assurance",
        role: "N/A",
        empNo: "TZ12319",
        status: "In-Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    },
    {
        employeeImg: "../assets/images/profie-icon.png",
        Name: "Sandeep Bhaskar",
        mailId: "sandeep@tezo.com",
        location: "Banglore",
        dateofJoin: "04/02/2023",
        department: "Quality Assurance",
        role: "Lead Developer",
        empNo: "TZ1235",
        status: "In-Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    }

];

var roleMockDetails = [
    {
        roleName: "QA",
        department: "Quality Assurance",
        location: "Hyderabad",
        description: "Configure the providers that are available to users when they sign in"
    },
    {
        roleName: "Lead Developer",
        department: "Product Engg",
        location: "Banglore",
        description: "Configure the providers that are available to users when they sign in"
    }
];
var employee;
var roleDetails;

employee = JSON.parse(localStorage.getItem('employee'))?.length ? JSON.parse(localStorage.getItem('employee')) : localStorage.setItem('employee', JSON.stringify(employeeMockData));
roleDetails = JSON.parse(localStorage.getItem('roleDetails'))?.length ? JSON.parse(localStorage.getItem('roleDetails')) : localStorage.setItem('roleDetails', JSON.stringify(roleMockDetails));

function fetchData(){
    roleDetails = JSON.parse(localStorage.getItem('roleDetails'));
    employee = JSON.parse(localStorage.getItem('employee'));
    role= JSON.parse(localStorage.getItem('viewRole'));
}


// toggle side Menu
var sideBarOpen = true;
var mobileViewSideBarOpen = false;


// const sideBar = document.querySelector('#side-nav');
const sideBar=document.getElementById("side-nav");
const notification = document.querySelector(".pop-up");
const handleIcon = document.getElementById("handle-logo");
const mainContent = document.querySelector(".main-content");
const minSideBar = document.querySelector(".minimized-side-nav");

var screenSize = window.matchMedia("(min-width: 720px)");
let toggleSideBar = () => {
    if (screenSize.matches) {
        if (sideBarOpen) {
            closeSideBar();
        }
        else {
            openSideBar();

        }
        sideBarOpen = !sideBarOpen;
    }
    else {
        if (mobileViewSideBarOpen) {
            closemobileViewSideBar();
        }
        else {
            openmobileViewSideBar();

        }
        mobileViewSideBarOpen = !mobileViewSideBarOpen;
    }

}

function openmobileViewSideBar() {
    sideBar.style.display = "flex";
    handleIcon.classList.add("rotate-360");
    handleIcon.classList.remove("rotate-180");
}

function closemobileViewSideBar() {
    sideBar.style.display = "none";
    handleIcon.classList.add("rotate-180");
    handleIcon.classList.remove("rotate-360");
}

function openSideBar() {
    notification.style.display = "block";
    sideBar.style.display = "flex";
    minSideBar.style.display = "none";
    mainContent.style.width = "78%";
    handleIcon.classList.add("rotate-360");
    handleIcon.classList.remove("rotate-180");
}

function closeSideBar() {
    sideBar.style.display = "none";
    minSideBar.style.display = "block";
    notification.style.display = "none";
    mainContent.style.width = "99%";
    handleIcon.classList.add("rotate-180");
    handleIcon.classList.remove("rotate-360");
}

function closeNotification() {
    const update = document.querySelector('.pop-up-box');
    update.style.display = "none";
}