/**
 * Useful for Check Auth tokens or hash your objects for the next coffee sipp.
 *
 * @author Rolando / https://emptyart.github.io/
 */

export default class YipySess {
  constructor() {
    this.keys = [];
    this.canHaveCookies = false;
    this.expirationDays = 2;
    this.setInitCookie()
  }

  set(key,value){
    var ret = true;
    var d = new Date();
    d.setTime(d.getTime() + (this.expirationDays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
    if (document.cookie.indexOf(key) < 0 ) {
      ret = false;
    }else{
      this.pushNewKey(key);
    }
    return ret;
  }

  pushNewKey(key){
    if(this.keys.indexOf(key) < 0){
      this.keys.push(key);
    }
  }

  get(key){
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(key) == 0) {
            return c.substring(key.length+1, c.length);
        }
    }
    return "";
  }

  check(key){
    var ret = true;
    if (document.cookie.indexOf(key) < 0 ) {
      ret = false;
    }
    return ret;
  }

  remove(key){
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  setInitCookie(){
    if(!this.set("initcookie","initval")){
      throw new Error("Cookies cant be set");
    }else{
      this.canHaveCookies = true;
    }
  }

}
