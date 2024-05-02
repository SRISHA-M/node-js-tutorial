const path=require('path')
const fspromises=require('fs/promises')

const filesys = async() => {
    try{
        const data=await fspromises.readFile(path.join(__dirname,'files','start.txt'),'utf-8')
        console.log(data)
        await fspromises.writeFile(path.join(__dirname,'files','sri.txt'),'hiii hellow how are u to all')
        console.log('write successfully')
        await fspromises.appendFile(path.join(__dirname,'files','sri.txt'),'hiii hellow how are u to all i am fine')
        console.log('append succesfully')
        await fspromises.rename(path.join(__dirname,'files','sri.txt'),path.join(__dirname,'files','tnx.txt'))
        console.log('rename successfully')
        await fspromises.unlink(path.join(__dirname,'files','tnx.txt'))
        console.log('unlink successfully')
    }
   
    catch(err){
        console.log(err)
    }
}
filesys()

