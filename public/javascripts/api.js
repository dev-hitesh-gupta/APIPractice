const postUser = user => 
    $.ajax({
        type: 'POST',
        url: '/api/users/v1',
        data: user,
        success: function(resultData) { alert("Save Complete") }
    });

const getUsers = () => 
    $.ajax({
        url: '/api/users/v1',
        success: function(resultData) { 
            $('#tableBody').html('');
            resultData.data.map(user => addUserToTable(user));
            
        }
    });
