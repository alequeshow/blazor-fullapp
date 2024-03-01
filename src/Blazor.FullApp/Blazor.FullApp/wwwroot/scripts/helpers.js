function Redirect(obj) {
    window.location = $(obj).attr("formaction");
}

function SimplexDataTable(table) {
    $(table).DataTable(
        {
            "searching": false,
            "paging": false,
            "language": {
                "zeroRecords": "Nenhum registro encontrado",
                "info": "_TOTAL_ registro(s) encontrado(s)",
                "infoEmpty": "Sem registros disponíveis",
                "infoFiltered": "(Filtrados do total de _MAX_ registros)"
            }
        }
    );
}

function SimplexDataTable(table, width) {
    var columns = [];

    width.forEach(function (column) {
        var def = { "width": column };
        columns.push(def);
    });

    //TODO: Use try catch to give custom js error
    $(table).DataTable(
        {
            "searching": false,
            "paging": false,
            "columns": columns,
            "language": {
                "zeroRecords": "Nenhum registro encontrado",
                "info": "_TOTAL_ registro(s) encontrado(s)",
                "infoEmpty": "Sem registros disponíveis",
                "infoFiltered": "(Filtrados do total de _MAX_ registros)"
            }
        }
    );
}

function SimplexDataTableOrdered({ table, width, order, fixedOrder = false, lastOrderable = true }) {
    var columnDefs = [];
    var columns = [];

    width.forEach(function (column) {
        var def = { "width": column };
        columns.push(def);
    });

    var last = $(table).find('th').length - 1;

    columnDefs.push({ "targets": last, "orderable": lastOrderable });
    columnDefs.push({ "targets": "_all", "orderable": !fixedOrder });

    //TODO: Use try catch to give custom js error
    $(table).DataTable(
        {
            "searching": false,
            "paging": false,
            "columns": columns,
            "columnDefs": columnDefs,
            "order": order,
            "language": {
                "zeroRecords": "Nenhum registro encontrado",
                "info": "_TOTAL_ registro(s) encontrado(s)",
                "infoEmpty": "Sem registros disponíveis",
                "infoFiltered": "(Filtrados do total de _MAX_ registros)"
            }
        }
    );
}

function DataTableRowGroup(table, columnGroup) {
    //TODO Validate columnGroup

    //TODO: Use try catch to give custom js error
    var t = $(table).DataTable(
        {
            "searching": false,
            "paging": false,
            "order": [[2, 'asc']],
            "rowGroup": {
                "dataSrc": columnGroup
            },
            "language": {
                "zeroRecords": "Nenhum registro encontrado",
                "info": "_TOTAL_ registro(s) encontrado(s)",
                "infoEmpty": "Sem registros disponíveis",
                "infoFiltered": "(Filtrados do total de _MAX_ registros)"
            }
        }
    );

    return t;
}

function DataTableRowGroup(table, columns, columnGroup) {
    //TODO Validate columnGroup

    var columnDefs = [];

    columns.forEach(function (column, index) {
        var def = { "width": column };

        if (index === columnGroup) {
            def = {
                "width": column,
                "visible": false
            };
        }

        columnDefs.push(def);
    });

    //TODO: Use try catch to give custom js error
    var t = $(table).DataTable(
        {
            "searching": false,
            "paging": false,
            "columns": columnDefs,
            "order": [[columnGroup, 'asc']],
            "rowGroup": {
                "dataSrc": columnGroup
            },
            "language": {
                "zeroRecords": "Nenhum registro encontrado",
                "info": "_TOTAL_ registro(s) encontrado(s)",
                "infoEmpty": "Sem registros disponíveis",
                "infoFiltered": "(Filtrados do total de _MAX_ registros)"
            }
        }
    );

    return t;
}

function changeSwitchery(element, checked) {
    if ((element.is(':checked') && checked === false) || (!element.is(':checked') && checked === true)) {
        element.parent().find('.switchery').trigger('click');
    }
}

function ParseDate(stringDate) {
    var splitDate = stringDate.split("/");
    var day = splitDate[0];
    var month = splitDate[1] - 1;
    var year = splitDate[2];

    return new Date(year, month, day);
}

function ShowButtonLoading(elem) {
    var loading = $('.btn-loading').clone();
    $(elem).append(loading);
    $(elem).prop("disabled", true);
    $(elem).find('.btn-loading').show();
}

function HideButtonLoading(elem) {
    $(elem).prop("disabled", false);
    $(elem).find('.btn-loading').remove();
}

function CalcularIdade(dataNascimento) {
    var idadeDiff = Date.now() - dataNascimento;
    var idadeData = new Date(idadeDiff);
    var idade = Math.abs(idadeData.getUTCFullYear() - 1970);

    return idade;
}

function GerarCustomUuid(prefix) {
    if (prefix !== '') {
        prefix = prefix + '-';
    }

    return `${prefix}xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}