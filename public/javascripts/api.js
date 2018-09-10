const postUser = user => 
    $.ajax({
        type: 'POST',
        url: '/api/v1/users',
        data: user,
        success: function(resultData) { alert("Save Complete") }
    });

const getUsers = () => 
    $.ajax({
        url: '/api/v1/users',
        success: function(resultData) { 
            $('#tableBody').html('');
            resultData.data.map(user => addUserToTable(user));
            
        }
    });
