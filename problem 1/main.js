let ad = ["Ahmed", "Osama", "Sayed", "Stop", "Samira"];

let emp = ["Amgad","Amr", "Sameh", "Omr", "Ayman", "Shady", "Smsm"];

let numOfEmp = 3;


let container = document.createElement('div');

let ShowNumOfEmp = document.createElement('div');
let ShowNumOfEmpMassg = document.createTextNode(`we have ${numOfEmp} admins`);
ShowNumOfEmp.prepend(ShowNumOfEmpMassg)
let line = document.createElement('hr');
ShowNumOfEmp.appendChild(line);
container.prepend(ShowNumOfEmp);
document.body.prepend(container);


  for (let i = 0; i < numOfEmp; i++) {
     let adm = document.createElement('div')
     let nameOfadm = document.createTextNode(`the Admen for ${ad[i]} team`);
     adm.appendChild(nameOfadm)
     container.appendChild(adm)
     adm.style.cssText = "margin: 30px;"
     let title = document.createElement("div")
      let titleMsg = document.createTextNode("team members")
      title.appendChild(titleMsg)
      adm.appendChild(title)
      title.style.cssText = "margin: 10px  ;"
     for (let j = 0; j < emp.length; j++) {
        if (ad[i][0].startsWith(emp[j][0])) {
          let membersName = document.createElement("div")
          let membersNameMsg = document.createTextNode(`${emp[j]}`)
          membersName.appendChild(membersNameMsg)
          adm.appendChild(membersName)
        }else{
          console.log("no");
        }
     }

 }
 
 console.log(ad[0][0])