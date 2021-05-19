const account1 = {
    owner: 'Prashant Rastogi',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'de-DE', // de-DE
  };

  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  
  };
  
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'de-DE', // de-DE
  
  };
  
  
  const accounts = [account1, account2, account3, account4];
  // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');


const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');


const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');


const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const transferamnt=[];

const uuu=[];

var uuuid;
var pPin;
var uUsername;

const startingMinutes = 5;
var time = startingMinutes * 60;
const labelTimer = document.querySelector('.timer');


    $("#btnLogin" ).click(function(event) {
        debugger;
         
       
       var userId= $('#UserId').val();
        var pwd=$('#UserPwd').val();
        var amnt=transferamnt[0];
        var transferTo=transferamnt[1];
        var uid=uuu[0];
       

        if(uid!=undefined){
            $('.movements__row'+uid+'').hide();
            $('#movementid #withdrawDiv').hide();
        }
       
        if(userId=='' || pwd==''){
            alert("Please enter all field");
        }
       
        else{
        var i=0;
            for(i=0 ;i<accounts.length;i++){
                // var accountdetail=accounts[i];
                // var username=accountdetail.owner;
                // var uuid=username.substring(0,2);
                // var Pin=accountdetail.pin;

                var accountdetail=accounts[i];
                var username=accountdetail.owner;
                var uui = username.split(" ");
                var uuid=uui[0].substring(0,1).toLowerCase() + uui[1].substring(0,1).toLowerCase();
                var Pin=accountdetail.pin;
    
                if(userId==uuid && pwd==Pin){
                    debugger;
                    // $('.app').css('opacity', '100');
                    // $('.welcome').text("Welcome back, "+username+"");
                    // $('.login').show();

                    containerApp.style.opacity = "1";
                    // $('.app').css('opacity', '100');
                    $('.welcome').text("Welcome back, "+username+"");
                    $('.login').hide();
                    uuuid = uuid;
                    pPin = Pin;
                    uUsername = username;

                    var intval = setInterval(updateCountDown, 1000);
                    setTimeout(() => { 
                        clearInterval(intval);
                        containerApp.style.opacity = "0";
                        $('.welcome').text(" Log in to get started ");
                        $('.login').show();

                     }, time*1000);

              
                 var netAmnt=0;
                 var deposit=0;
                 var withdraw=0;

                    for(var j=0; j<accountdetail.movements.length;j++){
                        var value=accountdetail.movements[j];
                        var date=accountdetail.movementsDates[j];
                         netAmnt=netAmnt+parseFloat(value);
                         $('.balance__value').text(netAmnt);
                    var ms=Pin+j+1;
                        if(value>0){
                            deposit=deposit+parseFloat(value);
                           
                             var d=$('<div class="movements__row'+userId+'" id="depositDiv'+userId+'"><div class="movements__type movements__type--deposit"> 1 deposit</div> <div class="movements__date" id=dateid'+ms+'></div> <div class="movements__value" id=amountVal'+ms+'></div>');
                                $('#movementid').append(d);
                                $('#dateid'+ms+'').text(date);
                                $('#amountVal'+ms+'').text(value);
                                $('.movements__row'+userId+'').css('padding','2.25rem 4rem');
                                $('.movements__row'+userId+'').css('display','flex');
                                $('.movements__row'+userId+'').css('align-items','center');
                                $('.movements__row'+userId+'').css('border-bottom','1px solid #eee');

                        }
                        else{
                            withdraw=withdraw-value;
                            var w=$('<div class="movements__row" id="withdrawDiv"> <div class="movements__type movements__type--withdrawal"> 1 withdrawal</div> <div class="movements__date" id=drawdateid'+ms+'> </div> <div class="movements__value" id=drawVal'+ms+'></div></div>');
                                $('#movementid').append(w);
                                $('#drawdateid'+ms+'').text(date);
                                $('#drawVal'+ms+'').text(value);
                                 
                        }
                        
                    }
                    $('#deposit').text(deposit);
                    $('#withdraw').text(withdraw);
                    event.preventDefault() 

                     
                }
               
            }
        }
        
    });


    

 
    $('#TransferMoney').on('click',function(event){
        debugger;
        var transferAcnt=$("#transferaAcc").val();
        var amountToTransfer=$("#amountTransfer").val();
        var userId= $('#UserId').val();
        var counter;
        var countUser=0;
        var valid1=0;
        var valid2=0;
        for(var i=0; i<accounts.length;i++){
            var accountdetail=accounts[i];
            var username=accountdetail.owner;
            var uuid=username.substring(0,2);
            var totamnt=accountdetail.movements;
           
            if(userId==uuid){
                var subtotal=0;

                for(var k=0;k<totamnt.length;k++){
                    subtotal=subtotal+parseInt(totamnt[k]);
                }
            }
            
            if(username==transferAcnt && userId!=uuid){
                countUser=countUser+1;
                if(amountToTransfer>0){
                    valid1=valid1+1;
                     
                        if(subtotal>amountToTransfer){
                            valid2=valid2+1;
                            var net=subtotal-amountToTransfer;
                            $('.balance__value').text(net);
                               accountdetail.movements.push(amountToTransfer);
                               transferamnt.push(amountToTransfer,uuid);
                               var today = new Date();
                               var second = today.getSeconds();
                               var h=$('<div class="movements__row" id="withdrawDiv"> <div class="movements__type movements__type--withdrawal"> 1 withdrawal</div> <div class="movements__date" id=dradateid'+second+'> </div> <div class="movements__value" id=drawVal'+second+'></div></div>');
                               $('#movementid').append(h);
                               var fd = new Date(Date.now()) ;
                               uuu.push(userId);
                              

                              
                           var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                           var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                          var dateTime = date + ' ' + time;
                               $('#dradateid'+second+'').text(dateTime);
                               $('#drawVal'+second+'').text(amountToTransfer);
                               accountdetail.movementsDates.push(dateTime);

                               event.preventDefault() 
                        }
                    
                }
            }
        }
        if(countUser==0){
            alert("Please enter valid user");
        }
        else if(valid1==0){
            alert("You can't send 0 amount");
        }
        else if(valid2==0){
            alert("You dont have this much amount in you account");
        }
        event.preventDefault() 
    })
  
    $("#btnClose" ).click(function(event) {

        var closeUserId= $('#closeUserId').val();
        var closePwd=$('#closePwd').val();

        if(closeUserId=='' || closePwd==''){
            alert("Please enter all field");
        }
        else if(closeUserId==uuuid && closePwd==pPin){
            containerApp.style.opacity = "0";
            $('.welcome').text("Bye "+uUsername+" ! Hope to See you Again");
            $('.login').hide();
            clearInterval(intval);
        }
        
        event.preventDefault()
    });


    function updateCountDown(){
        const minutes = Math.floor(time/60);
        let second = time % 60;
      
        // console.log(minutes+":"+second)
        console.log(labelTimer);
        labelTimer.innerHTML = minutes +":"+second;
    
        if(time>0){
            time--;
        } 
        console.log(time)
      }