var employeeMockData = [
    {
        employeeImg: "assets/images/profie-icon.png",
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
        employeeImg: "assets/images/profie-icon.png",
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
        employeeImg: "assets/images/profie-icon.png",
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
        employeeImg: "assets/images/profie-icon.png",
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
        employeeImg: "assets/images/profie-icon.png",
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
let employee;
let roleDetails;

employee = JSON.parse(localStorage.getItem('employee'))?.length ? JSON.parse(localStorage.getItem('employee')) : localStorage.setItem('employee', JSON.stringify(employeeMockData));
roleDetails = JSON.parse(localStorage.getItem('roleDetails'))?.length ? JSON.parse(localStorage.getItem('roleDetails')) : localStorage.setItem('roleDetails', JSON.stringify(roleMockDetails));



window.document.addEventListener("DOMContentLoaded", function () {
    var today = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    document.getElementsByName("todaysdate")[0]?.setAttribute('min', today);
    let headerHeight = document.querySelector(".header").offsetHeight;
    let descriptionHeight = document.querySelector(".employee-section").offsetHeight;
    let filterHeight = document.querySelector(".filter-section").offsetHeight;
    let advanceFilterHeight = document.querySelector(".advance-filter-section").offsetHeight;
    let deleteSectionHeight = document.querySelector(".change-section").offsetHeight;
    let totalHeight = headerHeight + descriptionHeight + filterHeight + advanceFilterHeight + deleteSectionHeight;
    totalHeight += 50;
    let tableHeight = "calc(100vh - " + totalHeight + "px)";
    document.querySelector(".table-div").style.height = tableHeight;
});

// toggle side Menu
var sideBarOpen = true;
var mobileViewSideBarOpen = false;


const sideBar = document.querySelector('#side-nav');
const notification = document.querySelector(".pop-up");
const handleIcon = document.getElementById("handle-logo");
const mainContent = document.querySelector(".main-content");
const minSideBar = document.querySelector(".minimized-side-nav");

var screenSize = window.matchMedia("(min-width: 720px)");
let toggleSideBar = () => {
    const mainContentWidth = sideBar.offsetWidth + 15;
    if (screenSize.matches) {
        if (sideBarOpen) {
            closeSideBar(mainContentWidth);
        }
        else {
            openSideBar(mainContentWidth);

        }
        sideBarOpen = !sideBarOpen;
    }
    else {
        if (mobileViewSideBarOpen) {
            mobileViewcloseSideBar();
        }
        else {
            mobileViewopenSideBar();

        }
        mobileViewSideBarOpen = !mobileViewSideBarOpen;
    }

}

function mobileViewopenSideBar() {
    sideBar.style.display = "flex";
    sideBar.style.position = "absolute";
    sideBar.style.width = "50%";
    sideBar.style.zIndex = 11;
    handleIcon.style.marginLeft = "7.5rem";
    handleIcon.style.zIndex = 12;
    handleIcon.style.transform = "rotate(360deg)";
    handleIcon.style.marginTop = "0rem";
}

function mobileViewcloseSideBar() {
    sideBar.style.display = "none";
    handleIcon.style.marginLeft = "-2rem";
    handleIcon.style.zIndex = 12;
    sideBar.style.width = "20%";
    handleIcon.style.transform = "rotate(180deg)";
    handleIcon.style.marginTop = "2rem";


}

function openSideBar(x) {
    notification.style.display = "block";
    sideBar.style.display = "flex";
    minSideBar.style.display = "none";
    handleIcon.classList.remove('rotate');
    const sidebarWidth = sideBar.offsetWidth;

    mainContent.style.width = "78%";
    handleIcon.style.transform = "rotate(360deg)";
    handleIcon.style.marginTop = "0rem";

}

function closeSideBar(x) {

    sideBar.style.display = "none";
    minSideBar.style.display = "block";
    notification.style.display = "none";
    mainContent.style.width = "90%";
    handleIcon.style.transform = "rotate(180deg)";
    handleIcon.style.marginTop = "2rem";
    handleIcon.style.marginLeft = "-2rem";

}
function closeNotification() {
    const update = document.querySelector('.pop-up-box');
    update.style.display = "none";
}