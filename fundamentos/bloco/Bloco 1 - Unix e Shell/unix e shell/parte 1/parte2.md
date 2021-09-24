Parte II - Manipulação & Busca

1 - Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2 - Mostre todo o conteúdo do arquivo countries.txt na tela.

    cat countries.txt

3 - Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .

    less countries.txt

4 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .

    less countries.txt | grep "Zambia"

5 - Busque por Brazil no countries.txt .

    grep "Brazil" countries.txt

6 - Busque novamente por brazil , mas agora utilizando o lower case .

    grep "brazil" countries.txt

7 - Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

    touch phrases.txt

    cat > phrases.txt

    "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo." (F. Scott Fitzgerald)

    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos." (Friedrich Nietzsche)

    "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível." (Max Weber)

8 - Busque pelas frases que não contenham a palavra fox .

    grep -iv 'fox' phrases.txt

9 - Conte o número de palavras do arquivo phrases.txt .

    wc -w phrases.txt

10 - Conte o número de linhas do arquivo phrases.txt .

    wc -l phrases.txt

11 - Crie os arquivos empty.tbt e empty.pdf .

    touch empty.tbt

    touch empty.pdf

12 - Liste todos os arquivos do diretório unix_tests .

    ls | wc -l

13 - Liste todos os arquivos que terminem com txt .

    ls *.txt

14 - Liste todos os arquivos que terminem com tbt ou txt .

    ls *.txt | *.txt

15 - Acesse o manual do comando ls .

    man ls