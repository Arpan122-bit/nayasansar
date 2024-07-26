let Yes =document.getElementById("Yes")
let NO =document.getElementById("No")
let massage =document.getElementById("massage")

NO.addEventListener("mouseover",()=>{
    NO.style.position ="absolute"
    NO.style.top= Math.floor(Math.random()*40)+ "vh"
    NO.style.right=Math.floor(Math.random()*40)+ "vh"

})

Yes.addEventListener("click",()=>{
    massage.style.display="block";
}
)

massage.addEventListener("click",()=>
{
    massage.style.display="none";
})