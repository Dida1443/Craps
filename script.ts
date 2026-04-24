const play_btt = document.querySelector<HTMLButtonElement>('.playBTT')!;
const display = document.querySelector<HTMLDivElement>('.display')!;
const message = document.querySelector<HTMLDivElement>('.message')!;
const pointDP = document.querySelector<HTMLDivElement>('.point')!;
const statsDP = document.querySelector<HTMLDivElement>('.statsDP')!;

function Generator(min: number, max: number): number {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
}


let games: number = 0;
let wins:number = 0;
let losses: number = 0;

function UpdateStats(): void{
    statsDP.innerText = "Wins: " + wins + " Losses: " + losses + " Proportion: " + (wins/games).toFixed(2); 
}


let point: number = 0;

function Play(): void{
    console.log("working");
   
    let current: number = (Generator(1,6)+Generator(1,6));
    display.innerText = "Roll: " + String(current);

    if(point==0){

        if(current == 7 || current == 11){
            //console.log("win");
            message.innerText = "You win";
            wins++;
            games++; 
            UpdateStats();
            return;
        }
        else if(current == 2 || current == 3 || current ==12){
            //console.log('lost');
            message.innerText = "You lose";
            losses++;
            games++; 
            UpdateStats();
            return;
        }

        point  = current; 
        //let active: boolean = true;
        pointDP.innerText = "Point: " + String(point);
        message.innerText = "New point set";
        return;
    }

    if(current == 7){
        message.innerText = "You lose";
        point = 0;
        pointDP.innerText = "";
        losses++;
        games++; 
        UpdateStats();
        return; 
    }

    else if(current!= point && point !=7){
        message.innerText = "Roll is not point";
        //UpdateStats();
        return;
    }

    else{
        message.innerText = "You win";
        point = 0; 
        pointDP.innerText = "";
        wins++;
        games++; 
        UpdateStats();
        return;
    }
}


