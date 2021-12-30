const spanAttack = document.getElementById("hero_attack");
const spanHealth = document.getElementById("hero_health");
const spanMana = document.getElementById("mana");
const spanMoney = document.getElementById("money");
const zombie="img/zombie.png"
const prizrak="img/prizrak.png";  
const diavol="img/diavol.png";
const mechazilla="img/mechazilla.png";
const button_earthquake=document.getElementById('earthquake');
const button_firestorm=document.getElementById('firestorm');
const button_thunderbolt=document.getElementById('thunderbolt');
const spanInfo=document.getElementById('info');
const button_block=document.getElementById('block');
const button_intenAttack=document.getElementById('intenAttack');
const spanTurn=document.getElementById('turn');
const spanLvl=document.getElementById('lvl');
const button_fiz_pod=document.getElementById('fiz_pod');
const button_vampir1=document.getElementById('vampir1');
const button_vampir2=document.getElementById('vampir2');
const button_vampir3=document.getElementById('vampir3');
const button_blizniy1=document.getElementById('blizniy1');
const button_blizniy2=document.getElementById('blizniy2');
const button_blizniy3=document.getElementById('blizniy3');
const button_diplomat1=document.getElementById('diplomat1');
const button_diplomat2=document.getElementById('diplomat2');

let buttonattack=document.getElementById("baseattack");
let button_molot=document.getElementById("molot");
let button_zemlya=document.getElementById("zemlica");
let turn=0;
let buttonrh=document.getElementById("regenhp");
let button_regenMana=document.getElementById("regenmana");
let a=0;
let intenAttackVar=25;
let lvl=1;
let magicVar=false;
let fiz_pod=false;
let vampir1=false;
let vampir2=false;
let vampir3=false;
let blizniy1=false;
let blizniy2=false;
let blizniy3=false;
let diplomat1=false;
let diplomat2=false;


class Hero {
    constructor() {
        this.attack = 25;
        this.max_hp=100;
        this.hp = 100;
        this.mana = 200;
        this.money = 5000000;
    }
  
    be_attacked(attack) {
      this.hp= this.hp - attack;
    }
    //Восстановление здоровья
    regenHp(){
      if(this.hp<600){
        this.hp=this.hp + Math.round (this.max_hp/4);
        
      }
      else{
        alert("Хилочка не работает. Иди отдыхай")
      }
    }
    intensifyAttack(){
      this.attack=this.attack+(this.attack*35/100);
    }
    restoreMana(){
      this.mana=this.mana+50;
    }
    blockAttack(attack){
      this.hp=this.hp - Math.round(attack/10)+attack;
      this.mana=this.mana+5
    }


    //Спецспособности
    earthquake(){
      if (this.mana>=100) {
        this.mana=this.mana - 100;
        return 100
      } else{
        spanInfo.innerHTML="Волшебства не будет. Маны нема";
        return 0
      }
    }
    firestorm(){
      if (this.mana>=140) {
        this.mana=this.mana - 140;
        this.hp=this.hp-(Math.round(this.hp/100*40))
        return 190
      } else{
        spanInfo.innerHTML='Волшебства не будет. Маны нема';
        return 0
      }
    }
    thunderbolt(){
      if (this.mana>=200) {
        this.mana=this.mana - 200;
        this.hp=this.hp-(Math.round(this.hp/100*70))
        return 360
        
      } else{
        spanInfo.innerHTML='Волшебства не будет. Маны нема';
        return 0
      }
    }
}
class Enemy{
  constructor(hp,attack,img){
      this.hp=hp;
      this.attack=attack;
      this.img=img;
  }
  be_attacked(attack) {
    this.hp= this.hp - attack;
    if(this.hp<=0){
       magicVar=true;
    }
  }
  setImage(){
     document.getElementById("enemyImage").src=this.img;
  }
}

