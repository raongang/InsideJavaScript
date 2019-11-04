 bruce = {
    name : 'Bruce'
};
	
function update(birthYear, occupation){
        this.birthYear = birthYear;
        this.occupation = occupation;
    };

    update.call(bruce, 1949, 'singer'); // bruce 변경


