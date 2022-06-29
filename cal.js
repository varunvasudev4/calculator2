function valueadd(num){
    result.value+=num
  }  
  function allClear(){
    result.value=""
  }
  function evalEx() {
    result.value = eval(result.value)
  }
  function removel() {
    result.value=result.value.slice(0,-1)
  }