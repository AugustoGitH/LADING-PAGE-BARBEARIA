AOS.init()

const header_page = document.querySelector("header")

document.addEventListener("scroll", ()=>{
    let scrollWind = Math.round(window.scrollY)
   if(scrollWind > 200){
    header_page.classList.add("background_header")
   }if(scrollWind < 3){
    header_page.classList.remove("background_header")
   }
})



let icons_hearth = document.querySelectorAll(".IMG_mold i")
icons_hearth.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        icon.classList.toggle("favorite_color")
    })
})




function att_hoursData(){
    let hours = new Date().getHours()
    let day = new Date().getDay()

    let comps_datas = document.querySelectorAll(".area_hours")
    comps_datas.forEach((compDat, i)=>{
        let hours_real = compDat.querySelector(".hours").innerHTML
        let hourOpen = Number(hours_real.split("")[0] + hours_real.split("")[1])
        let hoursBack = Number(hours_real.split("")[8] + hours_real.split("")[9])
         if(i === day){
            if(hours >= hourOpen && hours <= hoursBack){
                compDat.classList.remove("background_dayFalse")
                compDat.classList.add("background_dayTrue")
            }if(!hourOpen && !hoursBack){
                compDat.classList.remove("background_dayTrue")
                compDat.classList.add("background_dayFalse")
            }if(hours < hourOpen || hours > hoursBack){
                compDat.classList.add("background_dayFalse")
            }
        }
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    att_hoursData()
})
