$(function(){

  console.log('ciao');

  on_off();

  stampa('Metti alla prova la tua mente!','#title');

  var rdmNumeri = [];
  var numUtente = [];
  var risultato = [];


  $('#start').click(function(){
    $(this).hide();

    while (rdmNumeri.length < 5){
      var num = random_nmb(1,100);
      if(!rdmNumeri.includes(num)){
        rdmNumeri.push(num);
      }
    };

    stampa('Memorizali! : '+  rdmNumeri.join(' - '), '#numbers')
    
        
    setTimeout(function(){
      $('#numbers').hide();
      $('#input').show();
      $('#game').show();
    }, 5000);

  });

  $('#game').click(function(){
    if(numUtente.length < 5){
      if(numUtente.includes($('input').val())){
        stampa('numero gia inserito: '+ $('input').val(),'#attention')
      }else{
        numUtente.push($('input').val());
        stampa('Numeri inseriti: '+ numUtente.join(' - '), '#attention')
      }
    $('input').val('').focus();
    }

    if(numUtente.length === 5){

      for(var number of numUtente){
        if(rdmNumeri.includes(parseInt(number))){
          risultato.push(number);
        }
      };

      setTimeout(function(){
        on_off();
        stampa('Attendi...', '#attention');
      }, 500);

      setTimeout(function(){
        if(risultato.length === 0){
          stampa('Hai perso!!!', '#attention')
        }else if(risultato.length === 5){
          stampa('Hai VINTO!!!', '#attention')
        }else{
          stampa('Complimenti ti sei ricordato questi numeri: '+ risultato.join(' - '), '#attention')
        }
      }, 1800);
    }

  });




  function random_nmb(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
  };

  function stampa(text, target){
    $(target).text(text);
  };
  
  function on_off(){
    $('#input').hide();
    $('#game').hide();
  }

});