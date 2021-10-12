var cnt = 0;
var myarray = ['당신의 한계를 부숴라.',
'아무도 자신을 건드릴 수 없을 것 같은 기분을 느끼며 필드를 향해 걸어간다.', 
'무언가가 너무 하기 싫다면, 당신이 그것을 필요로 하고 있다는 뜻이다.',
'더 빨리 시작하고, 더 많이 들어라',
'더 적은 시간 안에 더 많은 땀을 흘려라.',
'한계에 이르지 않고서 성취를 말하지 말라.',
'운동이 약이다. 운동만이 회복의 지름길이다.',
'할 수 있다. 긍정하라. 마음을 비워라. 리듬을 찾아라.'];
function startAct2(){
    
    interval=setInterval('chlmg()', 3000);
}
function stopAct2(){
    clearInterval(interval);
}
function chlmg(){
    if (cnt % myarray.length == 0) {
        cnt = 0;
    }
    document.getElementById('text').innerHTML = myarray[cnt];
    cnt++;
}

