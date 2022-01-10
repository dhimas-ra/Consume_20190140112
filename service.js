function getAll(){
    const respon = axios.get("http://localhost:8080/mobil/rental")
    const m = respon.then(resp => resp.data)
    return m
}

async function create(data){
    await axios.post("http://localhost:8080/mobil/rental", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
    
async function update(data){
    await axios.put("http://localhost:8080/mobil/rental", mobil)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function del(data){
    await axios.delete("http://localhost:8080/mobil/rental", mobil)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}