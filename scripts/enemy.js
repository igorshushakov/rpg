const zombie="img/zombie.png"
const prizrak="img/prizrak.png";
const mechazilla="img/mechazilla.png";
const diavol="img/diavol.png";
class Enemy{
    constructor(hp,attack,img){
        this.hp=hp;
        this.attack=attack;
        this.img=img;
    }
    be_attacked(attack) {
        this.hp= this.hp - attack;
    }
    setImage(){
        document.getElementById("enemyImage").src=this.img;
    }
}

