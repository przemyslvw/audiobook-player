const filessystem = require('fs');
const dir = './build/audio';

if (!filessystem.existsSync(dir)){
  filessystem.mkdirSync(dir);

}else
{
    console.log("Directory 'audio' already exist");
}

console.log(`
███▄ ▄███▓ ▄▄▄     ▓██   ██▓▓█████▄  ▄▄▄       ██ ▄█▀
▓██▒▀█▀ ██▒▒████▄    ▒██  ██▒▒██▀ ██▌▒████▄     ██▄█▒ 
▓██    ▓██░▒██  ▀█▄   ▒██ ██░░██   █▌▒██  ▀█▄  ▓███▄░ 
▒██    ▒██ ░██▄▄▄▄██  ░ ▐██▓░░▓█▄   ▌░██▄▄▄▄██ ▓██ █▄ 
▒██▒   ░██▒ ▓█   ▓██▒ ░ ██▒▓░░▒████▓  ▓█   ▓██▒▒██▒ █▄
░ ▒░   ░  ░ ▒▒   ▓▒█░  ██▒▒▒  ▒▒▓  ▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒
░  ░      ░  ▒   ▒▒ ░▓██ ░▒░  ░ ▒  ▒   ▒   ▒▒ ░░ ░▒ ▒░
░      ░     ░   ▒   ▒ ▒ ░░   ░ ░  ░   ░   ▒   ░ ░░ ░ 
       ░         ░  ░░ ░        ░          ░  ░░  ░   
                     ░ ░      ░                       
`)