 function consulta(){
            var sigla = document.getElementById('nomeSimbolo').value;
            
            
            var request = new XMLHttpRequest();

            request.open("GET",'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+sigla+'&apikey=76VS1DIF8E7EU7QD', false);
            request.send();//A execução do script pára aqui até a requisição retornar do servidor    
             
            //criando uma divisão
            var para = document.createElement("DIV");

            //criando botão
            var btn = document.createElement("button");
            btn.innerHTML = 'x';
            //adicionando botão na divisao
            para.appendChild(btn);
            //adicionando evento no botao
            btn.addEventListener("click", removeItem);
            //transformando resposta em um objeto
            x = JSON.parse(request.response)
                symb = x["bestMatches"][0]["1. symbol"]
                nome = x["bestMatches"][0]["2. name"]
                currency = x["bestMatches"][0]["8. currency"]

                
              
            var request = new XMLHttpRequest();
            //fazendo requisição
            request.open("GET",'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+symb+'&apikey=76VS1DIF8E7EU7QD', false);    
            request.send();
            //tranformando resposta em um objeto
            j = JSON.parse(request.response)
              
              //definindo variáveis para receber os valores retornados
              symbol = j["Global Quote"]["01. symbol"]
              open = j["Global Quote"]["02. open"]
              high = j["Global Quote"]["03. high"]
              low = j["Global Quote"]["04. low"]
              price = j["Global Quote"]["05. price"]
              volume = j["Global Quote"]["06. volume"]
              latest  = j["Global Quote"]["07. latest trading day"]
              previous = j["Global Quote"]["08. previous close"]
              change = j["Global Quote"]["09. change"]
              percent = j["Global Quote"]["10. change percent"]

              
              //criando elemento 'p' para armazenar a informação 
              var aa = document.createElement("p");
              //inserindo informação na tag 'p'
              //aa.innerHTML = '<img src="img/'+symb+'.jpg" alt="Logo da Empresa">';
              aa.innerHTML = '<img src="img/'+symb+'.jpg" alt="Logo da Empresa">';
              
              //adicionando a divisao 'para' no corpo do documento html
              document.body.appendChild(para);
              //adicionando a tag 'p' na divisão 'para'
              para.appendChild(aa);

              var al = document.createElement("p");
              al.innerHTML = '<br>Nome : '+nome;
              document.body.appendChild(para);
              para.appendChild(al);
              
              var am = document.createElement("p");
              am.innerHTML = '<br>Moeda : '+currency;
              document.body.appendChild(para);
              para.appendChild(am);
              
              var ab = document.createElement("p");
              ab.innerHTML = '<br>Simbolo : '+symbol;
              document.body.appendChild(ab);
              para.appendChild(ab);
              
              var ac = document.createElement("p");
              ac.innerHTML = '<br>Abertura : '+open;
              document.body.appendChild(ac);
              para.appendChild(ac);
              
              var ak = document.createElement("p");
              ak.innerHTML = '<br>Alta : '+high;
              document.body.appendChild(ak);
              para.appendChild(ak);
              
              var ad = document.createElement("p");
              ad.innerHTML = '<br>Baixa : '+low;
              document.body.appendChild(ad);
              para.appendChild(ad);
              
              var ae = document.createElement("p");
              ae.innerHTML = '<br>Preço : '+price;
              document.body.appendChild(ae);
              para.appendChild(ae);
              
              var af = document.createElement("p");
              af.innerHTML = '<br>Volume : '+volume;
              document.body.appendChild(af);
              para.appendChild(af);
              
              var ag = document.createElement("p");
              ag.innerHTML = '<br>Última atualização : '+latest;
              document.body.appendChild(ag);
              para.appendChild(ag);
              
              var ah = document.createElement("p");
              ah.innerHTML = '<br>Pré-fechamento : '+previous;
              document.body.appendChild(ah);
              para.appendChild(ah);
              
              var ai = document.createElement("p");
              ai.innerHTML = '<br>Mudança : '+change;
              document.body.appendChild(ai);
              para.appendChild(ai);
              
              var aj = document.createElement("p");
              aj.innerHTML = '<br>Percentual Mudança : '+percent;
              document.body.appendChild(aj);
              para.appendChild(aj);
              
              //limpando campo
              document.getElementById('nomeSimbolo').value='';

    

        }


//função para remover divisão ao clicar no botão
function removeItem(evento){
  evento.target.parentNode.remove();
}
