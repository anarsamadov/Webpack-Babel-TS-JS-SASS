interface CRUD {
    create():any;
    read():any;
    update():any;
    delete():any;
}

class MySQL implements CRUD {
    create(){console.log("Create MySQL");}
    read(){console.log("Read MySQL");}
    update(){console.log("Update MySQL");}
    delete(){console.log("Delete MySQL");}
}

class PostgreSql implements CRUD {
    create(){console.log("Create PostgreSql");}
    read(){console.log("Read PostgreSql");}
    update(){console.log("Update PostgreSql");}
    delete(){console.log("Delete PostgreSql");}
}

const readDb =(db:CRUD)=>{
    db.read();
}

let mysql=new MySQL();
mysql.update();

let postgreSql=new PostgreSql();
postgreSql.delete();

readDb(new PostgreSql());
readDb(new MySQL());