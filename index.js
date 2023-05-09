const data = []
function addLocalStorage(){
    let dataName = document.getElementById('idName').value;
    let dataAge = document.getElementById('idAge').value; 
    let teste = {
        id: Math.random(5 * 20),
        nameDataVar: dataName,
        age: dataAge
    }
    let addValue = data.push(teste.age, teste.nameDataVar, teste.id)
        if(teste = ""){
            console.log("Invalid")
        }else{
            
                addValue;
                localStorage.setItem(data, teste);
                localStorage.getItem(data, teste);
                console.log(data)
                
                document.getElementById('output').innerText = data;
            }
        document.getElementById('idName').value = "";
        document.getElementById('idAge').value = "";
        }
        
function deleteLocalStorage(){
        localStorage.clear();
    }
    