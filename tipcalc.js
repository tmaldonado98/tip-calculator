
$(document).ready(()=>{
    $('#bill-amt').val(undefined);
    $('#tip-perc').val(undefined);
    $('#tip-amt').val(undefined);
    $('#total-bill').val(undefined);
})

/*$('#bill-amt').keypress(()=>{
    $('#bill-amt').val('$');
    document.writeln(   )
})*/


$('#tip-perc').keydown((e)=>{
    if(e.keyCode == 13){
        
            $('#tip-amt').val(eval(Number($('#bill-amt').val())* Number(($('#tip-perc').val()* 0.01)) ));
            $('#tip-amt').html('$' + Number($('#tip-amt').val()));
            $('#total-bill').val(eval(Number($('#bill-amt').val()) + Number(eval($('#bill-amt').val()* ($('#tip-perc').val()* 0.01)))));
            $('#total-bill').html('$' + Number($('#total-bill').val()));
            console.log($('#tip-amt').val())
            console.log($('#total-bill').val())
    }
});


$('#calculate').click(()=> {
    $('#tip-amt').val(eval(Number($('#bill-amt').val())* Number(($('#tip-perc').val()* 0.01)) ));
    $('#tip-amt').html('$' + Number($('#tip-amt').val()));
    $('#total-bill').val(eval(Number($('#bill-amt').val()) + Number(eval($('#bill-amt').val()* ($('#tip-perc').val()* 0.01)))));
    $('#total-bill').html('$' + Number($('#total-bill').val()));
    console.log($('#tip-amt').val())
    console.log($('#total-bill').val())
});

$('#clear').click(()=>{
    $('#bill-amt').val(undefined);
    $('#tip-perc').val(undefined);
    $('#tip-amt').val(undefined);
    $('#tip-amt').html('');
    $('#total-bill').val(undefined);
    $('#total-bill').html('');
});