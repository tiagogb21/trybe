Parte I - Comandos de Input e Output

1 - Navegue até a pasta unix_tests ;

    cd unix_tests

2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

    touch skills2.txt

    cat > skills2.txt

        Internet
        Unix
        Bash

3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

    cat >> skills2.txt

        html
        css
        javascript
        java
        php

    sort < skills2.txt

4 - Conte quantas linhas tem o arquivo skills2.txt .

    wc -l skills2.txt

5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

    sort < skills2.txt > head -3 top_skills.txt

6 - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

    touch phrases2.txt

    cat > phrases2.txt

    " O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis." (José de Alencar)

    " Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante." (Augusto Branco)

7 - Conte o número de linhas que contêm as letras br .

    grep -inc 'br' phrases2.txt

8 - Conte o número de linhas que não contêm as letras br .

    grep -ivnc 'br' phrases2.txt

9 - Adicione dois nomes de países ao final do arquivo phrases2.txt .

    cat >> phrases2.txt

    Brasil
    Estados Unidos

10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

    cat phrases2.txt countries.txt > bunch_of_things.txt

11 - Ordene o arquivo bunch_of_things.txt .

    sort < bunch_of_things.txt > bunch_of_things1.txt