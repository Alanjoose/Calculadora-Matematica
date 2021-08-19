/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Alan Jose, Flávio Batista, Heder Matheus, Miriã Araujo.
 * Curso: TSI ou IPI
 * Segunda Avalição Individual
 *
 */
const prompt = require('prompt-sync')();
var opcao = - 1;

do
{
	var cont = 30;
	imprimirMenu();
	opcao = Number(prompt('Digite uma opção: '));
	for(i = 0; i < cont; i++)
	{
		process.stdout.write("*");
	}

	switch (opcao)
	{
		case 0:
			break;
		case 1:
			somam();
			break;
		case 2:
			subm();
			break;
		case 3:
			mult();
			break;
		case 4:
			mat1();
			break;
		case 5:
			mat1();
			break;
		case 6:
			manu();
			break;
		case 7:
			sobre();
			break;

		default:
			console.log("\n\nDIGITE UMA DAS OPÇÕES ACIMA");
	}
} while (opcao != 0);

function imprimirMenu()
{
	var cont = 30;
	console.log('\n');
	for(i = 0; i < cont; i++)
	{
		process.stdout.write("*");
	}
	console.log('\n~~ OPERAÇÕES ~~');
	console.log('Opções:');
	console.log('(1) Somar');
	console.log('(2) Subtrair');
	console.log('(3) Multiplicar');
	console.log('(4) Determinante');
	console.log('(5) Transposta');
	console.log('(6) Manual');
	console.log('(7) Sobre');
	console.log('(0) Sair');
}

