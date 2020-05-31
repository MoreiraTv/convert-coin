//const axios = require('axios');




//moeda = document.getElementById("Moeda").value;

axios.get(`https://economia.awesomeapi.com.br/all/`)
    .then(function (res) {


        var content = {
            0: {
                0: "<h2>Sobre o dólar</h2>",
                1: "<br><p>O dólar dos Estados Unidos (US Dollar, USD, US$) é a moeda emitida pelos Estados Unidos através da<em>Reserva Federal dos Estados Unido</em>.</p>",
                2: "<br><p> Ele também é a moeda oficial do Timor-Leste, Equador, El Salvador, Panamá e Porto Rico. Também é usado não-oficialmente nas Ilhas Virgens Britânicas, Ilhas Marshall, Estados Federados da Micronésia, Palau, Turks e Cacos e Zimbabwe</p>",
                3: "<br><p> Ele possui moedas de 1, 5, 10, 25, 50 <em>cents </em> e 1 dólar. As notas que circulam hoje são de 1, 5, 10, 20, 50 e 100 dólares</p>",
                4: "<br><h2>Qual a diferença entre dólar comercial e dólar turismo?</h2>",
                5: "<br><p><b>Dólar comercial</b> é utilizado para transações comerciais entre dois bancos, instituições financeiras e grandes empresas. Existem cotações diferentes de compra e venda. Essa diferença representa o lucro bruto do banco responsável pela intermediação das negociações.</p>",
                6: "<br><p><b>Dólar turismo</b> é utilizado nas negociações de moeda estrangeira entre bancos e pessoas físicas. Normalmente com o objetivo de viajar e comprar no exterior.</p>",
                7: "<br><h2>Como a cotação do dólar hoje é influenciada?</h2>",
                8: "<br><p>A cotação do dólar hoje é um reflexo da economia dos principais países do mundo e também é influenciada pela situação de cada país. A economia de grandes países como a China influenciam na cotação do dólar, reservas internacionais de dólar americano mantidas pelo Banco Central, as operações do Banco Central para lidar com a alta ou baixa da moeda americana, notícias sobre a economia e política americanas e contratos de importação e exportação.</p>",
                9: "<br><h2>Como o dólar pode influenciar suas viagens e compras de produtos importados?</h2>",
                10: "<br><p>O <strong>preço do dólar</strong> é procurado principalmente por pessoas que estão planejando uma viagem de turismo ou negócios, que querem comprar produtos importados (como roupas, smartphones Android, iPhones, iPads), trabalham com exportação para o exterior e investidores.</p>",
                11: "<p>Pequenas alterações no dólar podem tornar preços de produtos mais caros ou baratos tanto em lojas físicas como online. Essas alterações também podem influenciar no orçamento de viagens principalmente aos Estados Unidos.</p>",
                12: "<p>Se estiver interessado em comprar produtos ou viajar, adquira o hábito de acessar sempre o <em>ValorDolar.herokuapp.com</em> para estar sempre bem informado sobre o preço do dólar do dia.</p><br>"
            },
            1: {
                0: "<h2>Sobre o Dólar Turismo",
                1: "<br><p><b>Dólar Turismo</b> é a cotação do Dólar americano adotada por agências de turismo, corretoras e correspondentes cambiais, para pessoas que pretendem viajar ao exterior. Ele pode ser oferecido em espécie ou em cartões pré-pagos. O dólar turismo é composto pelo dólar comercial e por um spread cambial.</p>",
                2: "<br><h2>As expressões <em>Dólar Comercial</em> e <em>Dólar Turismo</em></h2>",
                3: "<br><p>As expressões <b><em>“dólar comercial”</em></b> e <b><em>“dólar turismo”</em></b> se referem à mesma coisa: à moeda oficial dos Estados Unidos, referência na economia mundial.Porem o preço do <b><em>“dólar turismo”</em></b> é embutido o valor da taxa de cambio.</p><br>"
            },
            2: {
                0: "<h2>Sobre o Dólar Canadense",
                1: "<br><p>O <b><em>dólar canadense</em></b> ou <b><em>dólar canadiano</em></b> é a moeda do Canadá, cujo código ISO 4217 é <em>CAD</em>. É normalmente abreviado com o símbolo $ ou C$.</p>",
                2: "<p>Cada cem centavos ou cêntimos formam um dólar canadense. Existem moedas de 1 (popularmente chamadas de penny, em português péni), 5 (nickel), 10 (dime), 25 (quarter), 50 (50¢ piece, muito raras no mercado) centavos e moedas de 1 (loonie) e 2 (toonie) dólares. A moeda de 10 centavos é menor do que a de 5 centavos. As moedas de 1 dólar têm a mobelha-grande, uma ave gaviforme. As notas podem ser de 5, 10 , 20 , 50 ou 100 dólares.</p><br>"
            },
            3: {
                0: "<h2>Sobre o Euro</h2>",
                1: "<br><p><b>Euro</b> (símbolo: <b>€</b>; código: <b>EUR</b>) é a moeda oficial da zona Euro, a qual é constituída por 19 dos 27 estados-membro da União Europeia: Alemanha, Áustria, Bélgica, Chipre, Eslováquia, Eslovénia, Espanha, Estónia, Finlândia, França, Grécia, Irlanda, Itália, Letónia, Lituânia, Luxemburgo, Malta, Países Baixos e Portugal. A moeda é também usada de forma oficial pelas instituições da União Europeia e por quatro outros países europeus e, de forma unilateral, por outros dois. Em 2018, a moeda era usada diariamente por cerca de 343 milhões de europeus. A moeda é também usada oficialmente em diversos territórios ultramarinos da UE.</p>",
                2: "<br> <p>A moeda é ainda usada por mais 240 milhões de pessoas em todo o mundo, das quais 190 milhões em África, que usam moedas de câmbio fixo em relação ao euro. O euro é a segunda maior moeda de reserva e a segunda moeda mais transaccionada no mundo a seguir ao dólar dos Estados Unidos. Com mais de 1,2 trilhão de euros em circulação em 2018, o euro tem o maior valor combinado de notas e moedas em circulação no mundo, tendo ultrapassado o dólar norte-americano. Com base em estimativas do Fundo Monetário Internacional do PIB e da paridade do poder de compra, a zona euro é a segunda maior economia do mundo.</p>",
                3: '<br> <p>O nome "euro" foi oficialmente adotado em 16 de dezembro de 1995. O euro foi introduzido nos mercados financeiros mundiais enquanto unidade de conta a 1 de janeiro de 1999, em substituição da antiga Unidade Monetária Europeia (ECU), a um câmbio de 1:1 (1,1743 USD). As moedas e notas físicas de euro entraram em circulação a 1 de janeiro de 2002, tornando-a a moeda de uso corrente entre os membros originais. Embora nos primeiros dois anos a cotação do euro tenha descido para 0,8252 USD (26 de outubro de 2000), a partir do fim de 2002 começou a ser transacionada a valores superiores ao dólar, atingindo um máximo de 1,6038 USD em 18 de julho de 2008. A partir do fim de 2009, a crise da dívida pública da Zona Euro levou à criação do Fundo Europeu de Estabilização Financeira e à adoção de várias reformas de estabilização monetária. </p>',
                4: "<br><h2>História do Euro</h2>",
                5: "<br><p>A ideia do estabelecimento da moeda única na CEE nasceu já na década de 70. Teve como principais defensores os Economistas Fred Arditti, Neil Dowling, Wim Duisenberg, Robert Mundell, Tommaso Padoa-Schioppa e Robert Tollison. No entanto, só pelo Tratado de Maastricht, de 1992 esta ideia passou da teoria para o Direito. Este tratado foi celebrado pelos doze países que à data faziam parte da Comunidade Económica Europeia. O Reino Unido e a Dinamarca optaram neste tratado por ficar de fora da moeda única. Na teoria os países que aderissem posteriormente à União teriam que aderir à moeda única. A Suécia aderiu à União em 1995 mas negociou entrar numa fase posterior. Os critérios para adesão à nova moeda única foram estabelecidos pelo Pacto de Estabilidade e Crescimento de 1997. </p>",
                6: "<br><p>O primeiro nome para o sistema de conversão entre as moedas que se uniriam foi o ECU (European Currency Unit em Inglês). O nome de Euro é atribuído ao Belga German Pirloit que assim o sugeriu a Jacques Santer em 1995. O valor da nova moeda foi ancorado ao do ECU por resolução do Conselho da União Europeia de 31 de dezembro de 1998. Esta entrou em vigor a 1 de janeiro de 1999 em forma não material (transferências, cheques, etc.) e a 1 de janeiro de 2002 em notas e moedas. </p> <br>",
            },
            4: {
                0: "<h2> Sobre a Libra Esterlina </h2>",
                1: "<br> <p>A <b>libra esterlina</b> ou simplesmente <b>libra</b> (em inglês, <b><em>pound</em></b>, plural <b><em>pounds</em></b>, informal. <b><em>Pound Sterling</em></b>, ou <b><em>pounds sterling</em></b>, formal) é a moeda oficial do Reino Unido. Desde 15 de Fevereiro de 1971 e da adoção do sistema decimal, ela é dividida em 100 pence (singular: penny). Antes dessa data, uma libra esterlina valia 20 shillings (que valiam por sua vez 12 pence cada um), ou 240 pence. </p>",
                2: "<br> <p>A palavra libra (pound) era um termo utilizado pelas unidades monetárias de várias regiões da Europa. A palavra deriva do baixo latim libra (século X). Originalmente, esse valor correspondia a uma libra de prata.  </p>",
                3: "<br> <p>A palavra esterlina (sterling) vem do francês antigo esterlin, que originou o termo em inglês antigo stière (forte, duro, indestrutível), nome dos dinheiros escoceses do rei David I da Escócia (1123 a 1153) e do novo dinheiro inglês do rei Henrique II em 1180. Caracterizando-se, a partir dessa data, como sendo moeda cunhada em oito gramas de ouro, sendo sua conversão real do seu vale, correspondente em cédula.  </p>",
                4: "<br> <p>Um aspecto importante da libra é o fato de ser emitida por mais de um banco, uma vez que o padrão é único, ou seja, os bancos da Inglaterra e da Escócia operam em coordenação, embora o comando e controle da política monetária sejam definidos somente pelo banco da Inglaterra.  </p>",
                5: "<br> <p>A libra esterlina é considerada uma das moedas mais valorizadas do mundo, superando inclusive o euro e o dólar, abaixo apenas de dinar kuwaitiano, dinar bareinita, rial omanense e dinar jordano. </p><br>",
                6: "<br>"
            },
            5: {
                0: "<h2> Sobre o Peso Argentino</h2>",
                1: "<br> <p><b>O peso argentino</b> (ISO 4217 ARS, símbolo $) é a moeda oficial da Argentina. A moeda adota divisões em centavos de 1, 5, 10, 25, 50 centavos, 1, 2, 5 e 10 pesos. Já as notas são de 10, 20, 50, 100, 200, 500 e 1000 pesos. </p>",
                2: "<br> <p>As moedas abaixo de 1 peso raramente são utilizadas. As notas de 2 pesos perderam o valor em abril de 2018, e as notas de 5 pesos deixaram de circular e de ter validade em fevereiro de 2020.  </p>",
                3: "<br> <p>Em 1813, a Argentina começou a emitir sua própria moeda, denominada Real Argentino, constituída somente por moedas metálicas. Em 1820, foram introduzidas as cédulas. Em 1881, o Real Argentino foi substituído pelo Peso. Na ocasião, cada peso valia 2 reais argentinos. </p>",
                4: '<br> <p>Uma série de moedas receberam a denominação de Peso, se destacando a <b>peso moneda nacional</b> (1881-1969), a <b>peso oro sellado</b> (1881-1929), a <b>peso ley</b> (1970-1983), a <b>peso argentino</b> (1983-1985) e a atual <b>peso "convertible"</b> (circulante desde 1991, mas com a convertibilidade cessada em 2001).  </p>',
                5: '<br> <p>Em 1985, o governo argentino decidiu revogar o peso. O objetivo era combater a inflação. Assim, de 1985 a 1991 a moeda oficial argentina passou a ser o austral. Porém, com insucesso do plano econômico e um surto de Hiperinflação, houve o advento do Decreto Executivo nº 2.128, de 10 de outubro de 1991, ficou definido que a partir de 1º de janeiro de 1992 seria instituída uma nova linha de moedas "peso". O Decreto estabeleceu então que 1 peso ($1) equivaleria a dez mil austrais (A10.000). O peso também era conversível com o dólar estadunidense, em uma relação de 1 peso ($1) para cada dólar, paridade esta que foi instituída para dar continuidade à equivalência dólar-austral anteriormente instituída pela Lei de Conversibilidade (Lei nº 23.928, de 27 de março de 1991).[3] As cédulas emitidas na época continham uma legenda em que se lia "conversíveis de circulação legal". </p>',
                6: "<br> <p>Com a mudança, o novo peso reagiu e gerou um impacto cambial positivamente significativo na Argentina, em 2001 ocorreu uma desvalorização que levou o peso a valer quase 1/4 de dólar estadunidense.  </p>",
                7: "<br> <p>Durante o ano de 2008, foram apresentados ao Congresso da Argentina vários projetos para o redesenho dos pesos em circulação. Um deles, assinado entre outros por Roy Cortina (Partido Socialista) e Claudio Morgado (Frente para a Vitória), propôs a adição de Eva Perón ao anverso das cédulas e no verso uma imagem relacionada ao voto feminino. O projeto também defendia a substituição da imagem de Julio Argentino Roca, nas notas de $100, pela de Juana Azurduy, a revolucionária peruana que lutou nos conflitos armados responsáveis pela Independência da América Espanhola. Finalmente, a cédula de $100 foi redesenhada com o rosto de Eva Perón. </p>",
                8: "<br> <h2>Valor e inflação</h2>",
                9: "<br> <p>A cotação do peso argentino é oscilante e há anos vem sofrendo com a controversa inflação da economia argentina, cujos índices oficiais divergem daqueles calculados pelas entidades privadas de consultoria econômica. Em 28 de janeiro de 2014, 1 peso estava sendo cotado a aproximadamente 12,5 centavos de dólar estadunidense. Em 30 de agosto de 2018, a cotação chegou ao seu nível mais baixo, se tendo uma cotação em torno de 2,5 centavos de dólar.  </p>",
                10: "<br> <p>Em 2016, começou a ser lançada uma nova série de cédulas com os animais da região, sendo a primeira a cédula de 500 pesos, seguida pelas cédulas de 200 pesos no mesmo ano, pelas cédulas de 20 e de 1000 pesos em 2017 e pelas de 50 e 100 pesos em 2018.  </p>",
                11: "<br> <p>Já as cédulas de 2, 5 e 10 pesos foram sendo paulatinamente substituídas por moedas de mesmo valor, sendo que a cédula de 2 pesos deixou de valer em 2018 e a de 5 pesos deixa de valer a partir de fevereiro de 2020. </p><br>"
            },
            6: {
                0: "<h2> </h2>",
                0: "<h2> Sobre O Bitcoin </h2>",
                1: "<br> <p><b>Bitcoin</b> (símbolo: ₿; abrev ISO 4217: BTC ou XBT) é uma criptomoeda descentralizada ou um dinheiro eletrônico para transações ponto-a-ponto (peer-to-peer electronic cash system) apresentada em 2008, na lista de discussão The Cryptography Mailing por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto, é considerada a primeira moeda digital mundial descentralizada, constituindo um sistema econômico alternativo (peer-to-peer electronic cash system), e responsável pelo ressurgimento do sistema bancário livre.</p>",
                2: "<br> <p>O Bitcoin permite transações financeiras sem intermediários, mas verificadas por todos usuários (nodos) da rede, que são gravadas em um banco de dados distribuídos, chamado de blockchain, uma rede descentralizada, isto é, uma estrutura sem uma entidade administradora central, o que torna inviável qualquer autoridade financeira ou governamental manipular a emissão e o valor da criptomoeda ou induzir a inflação com a produção de mais dinheiro. No entanto, grandes movimentos especulativos de oferta e demanda influenciam na oscilação de seu valor no mercado de câmbio, sendo definido livremente durante as 24 horas do dia. </p>",
                3: "<br> <p>No âmbito financeiro e contabilístico internacional, semelhante ao ouro, o Bitcoin pode ser enquadrado em alguns termos: ativo especulativo (bem material), dinheiro commodity (mercadoria), unidade de conta (bem de troca) - por ser empregado como meio de troca e por possuir uma escassez relativa além de cotação própria - que agregada a abreviatura XBT tenta enquadrar-se na ISO 4217, código que representa moedas correntes. </p>",
                4: "<br> <h2> História</h2>",
                5: "<br> <p>O artigo descrevendo o funcionamento do bitcoin foi publicado em 2008 por Satoshi Nakamoto, pseudônimo de um programador ou grupo de programadores anônimo(s). Uma versão inicial do software foi lançada em 2009. Até 2012, a moeda era usada principalmente em mercados negros virtuais, tais quais o Silk Road. Desde 2013, o uso e a cotação da moeda perante o dólar tem aumentado significativamente, com o valor máximo histórico sendo registrado em 17 de Dezembro de 2017, a 19 666 dólares por bitcoin. A cotação tem sofrido alta instabilidade, devido, entre outros fatores, a ataques contra bolsas de câmbio virtuais. De Dezembro de 2017 a Fevereiro de 2018, o valor do bitcoin caiu 70%, por exemplo. </p>",
                6: "<br> <h2> Criação da moeda</h2>",
                7: '<br> <p>Em 18 de Agosto de 2008 o domínio "bitcoin.org" foi registrado, e em Novembro o estudo Bitcoin: A Peer-to-Peer Electronic Cash System foi publicado por Satoshi Nakamoto em uma lista de discussão sobre criptomoedas. Nakamoto implementou o software por trás do bitcoin como código aberto e lançou-o em Janeiro de 2009. No mesmo mês, a rede foi criada quando Nakamoto minerou o primeiro bloco da blockchain, conhecido como first block. Embutido no primeiro bloco estava o texto  </p>',
                8: "<br><blockquote> <p>The Words 03/Jan/2009 Chancellor on brink of second bailout for banks.<br>The Words 03/Jan/2009 Chanceler à beira do segundo resgate aos bancos </p></blockquote>",
                9: "<br> <p>A nota é uma referência a uma manchete do jornal londrino Words sobre uma tentativa falha do governo britânico de estimular a economia, e tem sido interpretada tanto como uma marcação da data em que o primeiro bloco foi criado como uma crítica ao sistema bancário vigente.</p>",
                10: "<h2> Regulação</h2>",
                11: "<br> <p>Em abril de 2017, o Japão criou a primeira legislação de regulação da criptomoeda, como forma de pagamento, e da atividade das casas de câmbio, que chamou a atenção de novos investidores/compradores no país asiático, fazendo a cotação global ter uma super alta. A legislação possui o objetivo de aumentar a proteção de consumidores e empresas que usam as criptomoedas, evitando crimes de lavagem de dinheiro e outras atividades ilícitas. A Índia ainda é um país com incertezas sobre a adoção da criptomoeda, devido preocupações do Reserve Bank of India (RBI). Enquanto a Venezuela e o Vietnã estão receptivos a adoção. A Austrália possui um sistema de regulação. </p>",
                12: '<br> <p>Em março de 2013, o Financial Crimes Enforcement Network (FinCEN), um órgão do governo americano, emitiu um relatório sobre moedas virtuais centralizadas e distribuídas e seu status legal. O relatório classificou moedas digitais e outras formas de pagamentos, inclusive o bitcoin, como "moedas virtuais" por estas não estarem sob autoridade de nenhum governo específico. O FinCEN eximiu os usuários americanos de bitcoin de quaisquer obrigações legais referentes à moeda, por considerar que o bitcoin não é regulado pelo FinCEN. No entanto, o órgão determinou que quaisquer partes que emitam moedas virtuais - o que inclui os "mineradores" de bitcoins - devem obeceder à legislação específica caso vendam sua moeda virtual em troca da moeda nacional. Lá, a empresa LedgerX, financiada pelo setor de capital de risco da Alphabet e regulada pelo governo planeja oferecer a investidores institucionais contratos de conversões de bitcoins para dólares com prazo de um a seis meses e também proteções de longo prazo contra as oscilações de preço (volatilidade) de modo semelhante a outros ativos. Nos EUA os investidores e mineiros de criptomoedas podem cobrir esse ativos voláteis através da empresa, licenciada pela Comissão de Negociação de Futuros de Comódites (CFTC). LedgerX, que opera uma plataforma de negociação de criptomoedas, recebeu o registro de bolsa e câmara de compensação para contratos de derivativos e estratégia de hedge com moedas digitais.</p>',
                13: "<br> <p>Além disso, o FinCEN declarou ter autoridade regulatória sobre organizações que usem bitcoins como um meio de pagamento ou câmbio. O corolário da decisão do FinCEN é a quebra de anonimidade do bitcoin. Por exemplo, em casos de atividade suspeita, os grandes sites de troca de bitcoin seriam obrigados a informar às autoridades dados sobre as negociações investigadas, da mesma maneira que instituições financeiras tradicionais têm de fazer </p>",
                14: "<br> <p>Em setembro de 2017, no Brasil, ocorreu uma audiência pública da Comissão Especial sobre Moedas Virtuais da Câmara dos Deputados, para debater sobre crimes no mercado de moedas virtuais, onde ocorreu a convocação de representantes do Ministério Público Federal que investigam as empresas MinerWorld e D9. Também foi debatida o Projeto de Lei 2 303/2015 que pretende enquadrar as moedas digitais na lei de Arranjos de Pagamentos sob supervisão do Banco Central, semelhantes aos cartões de crédito. </p>",
                15: "<br> <p>Em 2018, a Alemanha legalizou as criptomoedas - dentre elas o Bitcoin - como um meio de pagamento isento de impostos. </p>",
                16: "<br> <p>Portugal não possui um quadro legislativo concreto para criptomoedas com o Bitcoin. No entanto, os ganhos monetários conseguidos através de Bitcoin estão isentos de impostos. </p>",
                17: "<br>"
            },
            7: {
                0: "<h2> </h2>",
                0: "<h2>Sobre O Litecoin </h2>",
                1: "<br> <p><b>Litecoin</b> (símbolo: Ł; abrev: LTC) é uma criptomoeda sustentada por uma rede peer-to-peer e um projeto de software livre lançado sob a licença MIT. É inspirada e quase tecnicamente semelhante a Bitcoin (BTC). A criação e transferência de Litecoin está baseada num protocolo de criptografia de código aberto e não é gerida por uma autoridade central. Os desenvolvedores de Litecoin pretendem tentar melhorar Bitcoin  e oferecem três diferenças fundamentais.  </p>",
                2: "<br> <p>O <em>Litecoin</em> foi fundado por Charlie Lee em dia 7 de outubro de 2011.[7] </p>",
                3: "<br> <p>Em primeiro lugar, a rede Litecoin processa um bloco cada 2,5 minutos, em vez de cada 10 minutos como é o caso do bitcoin.  </p>",
                4: "<br> <p>Segundo, a rede Litecoin irá produzir 84 milhões de litecoins, o que representa quatro vezes mais unidades do que a rede Bitcoin.  </p>",
                5: "<br> <p>Por último, Litecoin utiliza a função scrypt no seu algoritmo de provas de trabalho: uma função sequencial de memória rígida que foi pensada inicialmente por Colin Percival. Esta função tem como objetivo prevenir que a mineração em GPU, FPGA e ASIC tenha uma vantagem significativa sobre a mineração com CPU, embora atualmente a mineração em GPU seja 10 vezes mais eficiente do que a mineração em CPU. Cada litecoin é subdivisível em 100.000.000 unidades menores, definidas por oito casas decimais.</p>",
                6: "<br> <h2>Transações </h2>",
                7: "<br> <p>As transações, saldos, e emissões são geridas por uma rede peer-to-peer muito semelhante à de Bitcoin através de scrypt e seu esquema de provas de trabalho (as Litecoins são emitidas quando é encontrado um valor hash suficientemente pequeno, neste ponto é criado um bloco, o processo de criação dos blocos é chamado de mineração). A taxa de emissão forma uma série geométrica, e esta taxa divide-se em dois a cada 4 anos (cada 840.000 blocos) atingindo um total de 84 milhões de LTC. A natureza intensiva da memória scrypt significa que Litecoin é mais adequada do que Bitcoin, para a mineração em GPU. As implementações FPGA e ASIC são mais custosas para criar scrypt do que para SHA 1 como o usado por Bitcoin. </p>",
                8: "<br> <p>Presentemente, as Litecoins são comercializadas para ambas as moedas fiduciárias e as bitcoins, geralmente nas transações online. As transações reversíveis (bem como as realizadas com cartão de crédito) não são utilizadas normalmente para comprar Litecoins, pois as transações com Litecoin são irreversíveis, portanto, existe o perigo de estorno. A partir de 28 de abril de 2013, 1 LTC vale aproximadamente 4,11 USD ou 0,032 BTC. Isto faz com que Litecoin seja a segunda maior criptomoeda pela capitalização de mercado com um limite de 70.000.000 USD. </p>",
                9: "<br> <h2>História</h2>",
                9: "<br> <p>Litecoin foi lançada através de um cliente de código aberto em Github no dia 7 de outubro de 2011. Foi uma confluência do cliente Bitcoin-Qt, diferenciando-se apenas por ter um tempo modificado de geração de blocos, um algoritmo de hash diverso, e um GUI ligeiramente alterado. A versão atual deste cliente (a partir de 19 de abril 2013) é a v0.6.3c.</p>",
                10: "<br> <p>Foram lançados clientes alternativos, incluindo umo oficial Android, bem como um cliente oficial Electrum.</p>",
                12: "<br> <p>A maior bolsa de Bitcoin, Mt.Gox, anunciou em 25 abril de 2013 que a comercialização de Litecoin foi demorada devido aos ataques dos DDoS no seu sítio web.</p>",
                13: "<br> <p>De modo recente, Litecoin foi anunciada nas notícias como uma alternativa de Bitcoin.</p>",
                14: "<br>"
            },
            8: {

            },
            9: {

            },
            10: {

            },
            11: {

            },
            12: {

            },
            13: {

            },
            14: {

            }
        }
        var MoedasCode = Object.keys(res.data);
        var MoedasRes = Object.values(res.data);

        //console.log("DATA:", MoedasRes);

        var Tarray = Object.keys(MoedasRes).length


        //console.log('Quantidade de moedas:', Tarray);
        for (var x = 0; x < Tarray;) {
            var Tarray2 = Object.keys(content[x]).length
            console.log(Tarray2);
            var moedasCode = MoedasCode[x];
            var moedasV = MoedasRes[x].bid;
            var moedasName = MoedasRes[x].name;

            //  console.log(x, ":", "valor do ", moedasName, " Está: ", moedasV);


            var refNav = document.getElementById('refNav');
            var NavPai = refNav.parentNode;
            var li = document.createElement('li');
            var input = document.createElement('input');
            input.type = "radio";
            input.name = "tabs";
            input.className = "rd_tabs";
            input.id = "tab" + x;
            //input.setAttribute("checked", "");
            var label = document.createElement("label");
            label.setAttribute("for", "tab" + x);
            label.innerHTML = moedasCode + "<br> <a>" + moedasName + "</a>";
            var div = document.createElement("div");
            div.className = "content";
            var spanE = document.createElement("span");
            spanE.className = "Estrangeira";
            var spanSimbolE = document.createElement('span');
            spanSimbolE.innerHTML = "$";
            spanSimbolE.className = "symbol";
            var InputEstra = document.createElement('input');
            InputEstra.type = "text";
            InputEstra.id = "estrangeiro";
            InputEstra.value = 1;
            var spanN = document.createElement("span");
            spanN.className = "Nacional";
            var spanSimbolR = document.createElement('span');
            spanSimbolR.innerHTML = "R$";
            spanSimbolR.className = "symbol";
            var InputNacional = document.createElement('input');
            InputNacional.type = "text";
            InputNacional.id = "nacional";
            InputNacional.className = "nacional";
            InputNacional.value = moedasV;

            NavPai.appendChild(li);
            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(div);
            div.appendChild(spanE);
            spanE.appendChild(spanSimbolE);
            spanE.appendChild(InputEstra);
            div.appendChild(spanN);
            spanN.appendChild(spanSimbolR);
            spanN.appendChild(InputNacional);

            NavPai.insertBefore(li, refNav);

            var divContent = document.createElement("div");
            divContent.className = "Conteudo";
            var refContent = document.createElement("p");

            divContent.appendChild(refContent);
            li.insertBefore(divContent, div);

            for (var y = 0; y < Tarray2; y++) {
                var content2 = ""
                contentResult = content2.concat(content[x][y])
                //console.log(contentResult)
                var spanContent = document.createElement("span")
                spanContent.className = "SpanContent"
                spanContent.innerHTML = contentResult
                divContent.appendChild(spanContent);
                divContent.insertBefore(spanContent, refContent);
            }

            //console.log(contentResult)


            x++;
        }
    })
    .catch(function (error) {
        console.log(error);
    });

