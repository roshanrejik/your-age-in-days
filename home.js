function cal()
{
   var age= prompt('enter year age');
   var ageindays=age*365;
   document.getElementById('i').innerHTML=ageindays+'DAYS';
}
function reset()
{
    document.getElementById('i').innerHTML='  ';
}