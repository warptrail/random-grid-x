  
    
    // Random Number for first column
        var randomNumberButton1 = document.getElementById('randomNumber1');
        randomNumberButton1.addEventListener('click',function(event){
            function generateC1(){
                var randomNum1 = Math.round(Math.random() * 1000000);
                return randomNum1;
            }
            randomNum1 = generateC1();
            var randomLog1 = document.getElementById('randomlog1');
             randomLog1.innerHTML += '<div class="newNum">'+ randomNum1 + '</div>';
            console.log(randomNum1);
            return randomNum1;
        });
    // Random Number for second column
        var randomNumberButton2 = document.getElementById('randomNumber2');
        randomNumberButton2.addEventListener('click',function(event){
            function generateC2(){
                var randomNum2 = Math.round(Math.random() * 1000000);
                return randomNum2;
            }
            randomNum2 = generateC2();
            var randomLog2 = document.getElementById('randomlog2');
            randomLog2.innerHTML += '<div class="newNum">'+ randomNum2 + '</div>';
            console.log(randomNum2);
            return randomNum2;
        });
    
    var multiplyButton = document.getElementById('multiplyButton');
    multiplyButton.addEventListener('click', function(event){
        function multipass(randomNum1, randomNum2){
            var randomMultiply = randomNum1 * randomNum2;
            var randomMultiplyLog = document.getElementById('randomMultiply');
            randomMultiplyLog.innerHTML += '<div class="newNum">' + randomMultiply + '</div>';
            return randomMultiply;
        }
        multipass(randomNum1,randomNum2);
    })
    
    console.log()
    
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function(event){
        function addRandoms(randomNum1, randomNum2){
            var randomSum = randomNum1 + randomNum2;
            console.log(randomSum);
            var randomSumLog = document.getElementById('randomsum');
            randomSumLog.innerHTML += '<div class="newNum">' + randomSum + '</div>';
             return randomSum;
        }
        addRandoms(randomNum1,randomNum2);
    })
    
    
    function tooeasy(){
        return "Generate Another Random Number";
    }
    
    // tooeasy();
    var gametimebutton = document.getElementById('randomNumber2');
    gametimebutton.innerHTML = tooeasy();
    
    function addNumbers(a,b){
        var c = a + b;
        //console.log(c);
        return c;
    }
    
    var answer = addNumbers(1,1);
    console.log(answer);
    
    function wjat(){
        var moot = addNumbers(3,9);
        console.log(moot);
    }
    wjat();