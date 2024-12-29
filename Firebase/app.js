import{db,app,collection,deleteDoc,updateDoc,addDoc,getDocs,doc} from "./firebase.js"
// console.log(db);
// console.log(app);
// console.log(collection);
// console.log(addDoc);


const addData = document.querySelector("#add_data")
const readData = document.querySelector("#read_data")
const deleteData = document.querySelector("#delete_data")
const updateData = document.querySelector("#update_data");




const add = async() =>{
    try {
        const mydocRef = await addDoc(collection(db,"myUsers"),{
            firstName : "Hassan",
            lastName : "Irfan",
            age : 23,
            born : 2001,
            Uni : "IOBM",
            Department : "Charter Accountant",
            LPA : 20

        })
        console.log("Document Succesfully Added with ID: ", mydocRef.id);
      } catch (e) {
        console.error("Error adding document: ", e.message);
      }
}



const read = async () =>{
    try {
        const query = await getDocs(collection(db,"myUsers"));
        query.forEach((doc) => {
            console.log(`Document ID: ${doc.id}`, doc.data());
            console.log("Readed Succesfully");
            
        });
    } catch (error) {
        console.log("Someting Went Wrong", error.message);
        
    }
} 

const remove = async () =>{
    try {
        await deleteDoc(doc(db, "myUsers", "qswtHz2HbogaZeOxpgI1"));//jis ko remove krna ha uski id do
        console.log("Data Removed Succesfully");
        
    } catch (error) {
        console.log("Something Went Wrong", error.message)
    }
}



const update = async () => {
    try {
        const docRef = doc(db, "myUsers", "qswtHz2HbogaZeOxpgI1");//jis ko Update krna ha uski id do
        
        await updateDoc(docRef, {
            age: 24,
            LPA: 35, 
        });

        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error.message);
    }
};

addData.addEventListener("click",add)
readData.addEventListener("click",read)
deleteData.addEventListener("click",remove)
updateData.addEventListener("click", update);













