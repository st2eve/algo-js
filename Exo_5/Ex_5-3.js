/*
Try to refactor the const declarations to use a single line of destructuring:

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  // const {} = info // <-- replace the next few `const` lines with this
  const title = info.title
  const protagonistName = info.protagonist.name
  const enemy = info.protagonist.enemies[3]
  const enemyTitle = enemy.title
  const enemyName = enemy.name
    
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
*/

function nestedArrayAndObject() {
    // refactor this to a single line of destructuring...
    const info = {
      title: 'Once Upon a Time',
      protagonist: {
        name: 'Emma Swan',
        enemies: [
          {name: 'Regina Mills', title: 'Evil Queen'},
          {name: 'Cora Mills', title: 'Queen of Hearts'},
          {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
          {name: 'Zelena', title: 'The Wicked Witch'},
        ],
      },
    }
    /*const {title, protagonist:{name, ennemies:[name, title]}} = info;*/

    // const {} = info // <-- replace the next few `const` lines with this
    /*const title = info.title
    const protagonistName = info.protagonist.name
    const enemy = info.protagonist.enemies[3]
    const enemyTitle = enemy.title
    const enemyName = enemy.name*/

    const {title, protagonist: {name: protagonistName, enemies: [,,,{name: enemyName, title: enemyTitle}]}} = info;
      
    /*return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`*/
    console.log(`${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`);
  }

  nestedArrayAndObject();