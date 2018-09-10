
    $('#updateModal').on('click', '.btn .btn-primary', function(){
        var value = $('#exampleInputEmail1').val();
        console.log(value);
        //$('#myModal').modal('hide');
    });

    $('#updateModal').on('hidden.bs.modal', function (e) {
        var value = $('#exampleInputEmail1').val();
        console.log(value);
    });