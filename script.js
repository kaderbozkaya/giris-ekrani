let girisbtn= document.getElementById('girisbtn')
let kayitbtn= document.getElementById('kayitbtn')
let baslik= document.getElementById('baslik')
let isimkismi= document.getElementById('isimkismi')
// let deneme= document.getElementById('deneme') 

girisbtn.onclick= function() {
    baslik.innerHTML= "Giriş Yap"
    isimkismi.style.maxHeight= '60px'
    girisbtn.classList.remove('disable') /*girişe basılınca kayıt disable olsun kayıta basınca giriş*/
    kayitbtn.classList.add('disable')

}
kayitbtn.onclick= function() {
    baslik.innerHTML= "Kayıt Ol"
    isimkismi.style.maxHeight= '0'
    girisbtn.classList.add('disable')
    kayitbtn.classList.remove('disable')
   
    
}
