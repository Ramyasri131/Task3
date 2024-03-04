var employeeMockData = [
    {
        employeeImg:"assets/images/profie-icon.png",
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
        employeeImg:"assets/images/profie-icon.png",
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
    },
    {
        employeeImg:"assets/images/profie-icon.png",
        Name: "Siva",
        mailId: "sandeep@tezo.com",
        location: "Banglore",
        dateofJoin: "04/02/2022",
        department: "Product Engg",
        role: "Lead Developer",
        empNo: "TZ1236",
        status: "Active",
        dateOfBirth: "12/01/2002",
        manager: "Ankitha",
        project: "Project1",
        number: 9876543210
    }
];

let employee = JSON.parse(localStorage.getItem('employee'))?.length ? JSON.parse(localStorage.getItem('employee')) : localStorage.setItem('employee', JSON.stringify(employeeMockData));


var roleMockDetails = [
    {
        roleName: "QA",
        department: "Quality Assurance",
        location: "Hyderabad",
    },
    {
        roleName: "Lead Developer",
        department: "Product Engg",
        location: "Banglore"
    }
];


let roleDetails = JSON.parse(localStorage.getItem('roleDetails'))?.length ? JSON.parse(localStorage.getItem('roleDetails')) : localStorage.setItem('roleDetails', JSON.stringify(roleMockDetails));

var x = window.matchMedia("(min-width: 900px)");
var y=  window.matchMedia("(min-width: 700px)")

// toggle side Menu
var sideBardOpen = true;
var tabViewSideBarOpen=true;
var mobileViewSideBarOpen=false;

let toggleSideBar = () => {
    if(y.matches)
    {
        if(x.matches)
        {
            if(sideBardOpen)
            {
                closeSideBar(x);
            }
            else{
             openSideBar(x);   
            }
            sideBardOpen = !sideBardOpen;
        }
        else
        {
            if(tabViewSideBarOpen)
            {
                openSideBar(x);
            }
            else
            {
                closeSideBar(x);
            }
            tabViewSideBarOpen =! tabViewSideBarOpen;
        }   
    }
    else
    {
      if(mobileViewSideBarOpen)
      {
        closeMobileSideBar();
      }
      else{
        openMobileSideBar();
      }
      mobileViewSideBarOpen =! mobileViewSideBarOpen;
    }
   
}
const sideBar = document.querySelector('#side-nav');
const notification = document.querySelector(".pop-up");
const handleIcon = document.getElementById("handle-logo");
const mainContent = document.querySelector(".main-content");
const minSideBar = document.querySelector(".minimized-side-nav");



function openMobileSideBar(){
   
    notification.style.display = "block";
    sideBar.style.display = "flex";
    sideBar.style.maxWidth="100%";
    const sidebarWidth = sideBar.offsetWidth+15;
    mainContent.style.marginLeft = "-"+sidebarWidth + "px";
    mainContent.style.width ="100%";
    handleIcon.style.transform="rotate(180deg)";
    handleIcon.style.marginTop="2rem";
    handleIcon.style.marginLeft="7.5rem";
}
function closeMobileSideBar(){
    notification.style.display = "block";
    sideBar.style.display = "none";
    sideBar.style.maxwidth="100%";
    const sidebarWidth = sideBar.offsetWidth;
    mainContent.style.marginLeft = sidebarWidth + "px";
    mainContent.style.width ="100%";
    handleIcon.style.transform="rotate(360deg)";
    handleIcon.style.marginTop="0rem";
    handleIcon.style.marginLeft="-1rem";
}

function openSideBar(x) {
    notification.style.display = "block";
    sideBar.style.display = "flex";
    minSideBar.style.display = "none";
    // minSideBar.style.visibility="hidden";
    if(x.matches)
    {
    handleIcon.classList.remove('rotate');
    }
    else{
        const sidebarWidth = sideBar.offsetWidth;
        mainContent.style.marginLeft = "-"+sidebarWidth + "px";
        mainContent.style.maxWidth ="100%";
        handleIcon.style.transform="rotate(180deg)";
        handleIcon.style.marginTop="2rem";
        handleIcon.style.marginLeft="7.5rem";
    }
}

function closeSideBar(x) {
  
    sideBar.style.display = "none";
    minSideBar.style.display = "block";
    notification.style.display = "none";
    if(x.matches)
    {
    handleIcon.classList.add('rotate');
    }
    else{
        mainContent.style.marginLeft = "0px";
        mainContent.style.width ="95%";
        handleIcon.style.transform="rotate(360deg)";
        handleIcon.style.marginTop="0rem";
        handleIcon.style.marginLeft="-2rem";
    }
}
function closeNotification() {
    const update = document.querySelector('.pop-up-box');
    update.style.display = "none";
}