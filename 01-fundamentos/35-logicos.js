function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise xor
  const comprarTv = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete;

  return { comprarSorvete, comprarTv, comprarTv50, manterSaudavel };
}

console.table(compras(true, true));
console.table(compras(true, false));
console.table(compras(false, true));
console.table(compras(false, false));