function somam(matriz1, matriz2)
{
	console.log();
	console.log('Para que a soma ocorra, o numero de linhas e colunas devem ser iguais entre si.\n');
	//Matriz 1
	var linhas1 = Number(prompt('Matriz 1 - Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('Matriz 1 - Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('Matriz 2 - Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('Matriz 2 - Digite a quantidade de colunas da matriz: '));

	if(linhas1 == linhas2 && colunas1 == colunas2)
	{
		//Matriz 1
		var matriz1 = [];
		for(var i = 0; i < linhas1; i++)
		{
			matriz1[i] = [];
			for(var j = 0; j < colunas1; j++)
			{
				matriz1[i][j] = '';
			}
		}
		for (var l = 0; l < linhas1; l++)
		{
			for(var c = 0; c < colunas1; c++)
			{
				matriz1[l][c] = Number(prompt(`Matriz 1 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//Matriz 2
		var matriz2 = [];
		for(var i = 0; i < linhas2; i++)
		{
			matriz2[i] = [];
			for(var j = 0; j < colunas2; j++)
			{
				matriz2[i][j] = '';
			}
		}
		for (var l = 0; l < linhas2; l++)
		{
			for(var c = 0; c < colunas2; c++)
			{
				matriz2[l][c] = Number(prompt(`Matriz 2 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//somar
		var results = [];
		for(var i = 0; i < matriz1.length; i++)
		{
			results[i] = [];
			for(var j = 0; j < matriz1.length; j++)
			{
				results[i][j];
			}
		}
		for(var i = 0; i < matriz1.length; i++)
   		{
    	    for(var j = 0; j < matriz1[i].length; j++)
	        {
        		results[i][j] = matriz1[i][j] + matriz2[i][j];
        	}
    	}
    	console.log('\nA soma é : ' + results + '\n');
	}else
	{
		console.log('\nImpossivel realizar a operação, por favor escolha matrizes de mesma ordem.');
	}
}

function subm()
{
	console.log();
	console.log('\nPara que a subtracao ocorra, o numero de linhas e colunas devem ser iguais entre si.\n');
	//Matriz 1
	var linhas1 = Number(prompt('Matriz 1 - Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('Matriz 1 - Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('Matriz 2 - Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('Matriz 2 - Digite a quantidade de colunas da matriz: '));
	if(linhas1 == linhas2 && colunas1 == colunas2)
	{
		//Matriz 1
		var matriz1 = [];
		for(var i = 0; i < linhas1; i++)
		{
			matriz1[i] = [];
			for(var j = 0; j < colunas1; j++)
			{
				matriz1[i][j] = '';
			}
		}
		for (var l = 0; l < linhas1; l++)
		{
			for(var c = 0; c < colunas1; c++)
			{
				matriz1[l][c] = Number(prompt(`Matriz 1 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//Matriz 2
		var matriz2 = [];
		for(var i = 0; i < linhas2; i++)
		{
			matriz2[i] = [];
			for(var j = 0; j < colunas2; j++)
			{
				matriz2[i][j] = '';
			}
		}
		for (var l = 0; l < linhas2; l++)
		{
			for(var c = 0; c < colunas2; c++)
			{
				matriz2[l][c] = Number(prompt(`Matriz 2 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//subtrair
		var resultm = [];
		for(var i = 0; i < matriz1.length; i++)
		{
			resultm[i] = [];
			for(var j = 0; j < matriz1.length; j++)
			{
				resultm[i][j];
			}
		}
		for(var i = 0; i < matriz1.length; i++)
	    {
	        for(var j = 0; j < matriz1[i].length; j++)
	        {
	        	resultm[i][j] = matriz1[i][j] - matriz2[i][j];
	        }
	    }
	    console.log('\nA subtracao é : ' + resultm + '\n');
	}else
	{
		console.log('\nImpossivel realizar a operacao, por favor escolha matrizes de mesma ordem.');
	}
}

function mult()
{
	console.log();
	console.log('Para que a multiplicacao ocorra, o numero de colunas da primeira deve ser igual ao de linhas da segunda.\n');
	//Matriz 1
	var linhas1 = Number(prompt('Matriz 1 - Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('Matriz 1 - Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('Matriz 2 - Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('Matriz 2 - Digite a quantidade de colunas da matriz: '));
	if(colunas1 == linhas2)
	{
		//Matriz 1
		var matriz1 = [];
		for(var i = 0; i < linhas1; i++)
		{
			matriz1[i] = [];
			for(var j = 0; j < colunas1; j++)
			{
				matriz1[i][j] = '';
			}
		}
		for (var l = 0; l < linhas1; l++)
		{
			for(var c = 0; c < colunas1; c++)
			{
				matriz1[l][c] = Number(prompt(`Matriz 1 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//Matriz 2
		var matriz2 = [];
		for(var i = 0; i < linhas2; i++)
		{
			matriz2[i] = [];
			for(var j = 0; j < colunas2; j++)
			{
				matriz2[i][j] = '';
			}
		}
		for (var l = 0; l < linhas2; l++)
		{
			for(var c = 0; c < colunas2; c++)
			{
				matriz2[l][c] = Number(prompt(`Matriz 2 - linha ${l+1} ,coluna ${c+1} :`));
			}
		}
		//multiplicacao
		const somandoTudo = ( a, b ) => a + b
  		const multipliquePela = ( coluna ) => ( calculado, valorLinha, pos ) => 
  		{
    		calculado.push( valorLinha * coluna[ pos ] )
    		return calculado
  		}
  		const multipliqueLinhaColuna = ( linha, coluna ) => 
    	linha.reduce( multipliquePela( coluna ), [] ).reduce( somandoTudo )
  		const pegueLinha = ( pos, matriz ) => matriz[ pos ]
  		const pegueColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )
 		const matrizCalculada = ( [ m1, m2 ] = matrizes ) => 
 		{
    		return m1.map( ( linha, pos ) => 
    		{
		      	let contador = 0
		      	let vezes = m1.length
		      	const valores = []
		      	while ( vezes ) 
		      	{
		        	valores.push( multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
		        	pegueColuna( contador, m2 ) ) )
		        	--vezes
		        	++contador
		      	}
		      	if ( !vezes ) return valores
	    	} )
  		}
  		const resultadoFinal = matrizCalculada( [ matriz1, matriz2 ] )
  		console.log('\nresultado: ', resultadoFinal);
	}else
	{
		console.log('\nImpossivel realizar a operacao, por favor garanta que o numero de colunas da primeira matriz eh igual ao numero de linhas da segunda matriz.');
	}
}

function mat1()
{
	console.log();
	//Matriz 1
	var linhas1 = Number(prompt('Matriz 1 - Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('Matriz 1 - Digite a quantidade de colunas da matriz: '));
	var matriz1 = [];
	for(var i = 0; i < linhas1; i++)
	{
		matriz1[i] = [];
		for(var j = 0; j < colunas1; j++)
		{
			matriz1[i][j] = '';
		}
	}
	for (var l = 0; l < linhas1; l++)
	{
		for(var c = 0; c < colunas1; c++)
		{
				matriz1[l][c] = Number(prompt(`Matriz 1 - linha ${l+1} ,coluna ${c+1} :`));
		}
	}
	if(opcao == 4)
	{
		determinante(matriz1);
	} else if(opcao == 5)
	{
		transposta(matriz1);
	}
}

function determinante(matriz1)
{
	var resultd = 0;
	var ordem1 = matriz1.length;

	if(ordem1 === 1)
	{
		resultd = matriz1[0][0];
		console.log('\nO determinante é : '+resultd);
	}
	if(ordem1 === 2)
	{
		resultd = matriz1[0][0] * matriz1[1][1] - matriz1[0][1] * matriz1[1][0];
		console.log('\nO determinante é : '+resultd);
	}	
	else {
		console.log('\n So funciona ate segunda ordem.');
	}
}

function transposta(matriz1)
{
	var newArray = [];
	for(var i = 0; i < matriz1.length; i++)
	{
		newArray.push([]);
	}

	for(var i = 0; i < matriz1.length; i++)
	{
		for(var j = 0; j < matriz1.length; j++)
		{
			newArray[j].push(matriz1[i][j]);
		}
	}
	var trasp = '';
	for(var l = 0; l < matriz1.length; l++)
	{
		for(var c = 0;c < matriz1.length; c++)
		{
			if(c < matriz1.length - 1)
			{
				trasp += newArray[l][c] + '\t\t';
			}else
			{
				trasp += newArray[l][c] + '\n';
			}
		}
	}
	console.log('A matriz transposta é : \n');
	console.log(trasp);
}

function manu()
{
	console.log('\nSoma de Matrizes\n');
	console.log('Para que seja realizada a soma entre matrizes, ambas necessitam possuir mesma ordem. (Cada elemeto de uma matriz é somado com o elemento de mesmo endereço na segunda matriz).');
	console.log('\nSubtração de Matrizes\n');
	console.log('A subtração compartilha do mesmo principio da soma. (Cada elemeto de uma matriz é subtraido com o elemento de mesmo endereço na segunda matriz).');
	console.log('\nMultiplicação de Matrizes\n');
	console.log('Na multiplicação o número de colunas da primeira matriz deve ser igual ao de linhas da segunda. (Os elementos da primeira linha da matriz A se multiplicam com os de enderço correspondente na matriz B, continua-se até o fim. Onde é realizada uma soma do resultado desta multiplicação).');
	console.log('\nCálculo de determinantes\n');
	console.log('Para que seja realizado o cálculo de determinantes a matriz deve possuir ordem quadrada, ou seja, matrizes que possuem o número de linhas e colunas iguais.');
	console.log('\nMatriz transposta\n');
	console.log('É o nome dado à matriz que passa por uma troca no arranjo de suas linhas para colunas. (Os elementos que estavam arranjados em linhas tornam-se colunas e os que estavam em colunas viram linhas).');
	console.log('\nFonte : Brasil escola');
}

function sobre()
{
	console.log('\nIPI - IFPE - Igarassu');
	console.log('Alunos');
	console.log('Alan Jose \t->\t Github : Alanjoose');
	console.log('Flavio Batista \t->\t Github : FlavioBatistaVS');
	console.log('Heder Matheus \t->\t Github : Matheusblz');
	console.log('Miriã Araujo \t->\t Github : miriaAS');
	console.log('Version : Ultimate');
}