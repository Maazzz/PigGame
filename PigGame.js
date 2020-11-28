var scores, roundScore, activePlayer,ctr;
Initialize();

function Initialize(){
    ctr=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.getElementById('name--0').textContent='Player 1'
    document.getElementById('name--1').textContent='Player 2'
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}


function PlayerChange(){
            roundScore=0;
        document.querySelector('#current--'+ activePlayer).textContent=roundScore;
        activePlayer=== 0? activePlayer =1 : activePlayer=0;
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        }


document.querySelector('.btn--roll').addEventListener('click',function(){
    if(ctr){
        //Generating the dice
        var dice = Math.floor(Math.random()*6)+1;
        /*if(d2===12){
            roundScore=0;
            score[activePlayer]=0;
            document.getElementById('score--'+activePlayer).textContent='0';
            document.getElementById('current--'+activePlayer).textContent='0';
            PlayerChange();
        }*/
        
    //Updating yhe UI
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+dice+'.png'
    
    //Checking if Dice hits 1
    if(dice !== 1){
        roundScore = roundScore+dice;
        document.querySelector('#current--'+ activePlayer).textContent=roundScore;
    }
    else{
        PlayerChange();
    }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(ctr){
        //Add current score to total score
    scores[activePlayer]+=roundScore;
    
    //Update in the UI
    document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
    
    //Winner
    if(scores[activePlayer]>=100){
        document.getElementById('name--'+activePlayer).textContent='WINNER!'
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        ctr=false;
    }
    else{
        //Player change
        PlayerChange();
        ctr=true;
    }
    }
    
});
document.querySelector('.btn--new').addEventListener('click',Initialize);