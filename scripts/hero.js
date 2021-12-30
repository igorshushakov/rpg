const spanAttack = document.querySelector(".hero_attack");
const spanHealth = document.querySelector(".hero_health");
const spanMana = document.querySelector(".mana");
const spanMoney = document.querySelector(".money");



class Hero {

    constructor() {
        this.attack = 25;
        this.max_hp=100;
        this.hp = 100;
        this.mana = 200;
        this.money = 500;
    }
  
    be_attacked(attack) {
      this.hp= this.hp - attack;
    }

    //сделать атаки, либо передавать их во врага


    //Восстановление здоровья
    regenHp(){
      this.hp=this.hp + (this.max_hp/6);
    }
    intensifyAttack(){
      this.attack=this.attack+(this.attack*35/100);
    }
    restoreMana(){
      this.mana=this.mana+50;
    }
    blockAttack(attack){
      this.hp=this.hp - (attack*30/100);
    }


    //Спецспособности
    earthquake(enemy_hp){
      if (this.mana>=100) {
        this.mana=this.mana - 100;
        enemy_hp=enemy_hp-100;
      }
    }
    firestorm(){
      if (this.mana>=140) {
        this.mana=this.mana - 140;
        enemy_hp=enemy_hp-190;
      }
    }
    thunderbolt(){
      if (this.mana>=200) {
        this.mana=this.mana - 200;
        enemy_hp=enemy_hp-360;
      }
    }



  
  }
  
  // Использование:
  let user = new Hero();

