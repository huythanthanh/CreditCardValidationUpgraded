function validate(n){
  var n = n.toString().split(''),
      is_odd = n.length & 1;
  
  return !(n.map(function(el, i) {
    var val = (is_odd) ? ((i & 1) ? parseInt(el) * 2 : el) : (!(i & 1) ? parseInt(el) * 2 : el);
    return (val > 9) ? val - 9 : val;
  }).reduce(function(p, c) {
    return parseInt(p) + parseInt(c);
  }) % 10);
}

$('#val').click(function() {
  var cc = $('#cc');
  var ccWrapper = $('#cc-wrapper');
  var ccVal = cc.val();
  var isValid = true;
  
  ccVal = ccVal.replace(/[^0-9]/g, '');
  
  if (!(/^\d+$/.test(ccVal)) ||
     (ccVal.length !== 16 && ccVal.length !== 15))
  { // check length 15 or 16
    isValid = false; 
  }
  
  if (isValid) {
    isValid = validate(ccVal);
  }
  
  ccWrapper[0].className = '';
  
  if (isValid) {
    ccWrapper.addClass('pass');
  } else {
    ccWrapper.addClass('fail animated shake');
  }
  
  setTimeout(function() {
    ccWrapper.removeClass('animated shake');
  }, 500);
});