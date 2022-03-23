const fs = require('fs');
const colors = require('colors');
let E_X_A_M_P_L_E = {};
let json = JSON.stringify(E_X_A_M_P_L_E);

function collec(folder,collectionName){
	this.insert = ( docs, callback)=>{
			fs.readFile(`./${folder}/${collectionName}.json`, 'UTF-8',(err, data)=>{
				let error;
				if (err){
					error = new Error(`${collectionName} is not defined`.red);
				}else{
				let part2 = JSON.stringify(docs);
				if (part2[0] === '{') {
				let part1 = data.slice(data[0], data.length-1);
				let sum = part1 + ',' + part2 + ']';
				fs.writeFile(`./${folder}/${collectionName}.json`, sum, (err)=>{
					if (err) throw err;
				}) ;
			}else if (part2[0] === '[') {
				    let str = `${part2}`;
					let prt1 = data.slice(data[0], data.length-1);
				    let prt2 = str.slice(1); 
					let add = prt1 + ',' + prt2; 
					fs.writeFile(`./${folder}/${collectionName}.json`, add, (err)=>{
					if (err) throw err;
				});
			
			}else{
				error = new Error('Invalid document type'.red);
			};
			};
				callback(error);
			});
		};

		this.get = (fun)=>{
			fs.readFile(`./${folder}/${collectionName}.json`, 'UTF-8', (err, data)=>{
				if (err) throw err;
				let json = JSON.parse(data);
				let base;
			for(let x = 0; x < json.length;x++){
				let item = json[x];
				fun(item);
				base = JSON.stringify(json);
			    };
			    fs.writeFile(`./${folder}/${collectionName}.json`, base, (err)=>{
					if (err) throw err;
				    });
			})
			
		};
	};

module.exports.database = class {
	constructor(folder){
		this.createCollection =(file, callback)=>{
			fs.mkdir(`${folder}`,(err)=>{
				let error;
				if (err){
					fs.writeFile(`./${folder}/${file}.json`, `[${json}]`, (err)=>{
				if (err) {
					error = new Error(`${file} is not created`.red);
				};
			});
				}else{
					fs.writeFile(`./${folder}/${file}.json`, `[${json}]`, (err)=>{
						if (err) {
							error = new Error(`${file} is not created`.red);
						};
					});
				}
				callback(error, new collec(folder, file));
				
			});
		};

		this.collection = (collectionName)=>{
			return new collec(folder, collectionName)
		}

			
		this.delete = (collectionName, callback)=>{
			fs.unlink(`./${folder}/${collectionName}.json`,(err)=>{
				let error;
				if (err) {
					error = new Error(`Couldn\'t found the collection -> `.red + `${collectionName}`.red.bold);
				}
				callback(error);
			})
		};
		
	}
};

module.exports.remove = (databaseName, callback)=>{
			fs.rmdir(`./${databaseName}`, (err)=>{
				let error;
				if (err) {
					error = new Error('Couldn\'t found the database ->'.bgWhite.red + `${databaseName}`.red.bold);
				};
				callback(error);
			})
};