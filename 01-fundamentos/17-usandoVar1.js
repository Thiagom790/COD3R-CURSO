// Escopo é até onde a sua varivael está visivel
/* O var tem 2 escopos
 * O global e o de funcao
 */
{
  {
    {
      var sera = "Será";
    }
  }
}
console.log(sera);

function test() {
  var local = 123;
}

test();
// console.log(local); // da erro
