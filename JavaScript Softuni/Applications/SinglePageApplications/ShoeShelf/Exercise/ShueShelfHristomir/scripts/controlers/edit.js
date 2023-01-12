import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { firebaseConfig } from "../data.js";
import { checkForLogged } from "../helper.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function edit(context) {

    checkForLogged(context);

    const docRef = doc(db, "offers", context.params.id);

    getDoc(docRef).then((res) => {

        context.offers = res.data();

        this.loadPartials({
            'header': './templates/partials/header.hbs',
            'footer': './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/edit.hbs');
        });
    });

};

function postEdit(context) {
  
    const { nameProduct, price, description, brand, imageUrl, salesman } = context.params;

    const docRef = doc(db, "offers", context.params.id);
    getDoc(docRef).then((res) => {

        return setDoc(doc(db, "offers", context.params.id), {
            ...res.data(),
            nameProduct,
            price,
            description,
            brand,
            imageUrl
        });
    }).then((res) => {
        this.redirect(`#/details/${context.params.id}`);
    })
        .catch((error) => {
            console.log(error.message);
        });;



}

export { edit, postEdit };