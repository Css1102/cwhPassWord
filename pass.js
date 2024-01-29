function maskPass(Pass){
let str="";
if(Pass!==undefined){
for(let i=0;i<Pass.length;i++){
str+="*";
}
}
return str;
}

function copyText(txt){
navigator.clipboard.writeText(txt).then(
    ()=>{
    // alert("Copied the text: " + txt);
    document.getElementById("alert").style.display= "inline";
    setTimeout(()=>{
 document.getElementById("alert").style.display= "none";
    },2500)
    },
    ()=> {
    alert("failed");
    },
);

}
let deletePassword=(website)=>{
let data=localStorage.getItem("GlobalDirect");
let arr=JSON.parse(data);
 arrUpdate=arr.filter((e)=>{
return e.website!=website;
})
localStorage.setItem("GlobalDirect",JSON.stringify(arrUpdate));
alert(`Successfully deleted ${website}'s password`)
}
let showPassWord=()=>{
let tb=document.querySelector("table");
let data=localStorage.getItem("GlobalDirect")
if(data==null || JSON.parse(data).length==0){
tb.innerHTML="No data to show";
}
else{
tb.innerHTML= `<tr>
<th>Website</th>
<th>Username</th>
<th>Password</th>
<th>Delete</th>
</tr>`
let arr=JSON.parse(data);
let str=""
for(let i=0;i<arr.length;i++){
let element=arr[i];
str=str+`<tr>
    <td>${element.website} <img onclick="copyText( '${element.website}')" src="./copy.svg" alt="Copy Button" width="10" height="10"></td>
    <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy.svg" alt="Copy Button" width="10" height="10"></td>
    <td>${maskPass(element.Password)} <img onclick="copyText('${element.Password}')" src="./copy.svg" alt="Copy Button" width="10" height="10"></td>
    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
</tr>`
}
tb.innerHTML+=str;
}
website.value=""
username.value=""
Password.value=""
}
showPassWord()
document.querySelector(".btn").addEventListener("click",(e)=>{
e.preventDefault()
let site=document.getElementById("website");
let usernaam=document.getElementById("username");
let passward=document.getElementById("Password");
let Passworld=localStorage.getItem("GlobalDirect");
console.log(Passworld);
if(Passworld==null){
let json=[]
json.push({website:site.value,username:usernaam.value,Password:passward.value});
alert("Password Saved!");
localStorage.setItem("GlobalDirect",JSON.stringify(json));
}
else{
let json=JSON.parse(localStorage.getItem("GlobalDirect"));
json.push({website:site.value,username:usernaam.value,Password:passward.value});
alert("Password Saved!");
localStorage.setItem("GlobalDirect",JSON.stringify(json));
}
showPassWord()

})
