function cubes(){
    let container = document.querySelector('.container');
    let zValues = [-3,-2,-1,0,1,2,3];
    zValues.forEach(z => {
        let cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.setProperty('--z',z);

        for (let x = -3; x <= 3; x++){
            let div = document.createElement('div');
        }
    })
}