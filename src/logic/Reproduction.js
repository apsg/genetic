export default class Reproduction {

    static crosoverPoints = 2;
    static mutationChance = 0.1;

    static cross(genome1, genome2) {
        const code1 = genome1.toBin();
        const code2 = genome2.toBin();

        if (code1.length !== code2.length) {
            throw new Error('These are different genomes. The length do not match.');
        }

        let points = [];

        for (let i = 0; i < this.crosoverPoints; i++) {
            points.push(Math.floor(code1.length * Math.random()));
        }

        points.sort();

        let newCode = '';
        let current = 0;
        let first = true;

        for (let point of points) {
            if (first)
                newCode += code1.substr(current, point - current);
            else
                newCode += code2.substr(current, point - current);

            current = point;

            first = !first;
        }

        if (first)
            newCode += code1.substr(current);
        else
            newCode += code2.substr(current);


        return Reproduction.mutate(newCode);
    }

    static mutate(code) {

        code = code.split('');

        for (let i = 0; i < code.length; i++) {
            if (Math.random() < this.mutationChance) {
                code[i] = code[i] == 0 ? 1 : 0;
            }
        }

        return code.join('');
    }
}
