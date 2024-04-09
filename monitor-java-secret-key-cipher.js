Java.perform(() => {
  const cipher = Java.use('javax.crypto.Cipher');
  cipher.init.overload('int','java.security.Key').implementation = function(opmode,key) {
      console.log("=========================================")
      console.log("Opmode "+opmode);
      console.log("Key "+toHex(key.getEncoded()));
      console.log("Opmode String: "+ this.getOpmodeString(opmode));
      console.log("Algorithm: "+this.getAlgorithm())
      console.log("=========================================\n")
      this.init.overload('int', 'java.security.Key').call(this, opmode, key);
  }
})

function toHex(arr) {
    var hexStr = ""
    for (var i = 0; i < arr.length; i++) {
        var hex = modulus(arr[i], 256).toString(16); // Convert integer to hexadecimal string
        if (hex.length < 2) {
            hex = "0" + hex; // Pad with zero if necessary (e.g., convert 7 to "07")
        }
        hexStr += hex;
        hexStr += " "
    }
    return hexStr
}
