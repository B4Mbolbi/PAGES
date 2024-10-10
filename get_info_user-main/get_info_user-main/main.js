let tg = window.Telegram.WebApp;

tg.expand();


function send_data(objButton){
    tg.sendData(`{'get_info_user' : {"aspect":"${objButton.value}"}}`); 
}
