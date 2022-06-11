 const nomeCompleto = "Renan Rodrigues Moraes da Silva";
   var qtdnome = nomeCompleto.split(" ").length; // Divide a string em partes, a partir do espaço.
            var nome = nomeCompleto.split(" ")[0]; // Divide a string em partes a partir dos espaços e pega a primeira parte.
            var nome2 = nomeCompleto.split(' ').shift(); // Divide a string em partes a partir dos espaços e pega a primeira parte com shift.
            var lastname = nomeCompleto.split(' ').pop(); // Divide a string em partes a partir dos espaços e pega a última parte.
            var sobrenome = nomeCompleto.split(" ")[qtdnome-1]; // Divide a string em partes a partir dos espaços e pega a última parte.
            var sobrenome1 = nomeCompleto.split(" ",2)[1]; // Divide a string em partes a partir dos espaços e pega a segunda parte.
            var sobrenome2 = nomeCompleto.split(' ').slice(1, nomeCompleto.length).join(' '); // // Divide a string em partes a partir dos espaços com split, pega as partes a partir da 2ª parte com slice e uni novamente com join.
            console.log(qtdnome) // 5
            console.log(nome) // Renan 
            console.log(nome2) // Renan
            console.log(lastname) // Silva
            console.log(sobrenome) // Silva
            console.log(sobrenome1) // Rodrigues
            console.log(sobrenome2) // Rodrigues Moraes da Silva
