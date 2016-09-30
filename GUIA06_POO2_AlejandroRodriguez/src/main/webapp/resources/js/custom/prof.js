$(document).ready(function() {
    $.fn.initBootTable = function() {
        $(this).bootstrapTable('destroy');
        $(this).bootstrapTable().
        unbind('check.bs.table').on('check.bs.table', function (e, row) {
            consProfe([{name : 'codiProfePara', value : row.id.trim()}]);
        });
        return false;
    };
    //Eliminar
    $.fn.funcElimProfe = function() {
        $(this).confirmation(
        {
            popout: true,
            onConfirm: function() {
                elimProfe();
                $('[data-toggle="confirmation-popout"]').confirmation('hide');
                return false;
            },
            onCancel: function()
            {
                $('[data-toggle="confirmation-popout"]').confirmation('hide');
                return false;
            }
        });
        return false;
    };
    
    INIT_OBJE_ALUM();
});

function INIT_OBJE_ALUM()
{
    $("#TablProfe").initBootTable();
    $("#FormProf\\:btonElim").funcElimProfe();
}