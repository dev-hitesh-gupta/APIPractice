
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




module.exports = sql;