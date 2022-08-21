const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);