user = new Hero();
enemy1=new Enemy(250,15,prizrak)
enemy2=new Enemy(350,10,zombie)
enemy3=new Enemy(500,20,prizrak)
enemy4=new Enemy(750,15,zombie)
enemy5=new Enemy(1300,45,mechazilla)
enemy6=new Enemy(900,25,zombie)
enemy7=new Enemy(800,35,prizrak)
enemy8=new Enemy(1100,30,zombie)
enemy9=new Enemy(2000,45,zombie)
boss=new Enemy(3500,55,diavol)
let enemy=enemy1
buttonattack.onclick=()=>{
    enemy.be_attacked(user.attack)
    turn++;
}
button_zemlya.onclick=()=>{
  enemy.be_attacked(user.attack+20)
  user.mana=user.mana-35
    turn++;
}
button_molot.onclick=()=>{
  enemy.be_attacked(user.attack+10)
  user.mana=user.mana-25
    turn++;
}
buttonrh.onclick=()=>{
  user.regenHp()
  user.mana=user.mana-25
  turn++
}
button_regenMana.onclick=()=>{
  user.restoreMana()
  turn++
}
button_earthquake.onclick=()=>{
  enemy.be_attacked(user.earthquake())
  turn++
}
button_firestorm.onclick=()=>{
  enemy.be_attacked(user.firestorm())
  turn++
}
button_thunderbolt.onclick=()=>{
  enemy.be_attacked(user.thunderbolt())
  turn++
}
button_block.onclick=()=>{
  user.blockAttack(enemy.attack)
  turn++
}
button_intenAttack.onclick=()=>{
  enemy.be_attacked(user.attack+intenAttackVar);
  user.mana=user.mana-10;
  turn++;
}
button_fiz_pod.onclick=()=>{
  if(fiz_pod==false && user.money>=500){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    fiz_pod=true;
    user.money=user.money-500;
    user.hp=user.hp+5;
    user.max_hp=user.max_hp+5;
    user.attack=user.attack+5;
    button_fiz_pod.style.background="green";
  }else{
    document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
  }
}
button_vampir1.onclick=()=>{
  if(fiz_pod==true && user.money>=1000 && vampir1==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    vampir1=true;
    user.money=user.money-1000;
    user.hp=user.hp+20;
    user.max_hp=user.max_hp+20;
    user.attack=user.attack+10;
    button_vampir1.style.background="green";
  }else{
    if(fiz_pod==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
button_vampir2.onclick=()=>{
  if(vampir1==true && user.money>=1200 && vampir2==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    vampir2=true;
    user.money=user.money-1200;
    user.hp=user.hp+40;
    user.max_hp=user.max_hp+40;
    user.attack=user.attack+25;
    button_vampir2.style.background="green";
  }else{
    if(vampir1==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
}
button_vampir3.onclick=()=>{
  if(vampir2==true && user.money>=1700 && vampir3==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    vampir3=true;
    user.money=user.money-1700;
    user.hp=user.hp+70;
    user.max_hp=user.max_hp+70;
    user.attack=user.attack+35;
    button_vampir3.style.background="green";
  }else{
    if(vampir2==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
}
button_blizniy1.onclick=()=>{
  if(fiz_pod==true && user.money>=1000 && blizniy1==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    blizniy1=true;
    user.money=user.money-1000;
    user.hp=user.hp+0;
    user.max_hp=user.max_hp+0;
    user.attack=user.attack+35;
    button_blizniy1.style.background="green";
  }else{
    if(fiz_pod==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
button_blizniy2.onclick=()=>{
  if(blizniy1==true && user.money>=1000 && blizniy2==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    blizniy2=true;
    user.money=user.money-1000;
    user.hp=user.hp+0;
    user.max_hp=user.max_hp+0;
    user.attack=user.attack+55;
    button_blizniy2.style.background="green";
  }else{
    if(blizniy1==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
button_blizniy3.onclick=()=>{
  if(fiz_pod==true && user.money>=1000 && blizniy3==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    blizniy3=true;
    user.money=user.money-1000;
    user.hp=user.hp+0;
    user.max_hp=user.max_hp+0;
    user.attack=user.attack+75;
    button_blizniy3.style.background="green";
  }else{
    if(blizniy2==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
button_diplomat1.onclick=()=>{
  if(vampir1==true && user.money>=1000 || blizniy1==true && user.money>=1000){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    diplomat1=true;
    user.money=user.money-1000;
    button_diplomat1.style.background="green";
  }else{
    if(fiz_pod==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
button_diplomat2.onclick=()=>{
  if(diplomat1==true && user.money>=1000 && diplomat2==false){
    document.getElementById('fraza').innerHTML='Поздравляю, умение твоё, забирай.'
    diplomat2=true;
    user.money=user.money-1000;
    button_diplomat2.style.background="green";
  }else{
    if(fiz_pod==false){
      document.getElementById('fraza').innerHTML='Так, ты куда полез? Вернись назад.'
    }
    else{
      document.getElementById('fraza').innerHTML='Кошелёк пуст. Иди зарабатывай'
    }
  }
  
}
function updateStates(){
  spanAttack.innerHTML=user.attack;
  spanHealth.innerHTML=user.hp;
  spanMana.innerHTML=user.mana;
  spanMoney.innerHTML=user.money;
  document.getElementById("enemy_attack").innerHTML=enemy.attack;
  document.getElementById("enemy_health").innerHTML=enemy.hp;
  spanTurn.innerHTML=turn;
  spanLvl.innerHTML=lvl;
}
function changeTurn(){
  if(turn>a){
    user.be_attacked(enemy.attack)
    updateStates()
    a++;
    changeLvl()
  }
}
function changeLvl(){
  if(magicVar==true){
    lvl++;
    magicVar=false
    if(enemy==enemy1){
      enemy=enemy2
      user.hp=user.hp+50
    }else if(enemy==enemy2){
      enemy=enemy3
      user.hp=user.hp+60
    }else if(enemy==enemy3){
      enemy=enemy4
      user.hp=user.hp+70
    }else if(enemy==enemy4){
      enemy=enemy5
      user.hp=user.hp+55
    }else if(enemy==enemy5){
      enemy=enemy6
      user.hp=user.hp+100
    }else if(enemy==enemy6){
      enemy=enemy7
      user.hp=user.hp+40
    }else if(enemy==enemy7){
      enemy=enemy8
      user.hp=user.hp+60
    }else if(enemy==enemy8){
      enemy=enemy9
      user.hp=user.hp+80
    }else if(enemy==enemy9){
      enemy=boss
      user.hp=user.hp+200
    }else{
      console.log('win')
    }
    enemy.setImage()
    updateStates()
  }
}

setInterval(changeTurn,10)



