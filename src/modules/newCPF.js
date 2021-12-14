class GenerateCpf {

    random(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        );
    }

    generateDigits(cpf) {
        const formatedCPF = cpf.split("").map((itens) => {
            return parseInt(itens, 10);
        })
        let result = 0, multiply = cpf.length + 1, digit;

        for(let value of formatedCPF) {
            result += value * multiply
            multiply -= 1;
        }

        result % 11 < 2 ? digit = 0 : digit = 11 - (result % 11);

        return digit;
    }

    generateNewCpf() {
        const cpf = this.random();
        const firstDigit = this.generateDigits(cpf);
        const secondDigit = this.generateDigits(cpf + firstDigit); 
        const formatedCpf = cpf + firstDigit + secondDigit;
        return this.formatCpf(formatedCpf)
    }
}

module.exports = {
    GenerateCpf
};