function average(x){
    var totalscore = 0;
    for(i=0;i<scores.length;i++){
        if(parseInt(scores[i])){
            totalscore += scores[i];
        }
    }
    averagescore =parseInt(Math.round (totalscore/scores.length));
    console.log(averagescore);
}
var scores = [90,98,89,100,100,86,94];

average(scores);
