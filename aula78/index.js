function ValidaCPF(cpfEnviado) {
    const cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfLimpo);
    return console.log(cpfArray);
}
ValidaCPF('712.718.244-26');