$('#loginBtn').click(()=>{
  $('#login-modal').fadeIn();
  $('#taskApp').animate({
    'margin-bottom': '450px'
  },500);
  $('#loginBtn').slideUp();
});

$('#register-modal-btn').click(()=>{
  $('#login-modal').slideUp();
  $('#register-modal').fadeIn();
});

$('#login-modal-btn').click(()=>{
  $('#register-modal').slideUp();
  $('#login-modal').fadeIn();
});