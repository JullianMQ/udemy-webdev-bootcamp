function Beer() {
    let beer = 99;

    while (beer >= 0) {
        if (beer > 2) {
            console.log(`${beer} bottles of beer in the wall. Take one down, pass it around. ${beer - 1} bottles of beer in the wall.`)
        } else if (beer === 2) {
            console.log(`${beer} bottles of beer in the wall. Take one down, pass it around. ${beer - 1} bottle of beer in the wall.`)
        } else if (beer === 1) {
            console.log(`${beer} bottle of beer in the wall. Take one down, pass it around. No more bottles of beer in the wall.`)
        }
        else {
            console.log(`No more bottles of beer in the wall. Buy one at the grocery store.`)
        }
        beer--;
    }

}
Beer();
