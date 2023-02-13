# JavaScript Advanced - React - Proiectul 2

Magazinul online dondonwear este cel de-al doilea proiect din cadrul cursului JavaScript Advanced - React de la Telecom Academy.  


## Demo

https://main--effulgent-muffin-e4133e.netlify.app/


## Functionalitati

* Click pe orice categorie - va lista produsele corespunzatoare

* Click pe orice produs  - doar produsul ales va fi afisat 

* Click pe butonul "Adauga in cos" al fiecarui produs(fie din pagina de categorie, fie din pagina de produs) - produsul va fi adaugat in cos. Iconita corepsunzatoare se actualizeaza daca produsul nu exista deja in cos

* Click pe produs - va duce catre pagina produsului

* Click pe "Login" - va redirecta catre pagina de Login, 

* Click pe butonul "Google login" sau "Facebook" pentru logoare cu providerul ales

* Click pe cos(iconita) - va afisa produsele adaugate in cos. La click pe iconita "X" puteti elimina un produs din cos

* Click pe iconita "inima" din header pentru a vizualiza produsele adaugate in lista de favorite - daca sunt produse in lista, iconita este plina; daca lista este goala, iconita este doar conturata

* Click pe iconita "inima" din pagina de categorie din dreptul unui produs pentru a il adauga in Lista de Favorite - daca produsul este in lista, iconita este plina; 

* Click pe filtrare din pagina de categorie pentru a filtra produsele in functie de pret; cele 3 intervale de filtrare se seteaza dinamic in functie de produsele afisate: (Pretul_maxim - Pretul_minim)/3

* Click pe RESET FILTER - se reseteaza filtrul de pret


## Pentru a rula local proiectul

1. `git clone https://github.com/danieleduardpopa/proiect2-react.git`

2. `cd proiect2-react`

3. `npm install`

4. `npm start`



## Dependinte folosite

* Am folosit Hooks deoarece varianta de react-router nu permite folosirea de clase;


