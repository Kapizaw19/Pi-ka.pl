
if (sessionStorage.getItem('l_wizyty')) {

    let count = parseInt(sessionStorage.getItem('l_wizyty')) + 1;
    sessionStorage.setItem('l_wizyty', count);
    document.getElementById('l_wizyty').innerText = count;

} else {

    sessionStorage.setItem('l_wizyty', 1);
    document.getElementById('l_wizyty').innerText = 1;
    
}