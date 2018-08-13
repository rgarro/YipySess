# YipySess

A Cookie Session Helper to Dip your Reactjs projects.
Useful for Check Auth tokens or hash your objects for the next coffee sipp.

#### npm i yipysess

```html
<script>
import YipySess from "yipysess";

construct() {
  this.cookies_jar = new YipySess();
  this.cookies_jar.set("testString","testVal");
  var val = this.cookies_jar.get("testString");
  this.cookies_jar.remove("testString");
}

</script>

```
[![We were Goodfellas!](https://raw.githubusercontent.com/rgarro/YipySess/master/yipySess.PNG)]
