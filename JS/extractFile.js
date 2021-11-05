function extractFile(string) {
    let arr = string.split('\\');
    let file = arr[arr.length - 1];
    let array = file.split('.');
    
    let extension = array.pop();
    let name = array.join('.');
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');