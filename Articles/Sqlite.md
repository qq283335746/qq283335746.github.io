# 数据库之Sqlite
[How can I access sqlite DB from another machine?](https://www.codeproject.com/Questions/1166694/How-can-I-access-sqlite-DB-from-another-machine)
```
导读：Sqlite is file-based only. There is no way to talk to it over TCP/IP.

Like an Access database file, you have to have the database file in a network shared folder. The path is usually going to be a UNC path, like "\\server\sharename\folderpath\databasefile".

The "DataSource" part has to be part of the string you build. You don't have that. You need this:
string connString = @"Data Source=\\" + txtipaddress.Text + @"\qscanDBAttacheds\test.s3db;Version=3;New=False;Compress=True;"
```