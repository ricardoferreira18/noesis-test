# Documentação

## Componentes disponíveis

* App
* TableHeader
* TableBody
* TableRow
* TableDataCell
* TableExtra
* TableRowImage
* TableRowTodo
* ActionButtons
* ChangeInfo

### App

handleUserClick: utilizado para definir a variável de estado displayRow para os dados da linha clicada.
handleActive: utilizado para definir a variável de estado ativo para o ID da linha clicada.
changeToBoldAndUppercase: uma função que recebe uma string de texto e retorna o texto envolvido num elemento span com estilos de negrito, maiúsculas e um tamanho de letra menor.
handleDelete: uma função assíncrona que recebe um ID e elimina os dados correspondentes da variável de estado data usando o método setData.
handleEdit: uma função que recebe isEditable e rowInfo e define as variáveis de estado isEditable e rowInfo.
handleSave: uma função que recebe um estado e atualiza os dados de uma linha com o mesmo ID na variável de estado data.
handleCancel: uma função que define a variável de estado isEditable como falsa.

### TableHeader

Renderiza a informação vinda do array "head", criando um tr para cada um deles.
Caso o displayRow seja verdade renderiza o resto dos "tr's"

### TableBody

Itera sobre o array `data` e renderiza uma instância do componente TableRow. 

### TableRow

O componente retorna uma única linha de tabela com várias células que contêm as informações do data/item.
Quando a função handleUserClick é activa, esta faz com que a class active seja "activada".

### TableRowImage

O componente recebe um array de imagens e o id delas. 
A const itemImg filtra a imagem correspondente ao id e exibe a mesma se existir.

### TableRowTodo

Tem como objectivo renderizar o número de todos realizado. 
Após uma chamada à API utilizando o ID correto extrai e exibe apenas os todos realizados.

### ActionButtons

Tem dois botões. 
O delete que serve para remover a row a qual está inserido.
O Edit serve para mostrar os input's para editar as informações.

### ChangeInfo

A função onSave é chamada quando o botão "Salvar" é clicado. 
Ela chama onSubmit para enviar as informações ao servidor.
Chama onSaved com o valor true para indicar que as informações foram salvas com sucesso.

A função onCancel é chamada quando o botão "Cancelar" é clicado. 
Ela chama onCanceled com o valor false voltar a dar display da table.

As funções handleChange, handleExtraChange e handleGeoChange
servem para atualizar o estado do componente com as informações inseridas no mesmo.

handleChange atualiza as informações básicas do usuário, handleExtraChange atualiza informações adicionais, 
como endereço e empresa, enquanto handleGeoChange atualiza as informações de latitude e longitude do endereço.

