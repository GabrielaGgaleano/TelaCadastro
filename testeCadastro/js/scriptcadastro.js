class Pessoa{
    constructor(){
       this.id = 1;
       this.arrayPessoa = [];
       this.editId = null;
    }

    salvar(){
        let pessoa = this.lerDados();
        if(this.validaCampos(pessoa)) {
            if(this.editId == null) {
                this.adicionar(pessoa);
            }
            else {
                this.atualizar(this.editId, pessoa);
            }
            
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayPessoa.length; i++ ) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_NomeCompleto = tr.insertCell();
            let td_CPF = tr.insertCell();
            let td_Genero = tr.insertCell();
            let td_Telefone = tr.insertCell();
            let td_Endereco = tr.insertCell();
            let td_Observacoes = tr.insertCell();
            let td_Acoes = tr.insertCell();

            td_id.innerText = this.arrayPessoa[i].id;
            td_NomeCompleto.innerText = this.arrayPessoa[i].nomecompleto;
            td_CPF.innerText = this.arrayPessoa[i].cpf;
            td_Genero.innerText = this.arrayPessoa[i].genero;
            td_Telefone.innerText = this.arrayPessoa[i].telefone;
            td_Endereco.innerText = this.arrayPessoa[i].endereco;
            td_Observacoes.innerText = this.arrayPessoa[i].observacoes;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/write.png';
            imgEdit.setAttribute("onclick", "pessoa.preparaEditar("+ JSON.stringify(this.arrayPessoa[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/bin.png';
            imgDelete.setAttribute("onclick", "pessoa.deletar("+this.arrayPessoa[i].id +")")

            td_Acoes.appendChild(imgEdit);
            td_Acoes.appendChild(imgDelete);

            td_Acoes.classList.add('center');
        }
    }

    adicionar(pessoa) {
        pessoa.cpf = parseFloat(pessoa.cpf)
        pessoa.telefone = parseFloat(pessoa.telefone)
        this.arrayPessoa.push(pessoa);
        this.id++;
    }

    atualizar(id, pessoa) {
        for (let i = 0; i < this.arrayPessoa.length; i++) {
            if(this.arrayPessoa[i].id == id) {
                this.arrayPessoa[i].nomecompleto = pessoa.nomecompleto;
                this.arrayPessoa[i].cpf = pessoa.cpf;
                this.arrayPessoa[i].genero = pessoa.genero;
                this.arrayPessoa[i].telefone = pessoa.telefone;
                this.arrayPessoa[i].endereco = pessoa.endereco;
                this.arrayPessoa[i].observacoes = pessoa.observacoes;
            }
        }
    }

    preparaEditar(dados) {
        this.editId = dados.id;

        document.getElementById('NomeCompleto').value = dados.nomecompleto;
        document.getElementById('CPF').value = dados.cpf;
        document.getElementById('Genero').value = dados.genero;
        document.getElementById('Telefone').value = dados.telefone;
        document.getElementById('Endereco').value = dados.endereco;
        document.getElementById('Observacoes').value = dados.observacoes;

        document.getElementById('btnAdd').innerText = 'Atualizar';
    }

    lerDados(){
        let pessoa = {}

        pessoa.id = this.id;
        pessoa.nomecompleto = document.getElementById('NomeCompleto').value;
        pessoa.cpf = document.getElementById('CPF').value;
        pessoa.genero = document.getElementById('Genero').value;
        pessoa.telefone =  document.getElementById('Telefone').value;
        pessoa.endereco = document.getElementById('Endereco').value;
        pessoa.observacoes = document.getElementById('Observacoes').value;

        return pessoa;
    }
   
    validaCampos(pessoa){
        let msg = '';
        if(pessoa.nomecompleto == ''){
            msg += 'Informe o Nome Completo \n';
        } 
        if(pessoa.cpf == ''){
            msg += 'Informe o CPF \n';
        } 
        if(pessoa.genero== ''){
            msg += 'Informe o gênero \n';
        } 
        if(pessoa.telefone== ''){
            msg += 'Informe o telefone \n';
        } 
        if(pessoa.endereco == ''){
            msg += 'Informe o endereço \n';
        } 
        if(pessoa.observacoes == ''){
            msg += 'Informe observações\n';
        } 
        if(msg !=''){
            alert(msg);
            return false 
        }
        return true;

    }

    cancelar(){
        document.getElementById('NomeCompleto').value = '';
        document.getElementById('CPF').value = '';
        document.getElementById('Genero').value = '';
        document.getElementById('Telefone').value = '';
        document.getElementById('Endereco').value = '';
        document.getElementById('Observacoes').value = '';

        document.getElementById('btnAdd').innerText = 'Adicionar';
        this.editId = null;
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayPessoa.length; i++) {
            if(this.arrayPessoa[i].id == id) {
                this.arrayPessoa.splice(i , 1);
                tbody.deleteRow(i);
            }
        }
    }


}
var pessoa = new Pessoa();


