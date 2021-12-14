const cpf = require('./newCPF');
const newCpf = new cpf.GenerateCpf();
const generalVerify = {
    
    usableCPF: newCpf.generateNewCpf(),
    formatCpf: function (cpf) {
        const cpfString = cpf.toString();
        let formatedCpf = cpfString.split("");
        for (let i = 3; i < formatedCpf.length; i += 3) {
            formatedCpf.splice(i, 1);
        }
        return formatedCpf.map(Number);
    },

    verifyDigits: function (cpf, cpfWithDigit, fullcpf) {
        let sum1 = 0,
            sum2 = 0,
            count1 = 10,
            count2 = 11;

        for (let values of cpf) {
            sum1 += count1 * values;
            count1--;
        }

        for (let values2 of cpfWithDigit) {
            sum2 += count2 * values2;
            count2--;
        }

        const comparation = (((sum1 % 11 < 2 && fullcpf[9] === 0) || (sum1 % 11 >= 2 && 11 - (sum1 % 11) === fullcpf[9])) && ((sum2 % 11 < 2 && fullcpf[10] === 0) || (sum2 % 11 >= 2 && 11 - (sum2 % 11) === fullcpf[10])));
        
        if (comparation) {
                return true;
            
        } else {
            return false;
        }

        return "Válido"
    }

}

module.exports = {
    generalVerify
}