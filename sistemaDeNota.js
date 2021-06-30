(function() {
    function aluno(nome = '', idade = 0, ra = 0) {
        return {
            nome: nome,
            idade: idade,
            _ra: ra,
            get ra() {
                return this._ra;
            },
            set ra(novoRA = 0) {
                this._ra = novoRA;
            },
            exame(ntExame = 0, ntMedia = 0) {
                let calculoExame = (ntExame + parseInt(ntMedia)) / 2;
                if (calculoExame >= 5.0) {
                    alert(`Aluno aprovado em exame com média maior ou igual a 5.0. Aluno: ${nome} | RA: ${ra} | Média: ${calculoExame}`);
                } else {
                    alert(`Aluno reprovado em exame com média menor que 5.0. Aluno: ${nome} | RA: ${ra} | Média: ${Math.floor(calculoExame)}`);
                }
            },
            media(nota1 = 0, nota2 = 0, callback = this.exame) {
                let calculoMedia = ((nota1 + nota2) / 2).toFixed(1);
                if (calculoMedia >= 7.0) {
                    alert(`Aluno aprovado com média maior ou igual a 7.0. Aluno: ${this.nome} | RA: ${this.ra} | Média: ${calculoMedia}`);
                } else if (calculoMedia >= 5.0 && calculoMedia < 7.0) {
                    alert(`Aluno em exame com média maior ou igual a 5.0 e menor que 7.0. Aluno: ${this.nome} | RA: ${this.ra} | Média: ${calculoMedia}`);
                    let notaExame = parseFloat(window.prompt("Informe a nota de exame"));
                    callback(notaExame, calculoMedia);
                } else {
                    alert(`Aluno reprovado média menor ou igual a 4.0. Aluno: ${this.nome} | RA: ${this.ra} | Média: ${Math.floor(calculoMedia)}`);
                }
            }
        }
    }
    const guilherme = aluno('Guilherme', 22, 209771);
    guilherme.media(4.0, 9.5);
})()