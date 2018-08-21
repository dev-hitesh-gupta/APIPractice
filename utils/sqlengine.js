
const sql = {};

sql.insert = (tableName, params) => {
        let sqlquery = "insert into "+tableName ;
        let values = 'values (';
        let fields = ' (';
        for( paramName in params ){
            fields += paramName+', ';
            values += `'`+params[paramName]+`', `;
        }
        values = values.substring(0,(values.length - 2))+')';
        fields = fields.substring(0,(fields.length - 2))+')';
        sqlquery += fields + values ;
        console.info("SQL: "+sqlquery);
        return sqlquery;
}

sql.select = (tableName, query) => {
    
}

sql.delete = (tableName, id) => {
    let sqlquery = "delete from "+tableName+" where id = "+id;
    console.info("SQL: "+sqlquery);
    return sqlquery;    
}

sql.update = (tableName, id, params) => {
    let sqlquery = "update "+tableName+" set ";
    for( paramName in params )
        if( params[paramName] )
            sqlquery += paramName+" = '"+params[paramName]+"', ";
    sqlquery = sqlquery.substring(0,(sqlquery.length - 2))+' where id = '+id;
    console.info("SQL: "+sqlquery);
    return sqlquery;
}

module.exports = sql;