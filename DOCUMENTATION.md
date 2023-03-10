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
* EditInfo

### Lógica e estados.

** user - contem a lista de users fetched da https://jsonplaceholder.typicode.com/users
** handleUserClick - retorna true ao ser clicado numa <td>.
** displayRow - boolean quando true mostra o resto da informação.
** handleActive - a função coloca "active" na <td> clicada. Mudando o estilo para "active". Varia conforme a <td> clicada.
** handleDelete - função que serve para apagar user da lista.
** isEditable - ao ficar true, representa o componente EditInfo.
** rowInfo (object): informação do user que está a ser editada.
** handleEdit - ao clicar no botão edit. mostra o EditInfo. E apresenta nos input's a informação do user clicado.
** handleChange : faz update da rowInfo state quando o input é alterado.
** handleExtraChange - semelhante ao anterior faz update ao rowInfo state quando o input é alterado. neste caso é quando tem um nested object  rowInfo[path]
** handleGeoChange - semelhante ao anterior. Com mudança em especial no nested object rowInfo.address.geo state.
** handleCancel - faz com que o isEditable torne falso. Fazendo display do table.
** handleSave - faz update ao user state com a informação editada do user. O isEditable fica falso, fazendo display do table.
** onSubmit - envia para o servidor a informação editada do user.

### To start the project

The node version I recommend is v19.5.0

First run `npm install` or `npm i`

