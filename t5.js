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

		default:
			console.log("\n\nDIGITE UMA DAS OPCOES ACIMA");
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
	console.log('\n~~ OPERACOES NUMERICAS ~~');
	console.log('Opções:');
	console.log('(1) Somar');
	console.log('(2) Subtrair');
	console.log('(3) Multiplicar');
	console.log('(4) Determinante');
	console.log('(5) Transposta');
	console.log('(0) Sair');
}

function somam(matriz1, matriz2)
{
	console.log();
	//Matriz 1
	var linhas1 = Number(prompt('m1 Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('m1 Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('m2 Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('m2 Digite a quantidade de colunas da matriz: '));

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
				matriz1[l][c] = Number(prompt(`Matriz 1 linha ${l} ,coluna ${c} :`));
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
				matriz2[l][c] = Number(prompt(`Matriz 2 linha ${l} ,coluna ${c} :`));
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
    	console.log('A soma eh : ' + results + '\n');
	}else
	{
		console.log('As matrizes devem ter a msm ordem');
	}
}

function subm()
{
	console.log();
	//Matriz 1
	var linhas1 = Number(prompt('m1 Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('m1 Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('m2 Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('m2 Digite a quantidade de colunas da matriz: '));
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
				matriz1[l][c] = Number(prompt(`m1 linha ${l} ,coluna ${c} :`));
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
				matriz2[l][c] = Number(prompt(`m2 linha ${l} ,coluna ${c} :`));
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
	    console.log('A subtracao eh : ' + resultm + '\n');
	}else
	{
		console.log('As matrizes devem ter a msm ordem');
	}
}

function mult()
{
	console.log();
	//Matriz 1
	var linhas1 = Number(prompt('m1 Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('m1 Digite a quantidade de colunas da matriz: '));
	//Matriz 2
	var linhas2 = Number(prompt('m2 Digite a quantidade de linhas da matriz: '));
	var colunas2 = Number(prompt('m2 Digite a quantidade de colunas da matriz: '));
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
				matriz1[l][c] = Number(prompt(`Matriz 1 linha ${l} ,coluna ${c} :`));
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
				matriz2[l][c] = Number(prompt(`Matriz 2 linha ${l} ,coluna ${c} :`));
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
  		console.log('resultadoFinal: ', resultadoFinal)
	}else
	{
		console.log('Impossível realizar a operação, por favor garanta que o número de colunas da primeira matriz é igual ao número de linhas da segunda matriz.');
	}
}

function mat1()
{
	console.log();
	//Matriz 1
	var linhas1 = Number(prompt('m1 Digite a quantidade de linhas da matriz: '));
	var colunas1 = Number(prompt('m1 Digite a quantidade de colunas da matriz: '));
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
				matriz1[l][c] = Number(prompt(`Matriz 1 linha ${l} ,coluna ${c} :`));
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
		console.log('O determinante eh : '+resultd);
	}
	if(ordem1 === 2)
	{
		resultd = matriz1[0][0] * matriz1[1][1] - matriz1[0][1] * matriz1[1][0];
		console.log('O determinante eh : '+resultd);
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
	console.log('A matris transposta eh : \n');
	console.log(trasp);
}