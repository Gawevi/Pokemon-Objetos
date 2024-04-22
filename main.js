function Pokemon (nome, tipo, fraqueza, altura) {
    this.nome = nome;
    this.tipo = tipo;
    this.fraqueza = fraqueza;
    this.altura = altura;
}

function PokemonEletrico (nome, altura) {
    Pokemon.call (this, nome, "Elétrico", "Terrestre", altura);
}

function PokemonAquatico (nome, altura) {
    Pokemon.call (this, nome, "Aquático", "Elétrico", altura);
}

function PokemonFogo (nome, altura) {
    Pokemon.call (this, nome, "Fogo", "Aquático", altura);
}

const Pikachu = new PokemonEletrico("Pikachu", "0,4m");
console.log(Pikachu);
const Charizard = new PokemonFogo("Charizard", "1,7m");
console.log(Charizard);
const Squirtle = new PokemonAquatico("Squirtle", "0,5m");
console.log(Squirtle);

function PikachuDoAsh() {
    Pokemon.call (this, "Pikachu do Ash", "Elétrico", "Terrestre", "0,4m");

    this.ChoqueDoTrovao = function() {
        console.log("Pikachu usa Choque do Trovão, é super-efetivo!");
    }
}

const PikachuDoAsh1 = new PikachuDoAsh();
console.log(PikachuDoAsh1);
PikachuDoAsh1.ChoqueDoTrovao();