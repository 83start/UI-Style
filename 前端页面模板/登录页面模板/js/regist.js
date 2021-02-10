$(function () {
  //表单验证
  let userNameFlag = false;
  let realNameFlag = false;
  let phoneFlag = false;
  let emailFlag = false;
  let passwordFlag = false;


  let $pwd = $("input[name='password']");
  let $repwd = $("input[name='password1']");
  let checkTwoPassword = () => {
    let vals = $pwd.val();
    let revals = $repwd.val();
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if (vals == revals && vals != null && revals != null && reg.test(vals)) {
      passwordFlag = true;
    }

    return passwordFlag;
  }

  let checkRealName = () => {
    // update
    let reg = /^[\u4e00-\u9fa5]{2,6}$/;
    let vals = $("input[name='realname']").val();
    if (reg.test(vals)) {
      realNameFlag = true;
    }
    return realNameFlag;
  }

  let checkPhone = () => {
    let reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/;
    let vals = $("input[name='phone']").val();
    if (reg.test(vals)) {
      phoneFlag = true;
    }
    return phoneFlag;
  }

  let checkEmail = () => {
    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let vals = $("input[name='email']").val();
    if (reg.test(vals)) {
      emailFlag = true;
    }
    return emailFlag;
  }


  //密码验证

  $repwd.blur(function () {
    if (checkTwoPassword() == false) {
      
      $(":password + a").removeClass().addClass('icon into');
    }else{
      $(":password + a").removeClass().addClass('icon');
    }

  })

  $("input[name='email']").blur(function () {
    if (checkEmail() == false) {
      $("input[name='email'] + a").removeClass().addClass('icon into');
    } else {
      ("input[name='email'] + a").removeClass().addClass('icon');
    }
  })

  $("input[name='realname']").blur(function () {
    if (checkRealName() == false) {
      $("input[name='realname'] + a").removeClass().addClass('icon into');
    } else {
      ("input[name='realname'] + a").removeClass().addClass('icon');
    }
  })


  $("input[name='phone']").blur(function () {
    if (checkEmail() == false) {
      $("input[name='phone'] + a").removeClass().addClass('icon into');
    } else {
      ("input[name='phone'] + a").removeClass().addClass('icon');
    }
  })
















})




