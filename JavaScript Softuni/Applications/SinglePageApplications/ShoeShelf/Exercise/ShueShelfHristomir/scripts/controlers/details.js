import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




function details(context) {
    checkForLogged(context);
    const docRef = doc(db, "offers", context.params.id);
    getDoc(docRef).then((res) => {
        const salesman = res.data().salesman;
        const { uid } = JSON.parse(localStorage.getItem('userInfo'));
        let isSalesman = false;
        if (salesman === uid) {
            isSalesman = true;
        }

        const clients = res.data().clients;
        let imInTheClientsList = clients.includes(uid);
     
        context.offers = { ...res.data(), isSalesman, imInTheClientsList };

        this.loadPartials({
            'header': './templates/partials/header.hbs',
            'footer': './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/details.hbs');
        })

    })


};

function deleteOffer(context) {

    deleteDoc(doc(db, "offers", context.params.id))
        .then((res) => {
            this.redirect('#/home');
        }).catch((error) => {
            console.log(error.message);
        });
};

export { details, deleteOffer };